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
  // Array with selected card items
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [gameStatus, getGameStatus] = useState(false);
  const [cards, setCards] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ]);
  const [selectedCards, setSelectedCards] = useState([]);

  //Effects
  //Need following effects:
  //API Fetch, when game is started

  // Shuffle Cards
  const shuffleCards = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  };

  const selectCards = (value) => {
    //On Click
    console.log(`Clicked on ${value}`);
    //1. Check if item already exists in selected array
    if (!selectedCards.includes(value)) {
      //2. If not add selected card to an array
      setSelectedCards([...selectedCards, value]);
      //Current score higher than highest?

      setScore((previousScore) => previousScore + 1);
    } else {
      if (highestScore < score) {
        setHighestScore(score);
        setScore(0);
      }
      setSelectedCards([]);
      shuffleCards();
    }

    //4. Shuffle cards
    shuffleCards();
  };

  return (
    <div className="container">
      <Score score={score} highestScore={highestScore} />
      <CardDeck cards={cards} selectCard={selectCards} />
    </div>
  );
}

export default App;
