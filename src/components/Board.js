import Paddle from "./Paddle";
import Ball from "./Ball";

const Board = () => {
  
  
  
  
  return (
    <div className="Game">
      <Paddle side="left" />
      <Paddle side="right" />
      <Ball />
    </div>
  );
};

export default Board;
