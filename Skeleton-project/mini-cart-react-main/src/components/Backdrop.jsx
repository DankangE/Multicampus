const Backdrop = ({ onClickHander }) => {
  return (
    <div
      id="backdrop"
      onClick={onClickHander}
      className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    // hidden={isCartOpen}
    ></div>
  );
};

export default Backdrop;