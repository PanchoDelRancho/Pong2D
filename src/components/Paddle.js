function Paddle({ side }) {
  let className = `paddle ${side}`;

  return <div className={className} id={side}></div>;
}

export default Paddle;
