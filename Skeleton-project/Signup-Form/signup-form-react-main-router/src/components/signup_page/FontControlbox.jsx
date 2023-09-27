
import React, { useEffect, useState } from 'react';

const $html = document.documentElement;

const MAX_FONT_SIZE = 20;
const MIN_FONT_SIZE = 12;

const getHtmlFontSize = () => {
  return parseFloat(window.getComputedStyle($html).fontSize);
};

const FongControlbox = () => {
  // console.log($html);
  // console.log(getHtmlFontSize());

  const [fontSize, setFontSize] = useState(getHtmlFontSize());

  const handleFontSizeControl = (flag) => {
    if (flag === 'increase') {
      setFontSize((prev) => prev + 1);
    } else {
      setFontSize((prev) => prev - 1);
    }
  };

  useEffect(() => {
    console.log(fontSize);
    $html.style.fontSize = `${fontSize}px`;
  }, [fontSize]);


  // const onClickFontControl = (flag) => {
  //   const fontSize = getHtmlFontSize();
  //   let newFontSize = flag === 'increase' ? fontSize + 1 : fontSize - 1;
  //   $html.style.fontSize = newFontSize;
  // };

  return (
    <aside
      id="font-control-box"
      className="flex fixed bottom-0 right-0"
    >
      <button
        id="increase-font-btn"
        onClick={() => handleFontSizeControl('increase')}
        disabled={fontSize >= MAX_FONT_SIZE}  //디셉블드는 버튼을 비활성화 시키는 속성
        className="bg-white text-gray-500 border border-gray-300 hover:bg-red-50 focus:outline-none focus:shadow-outline disabled:bg-gray-500 disabled:text-white rounded-full"
      >
        +
      </button>
      <button
        id="decrease-font-btn"
        disabled={fontSize <= MIN_FONT_SIZE}
        onClick={() => handleFontSizeControl('decrease')}
        className="bg-white text-gray-500 border border-gray-300 hover:bg-blue-50 focus:outline-none focus:shadow-outline disabled:bg-gray-500 disabled:text-white rounded-full"
      >
        -
      </button>
    </aside>
  );
};

export default FongControlbox;