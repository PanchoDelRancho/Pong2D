const INITIAL_VELOCITY = 0.025;

let velocity = INITIAL_VELOCITY;
let position = 50;
let ballPos = { x: 50, y: 50 };
let ballAcc = { x: 0, y: 0 };
let keyPressed = false;
let paddleLeftPosition;
let paddleRightPosition;

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
      position--;
      paddleLeft.style.setProperty("--position", position);
      paddleRight.style.setProperty("--position", position);
    }
    if (e.key === "s") {
      position++;
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

  const setBallMovement = (delta) => {
    ballPos.x += ballAcc.x * velocity * delta;
    ballPos.y += ballAcc.y * velocity * delta;

    moveBall();
    const currPixelPos = getCurrentBallPosition();

    if (currPixelPos.bottom >= window.innerHeight || currPixelPos.top <= 0) {
      ballAcc.y *= -1;
    }

    if (currPixelPos.right >= window.innerWidth || currPixelPos.left <= 0) {
      reset();
      keyPressed = false;
    }

    // if(currPixelPos.left =< paddleLeftPosition.right &&  )
  };

  const moveBall = () => {
    let ball = document.getElementById("ball");

    ball.style.setProperty("--x", ballPos.x);
    ball.style.setProperty("--y", ballPos.y);
  };

  //    animate code using requestAnimationFrame
  let lastTime = 0;
  
  function animate(time) {

    if (lastTime != null) {
      const delta = time - lastTime;
      setBallMovement(delta);
      

    }
    lastTime = time;
    window.requestAnimationFrame(animate);
  }
  window.requestAnimationFrame(animate);
};

export default Game;