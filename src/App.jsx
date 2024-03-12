import { useState } from 'react';
import './assets/style.css';
import CardDeck from './Components/CardDeck';
import Score from './Components/Score';

function App() {
  // States
  // Need following states:
  // Score, High Score
  // Array with items
  // Game started state
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStatus, getGameStatus] = useState(false);
  const [cards, setCards] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ]);

  //Effects
  //Need following effects:
  //API Fetch, when game is started

  return (
    <div className="container">
      <Score />
      <CardDeck cards={cards} />
    </div>
  );
}

export default App;
