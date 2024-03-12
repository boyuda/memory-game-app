function Score({ score, highestScore }) {
  return (
    <div className="score-container">
      <h2>Current Score: {score}</h2>
      <h3>High Score: {highestScore}</h3>
    </div>
  );
}

export default Score;
