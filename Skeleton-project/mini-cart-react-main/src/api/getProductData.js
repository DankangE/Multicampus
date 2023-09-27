const request = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    const errData = await response.json();
    throw errData;  // throw를 사용하여 에러를 던져줍니다.
  } catch (error) {
    console.log(error);
  }
};

// 비동기식으로 데이터를 가져오는 함수(함수앞에 async를 붙여주고 내부에서 await를 사용해야함)
// fetch API를 사용하여 데이터를 가져옴

const getProductData = async () => {
  const result = await request('./productData.json');
  return result;
};

export default getProductData;