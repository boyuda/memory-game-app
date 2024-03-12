import Card from './Card';

function CardDeck({ cards, selectCard }) {
  return (
    <div className="deck-container">
      {cards.map((card, index) => (
        <Card key={index} value={card} handleClick={selectCard} />
      ))}
    </div>
  );
}

export default CardDeck;
