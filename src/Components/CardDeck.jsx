import Card from './Card';

function CardDeck({ cards }) {
  return (
    <div className="deck-container">
      {cards.map((card, index) => (
        <Card key={index} value={card} />
      ))}
    </div>
  );
}

export default CardDeck;
