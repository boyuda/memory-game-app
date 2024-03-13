function Card({ value, handleClick }) {
  const handleClickCard = () => {
    handleClick(value);
  };

  return (
    <div className="card-item" onClick={handleClickCard}>
      <img src={value} width={80} height={80} />
    </div>
  );
}

export default Card;
