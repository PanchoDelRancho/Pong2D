const INITIAL_VELOCITY = 0.025;

const links = [
  "https://www.linkedin.com/in/francisco-a-78ba8811a/",
  "https://github.com/PanchoDelRancho",
  "https://github.com/PanchoDelRancho/Pong2D",
  "https://github.com/HemoglobinGoblin/hatManApp",
];
let ballSize = 2.5;
let paddleSize = 15;
let velocity = INITIAL_VELOCITY;
let position = 50;
let ballPos = { x: 50, y: 50 };
let ballAcc = { x: 0, y: 0 };
let keyPressed = false;
let paddleLeftPosition;
let paddleRightPosition;
let colors = ["#5ff5f8", "#FFFF00", "#FF1E1E", "#16FF00"];

const Game = () => {
  //   paddle movement code
  const movePaddle = (e) => {
    let paddleLeft = document.getElementById("left");
    let paddleRight = document.getElementById("right");

    if (!keyPressed) {
      keyPressed = true;
      reset();
    }
    if (e.key === "w") {
      if (position >= 7.5) position--;
      paddleLeft.style.setProperty("--position", position);
      paddleRight.style.setProperty("--position", position);
    }
    if (e.key === "s") {
      if (position <= 92.5) position++;
      paddleLeft.style.setProperty("--position", position);
      paddleRight.style.setProperty("--position", position);
    }
    paddleLeftPosition = getCurrentPaddle("left");
    paddleRightPosition = getCurrentPaddle("right");
  };
  document.addEventListener("keydown", movePaddle);

  // initiate game function

  const reset = () => {
    position = 50;
    ballPos = { x: 50, y: 50 };
    ballAcc = { x: 0, y: 0 };
    while (Math.abs(ballAcc.x) <= 0.2 || Math.abs(ballAcc.y) >= 0.9) {
      const heading = randomNumberBetween(0, 2 * Math.PI);
      ballAcc = { x: Math.cos(heading), y: Math.sin(heading) };
    }
    velocity = INITIAL_VELOCITY;
  };
  const randomNumberBetween = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  //get current pixel based positions
  const getCurrentBallPosition = () => {
    return document.getElementById("ball").getBoundingClientRect();
  };

  const getCurrentPaddle = (side) => {
    return document.getElementById(side).getBoundingClientRect();
  };

  //    ball movement code

  const isCollision = (rect1, rect2) => {
    return (
      rect1.left <= rect2.right &&
      rect1.right >= rect2.left &&
      rect1.top <= rect2.bottom &&
      rect1.bottom >= rect2.top
    );
  };

  const setBallMovement = (delta) => {
    ballPos.x += ballAcc.x * velocity * delta;
    ballPos.y += ballAcc.y * velocity * delta;

    moveBall();

    const currPixelPos = getCurrentBallPosition();

    powerBlockCollision(currPixelPos);
    linkCollision(currPixelPos);

    let paddleRecs = [paddleLeftPosition, paddleRightPosition];

    if (currPixelPos.bottom >= window.innerHeight || currPixelPos.top <= 0) {
      ballAcc.y *= -1;
    }

    if (currPixelPos.right >= window.innerWidth || currPixelPos.left <= 0) {
      reset();
      keyPressed = false;
    }

    if (paddleRecs.some((r) => isCollision(r, currPixelPos))) {
      ballAcc.x *= -1;
    }
  };

  const moveBall = () => {
    let ball = document.getElementById("ball");

    ball.style.setProperty("--x", ballPos.x);
    ball.style.setProperty("--y", ballPos.y);
  };

  // check for power block collision with ball
  const checkCollDir = (rect1, rect2) => {
    const x1 = rect1.left + rect1.width / 2;
    const y1 = rect1.top + rect1.height / 2;
    const x2 = rect2.left + rect2.width / 2;
    const y2 = rect2.top + rect2.height / 2;

    const dx = x1 - x2;
    const dy = y1 - y2;
    const angle = Math.atan2(dy, dx);
    const direction = angle * (180 / Math.PI);

    if (direction < -45 && direction > -135) {
      // return "up";
      ballAcc.y *= -1;
      return;
    } else if (direction >= -45 && direction <= 45) {
      // return "right";
      ballAcc.x *= -1;
      return;
    } else if (direction > 45 && direction < 135) {
      // return "down";
      ballAcc.y *= -1;
      return;
    } else {
      // return "left";
      ballAcc.x *= -1;
      return;
    }
  };

  const powerBlockCollision = (rect2) => {
    const blocks = document.getElementsByClassName("powerBlock");
    //check for collision on all blocks returns first collision found
    for (let i = 0; i < blocks.length; i++) {
      const rect1 = blocks[i].getBoundingClientRect();
      if (isCollision(rect1, rect2)) {
        blocks[i].classList.remove("powerBlock");
        randomEffect();
        document
          .getElementById("myName")
          .style.setProperty(
            "--color",
            colors[Math.floor(Math.random() * colors.length)]
          );
        return checkCollDir(rect1, rect2);
      }
    }
  };
  // create random effects for powerblocks
  const randomEffect = () => {
    let randomNum = Math.random() * 3;
    let n = Math.floor(Math.random() * 3);
    switch (n) {
      case 0:
        document
          .getElementById("left")
          .style.setProperty("--size", `${paddleSize * randomNum}vh`);
        document
          .getElementById("right")
          .style.setProperty("--size", `${paddleSize * randomNum}vh`);
        break;
      case 1:
        document
          .getElementById("ball")
          .style.setProperty("--ballSize", `${ballSize * randomNum * 2}vh`);
        break;
      case 2:
        velocity *= randomNum;
        break;
      default:
        console.log("err in randomEffect");
    }
  };
  // links functionality

  const linkCollision = (rect2) => {
    const blocks = document.getElementsByClassName("link");
    //check for collision on all blocks returns first collision found
    for (let i = 0; i < blocks.length; i++) {
      const rect1 = blocks[i].getBoundingClientRect();
      if (isCollision(rect1, rect2)) {
        blocks[i].classList.remove("link");
        window.open(links[i], '_blank')
        links.splice(i,1)
        return checkCollDir(rect1, rect2);
      }
    }
  };

  //    animate code using requestAnimationFrame

  let lastTime = 0;

  function animate(time) {
    if (lastTime != null) {
      const delta = time - lastTime;
      if (keyPressed) {
        setBallMovement(delta);
      }
    }

    lastTime = time;
    window.requestAnimationFrame(animate);
  }
  window.requestAnimationFrame(animate);
};

export default Game;
