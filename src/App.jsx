import { useState, useEffect } from 'react';
import './assets/style.css';
import CardDeck from './Components/CardDeck';
import Score from './Components/Score';

function App() {
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [gameOn, setGameOn] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    if (!gameOn) {
      const fetchData = async () => {
        try {
          const randomNumber = Math.floor(Math.random() * 400) + 1;
          const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
          const response = await fetch(url);
          const json = await response.json();

          //Extract Image from the object
          const imageUrl = json.sprites.other.dream_world.front_default;

          setCards((prevCards) => [...prevCards, imageUrl]);
        } catch (error) {
          console.log('error', error);
        }
      };
      //Why it prints 16 instead of 8?
      for (let index = 0; index < 8; index++) {
        fetchData();
      }
      setGameOn(true);
    }
  }, []);

  // Randomize Cards
  const shuffleCards = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  };

  //On Card Clickd
  const selectCards = (value) => {
    console.log(`Clicked on ${value}`);
    if (!selectedCards.includes(value)) {
      setSelectedCards([...selectedCards, value]);
      setScore((previousScore) => previousScore + 1);
    } else {
      if (highestScore < score) {
        setHighestScore(score);
      }
      setScore(0);
      setGameOn(false);
      setSelectedCards([]);
    }

    //4. Shuffle cards
    shuffleCards();
  };

  return (
    <div className="container">
      <Score score={score} highestScore={highestScore} />
      <CardDeck cards={cards} onSelectCard={selectCards} />
    </div>
  );
}

export default App;
