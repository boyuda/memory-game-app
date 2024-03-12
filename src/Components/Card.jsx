function Card({ value, handleClick }) {
  const handleClickCard = () => {
    handleClick(value);
  };

  return (
    <div className="card-item" onClick={handleClickCard}>
      <p>{value}</p>
    </div>
  );
}

export default Card;
