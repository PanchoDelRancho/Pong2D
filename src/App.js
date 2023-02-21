import Game from "./components/Game";
import Board from "./components/Board";
import "./App.css";

function App() {
  return (
    <>
      <div style={{ position: "absolute" }}>
        <div className="hint">
          <a
            href="https://www.linkedin.com/in/francisco-a-78ba8811a/"
            className="link"
          >
            LinkedIn
          </a>
          (a,s)
          <a href="https://github.com/PanchoDelRancho" className="link">
            GitHub
          </a>
        </div>
        <div className="zone" style={{ marginTop: "13vh" }}>
          About Me
        </div>
        <div className="text">
          After years working in the{" "}
          <text className="powerBlock"> manufacturing </text> industry I decided
          that in order to unlock my potential I would apply myself to{" "}
          <text className="powerBlock"> learning </text>
          something I am truly interested in. And so began my web development
          journey. I love working with code and using software to{" "}
          <text className="powerBlock"> solve problems </text> . I consider
          myself a fast and lifelong learner with a{" "}
          <text className="powerBlock"> dedication </text> to improving myself
          and my skills. I hope that I can be the person that brings{" "}
          <text className="powerBlock"> value </text> to your company through my
          work.
        </div>
        <h1 className="zone">Projects</h1>
        <div className="text">
          <div className="subtitle">Portfolio Pong</div>A self lead project I
          created using Javascript Html and css with a sprinkle of{" "}
          <text className="powerBlock"> React JS </text>. It is the game{" "}
          <text className="powerBlock"> Pong </text> with an overlay of my
          resume to help showcase my abilities in using{" "}
          <text className="powerBlock"> JS </text>. I havent uploaded it to the
          web since I will be adding more features to it. But if you would like
          to see what I have so far you can look in my github or here is the
          link to the git repo
          <a className="link" href="https://github.com/PanchoDelRancho/Pong2D">
            {" "}
            GitHub{" "}
          </a>
        </div>
        <div className="text">
          <div className="subtitle">The Hat Man App</div>A{" "}
          <text className="powerBlock"> React Native </text> App which I helped
          build with a friend I met during my nucamp bootcamp. It is built with
          the intention to be a sort of{" "}
          <text className="powerBlock"> dynamic newsletter </text> to announce
          and demo a Horror game which is still in production. Here is a link to
          the repo
          <a
            className="link"
            href="https://github.com/HemoglobinGoblin/hatManApp"
          >
            {" "}
            GitHub{" "}
          </a>
        </div>
        <div className="zone">Education</div>
        <div className="text">
          <div className="subtitle">NuCamp: FullStack Web Dev Bootcamp</div>
          Learned both <text className="powerBlock"> Front and Back </text> end
          technologies in order to build and deploy{" "}
          <text className="powerBlock"> websites </text>, mobile{" "}
          <text className="powerBlock"> apps </text>, and web apps. Worked with
          other students to help understand difficult concepts and build web
          projects.
        </div>
        <div className="zone">Previous Jobs</div>
        <div className="text">
          <div className="subtitle">Machine Operator, Ameritex</div>
          Worked in a manner consistent with a <text className="powerBlock"> fast paced </text>
          production schedule. Worked with precision and attention to <text className="powerBlock"> detail </text>,
          results in production <text className="powerBlock"> increases </text>. Brought forth knowledge of machine
          set up and <text className="powerBlock"> quality testing </text>. Utilized excellent multitasking skills.
        </div>
      </div>
      <div className="title">
        <h1 className="myName" id="myName">
          Francisco Aparicio
        </h1>
        <Board />
        <Game id="Game" />
      </div>
    </>
  );
}

export default App;
