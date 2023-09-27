import './App.css';
import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import Backdrop from './components/Backdrop';
import getProductData from './api/getProductData';


function App() {

  const initialCartItem =
    localStorage.getItem("cartState")
      ? JSON.parse(localStorage.getItem("cartState"))
      : [];

  const [productItems, setProductItems] = useState([]);  // 상품 목록
  const [cartItems, setCartItems] = useState(initialCartItem);        // 장바구니 목록
  const [isCartOpen, setIsCartOpen] = useState(false);    // 장바구니 오픈 여부

  // 장바구니 목록을 초기화하는 함수


  // 장바구니 오픈 여부를 제어하는 함수
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);  // 현재 상태값을 반대값으로 변경
  };

  const totlalCount = cartItems.reduce(
    (acc, cur) => cur.price * cur.count + acc, 0)
    .toLocaleString();

  // 브라우더의 로컬 스토리지에 장바구니 목록을 저장하는 함수
  const saveToLocalStorage = () => {
    localStorage.setItem('cartState', JSON.stringify(cartItems));  // JSON.stringify(): JSON 문자열 반환 
    alert('브라우저에 결재 정보가 저장되었습니다.');
  };

  // 상품 목록을 불러오는 함수
  useEffect(() => {
    // getProductData 함수를 사용하여 상품 목록을 불러와 전달하는 함수
    const fetchProductData = async () => {
      const resutl = await getProductData();
      console.log(resutl);
      setProductItems(resutl);
    };
    // 상품 목록을 불러오는 함수를 실행
    fetchProductData();
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* 메인 화면 */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <header className="flex justify-between mb-4">
          <h2 className="text-3xl font-bold">오늘의 상품</h2>
          {/* 장바구니 버튼 */}
          <button
            id="open-cart-btn"
            className="fill-gray-400 hover:fill-gray-500"
            onClick={toggleCart}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
            >
              <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-15l-3.431 12h-2.102l2.542-9h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.196z" />
            </svg>
          </button>
        </header>
        <section id="product-list">
          <div
            id="product-card-grid"
            className="grid gap-4 auto-cols-fr grid-cols-2 md:grid-cols-4"
          >
            {/* 아래 하드코딩 되어있는 상품 목록들을 src/api/productData.json을 바탕으로 불러오도록 변경해주세요.  */}
            {productItems.length === 0 ? (
              <h1>등록된 상품이 없습니다.</h1>
            ) : (
              <ProductList
                productItems={productItems}
                toggleCart={toggleCart}
                cartItems={cartItems}
                setCartItems={setCartItems} />
            )}
          </div>
        </section>
      </div>

      {/* backdrop의 가시성은 hidden 속성으로 제어합니다.  */}
      {/* {isCartOpen && (
        <div
          id="backdrop"
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={toggleCart}
        ></div>

      )} */}
      {isCartOpen && <Backdrop onClickHander={toggleCart} />}

      {/* 장바구니 추가된 목록 */}
      <aside className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">

        {/* 장바구니의 가시성은 아래 div의 (id="shopping-cart") class명으로 제어합니다. 
          translate-x-full: 장바구니 닫힘 translate-x-0: 장바구니 열림 */}
        <section
          className={`pointer-events-auto w-screen max-w-md transition ease-in-out duration-500 translate-x-${isCartOpen ? 0 : "full"
            }`}
          id="shopping-cart"
        >
          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-bold">장바구니</h2>
                <div className="ml-3 flex h-7 items-center">
                  <button
                    type="button"
                    className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                    onClick={toggleCart}
                  >
                    <svg
                      id="close-cart-btn"
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              {/* 아래 하드코딩 되어있는 장바구니 목록들을 유저 상호작용에 맞게 렌더링 되도록 변경해주세요.  */}
              <div id="cart-list">
                <ul className="divide-y divide-gray-200">
                  <CartList
                    cartItems={cartItems}
                    setCartItems={setCartItems} />
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 p-6">
              <div className="flex justify-between font-medium">
                <p>결제금액</p>
                <p className="font-bold" id="total-count">
                  {/* .reduce() 배열의 각 요소에 대하여 callback을 실행하여 1개의 출력 결과를 생성 */}
                  {totlalCount}원
                </p>
              </div>
              <a
                id="payment-btn"
                href="./"
                className="flex items-center justify-center rounded-md border border-transparent bg-sky-400 px-6 py-3 mt-6 font-medium text-white shadow-sm hover:bg-sky-500"
                onClick={saveToLocalStorage}
              >
                결제하기
              </a>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  또는
                  <button
                    type="button"
                    className="font-medium text-sky-400 hover:text-sky-500"
                    onClick={toggleCart}
                  >
                    쇼핑 계속하기
                  </button>
                </p>
              </div>
            </div>
          </div>
        </section>
      </aside>

      {/* footer */}
      <footer className="text-center text-gray-500 text-xs pb-6">
        ©2023 multicampus Corp. All rights reserved.
      </footer>
    </div >
  );
}

export default App;