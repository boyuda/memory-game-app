import { useState } from 'react';
import './assets/style.css';
import CardDeck from './Components/CardDeck';
import Score from './Components/Score';

function App() {
  return (
    <div className="container">
      <Score />
      <CardDeck />
    </div>
  );
}

export default App;
