import Card from './Card';

function CardDeck({ cards, onSelectCard }) {
  return (
    <div className="deck-container">
      {cards.map((card, index) => (
        <Card key={index} value={card} handleClick={onSelectCard} />
      ))}
    </div>
  );
}

export default CardDeck;
