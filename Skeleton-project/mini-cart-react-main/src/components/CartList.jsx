const MIN_COUNT = 1;
const MAX_COUNT = 10;

const CartList = ({ cartItems , setCartItems }) => {

  const deleteCartItem = (idx) => {
      const newCartItems = [...cartItems];
      newCartItems.splice(idx, 1 /* 삭제할 개수 */); // idx 위치부터 1개 삭제
      setCartItems(newCartItems);
  }

  const decreaseCartItem = (idx) => {
      const newCartItems = [...cartItems];
      if (newCartItems[idx].count > MIN_COUNT) {
        newCartItems[idx].count -= 1;
        setCartItems(newCartItems);
      } else {
        alert('최소 수량은 1개입니다.')
      }
  }

  const increaseCartItem = (idx) => {
      const newCartItems = [...cartItems];
      if (newCartItems[idx].count < MAX_COUNT) {
        newCartItems[idx].count += 1;
        setCartItems(newCartItems);
      } else {
        alert('최대 수량은 10개입니다.')
      }
  }


  return cartItems.map(({ id, name, imgSrc, price, count }, idx) => (
    <li className="flex py-6" id={id}>
      <div className="h-24 w-24 overflow-hidden rounded-md border border-gray-200">
        <img
          src={imgSrc}
          className="h-full w-full object-cover object-center"
          alt={name}
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{name}</h3>
            <p className="ml-4">
              {(price * count).toLocaleString()}원
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between">
          <div className="flex text-gray-500">
            <button className="decrease-btn" onClick={() => decreaseCartItem(idx)}>
              -
            </button>
            <div className="mx-2 font-bold">
              {count}개
            </div>
            <button className="increase-btn" onClick={() => increaseCartItem(idx)}>
              +
            </button>
          </div>
          <button
            type="button"
            className="font-medium text-sky-400 hover:text-sky-500"
          >
            <p className="remove-btn" onClick={() => deleteCartItem(idx)}>
              삭제하기
            </p>
          </button>
        </div>
      </div>
    </li>
  ))
};

export default CartList;