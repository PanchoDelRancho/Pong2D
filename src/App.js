import Game from "./components/Game";
import Board from "./components/Board";
import "./App.css";

function App() {
  return (
    <>
      <div style={{ position: "absolute" }}>
        <div className="hint">(a,s)</div>
        <div className="text" style={{ marginTop: "13vh" }}>
          <div className="subtitle">About Me</div>
          After years working in the
          <text className="powerBlock">manufacturing</text>industry I decided
          that in order to unlock my potential I would apply myself to{" "}
          <text className="powerBlock">learning</text>
          something I am truly interested in. And so began my web development
          journey. I love working with code and using software to{" "}
          <text className="powerBlock">solve problems</text>. I consider myself
          a fast and lifelong learner with a
          <text className="powerBlock">dedication</text> to improving myself and
          my skills. I hope that I can be the person that brings{" "}
          <text className="powerBlock">value</text> to your company through my
          work.
        </div>
        <div className="text">
          <div className="title">Education</div>
          <div className="subtitle">Full Stack Web Development, NuCamp</div>
          Learned both Front and Back end technologies in order to build and
          deploy websites, mobile apps, and web apps. Worked with other students
          to help understand difficult concepts and build web projects.
        </div>

        <div className="text">
          After years working in the manufacturing industry I decided that in
          order to unlock my potential I would apply myself to learning
          something I am truly interested in. And so began my web development
          journey. I love working with code and using software to solve
          problems. I consider myself a fast and lifelong learner with a
          dedication to improving myself and my skills. I hope that I can be the
          person that brings value to your company through my work.
        </div>
        <div className="text">
          After years working in the manufacturing industry I decided that in
          order to unlock my potential I would apply myself to learning
          something I am truly interested in. And so began my web development
          journey. I love working with code and using software to solve
          problems. I consider myself a fast and lifelong learner with a
          dedication to improving myself and my skills. I hope that I can be the
          person that brings value to your company through my work.
        </div>
        <div className="text">
          After years working in the manufacturing industry I decided that in
          order to unlock my potential I would apply myself to learning
          something I am truly interested in. And so began my web development
          journey. I love working with code and using software to solve
          problems. I consider myself a fast and lifelong learner with a
          dedication to improving myself and my skills. I hope that I can be the
          person that brings value to your company through my work.
        </div>
      </div>
      <div className="title">
        <h1 className="myName">Francisco Aparicio</h1>
        <Board />
        <Game />
      </div>
    </>
  );
}

export default App;
