function showPrice() {
    var originalPrice = document.getElementById('oPrice').value;
    var dcRate = document.getElementById('dcRate').value;

    var savePrice = originalPrice * (dcRate / 100);    // 할인 가격
    var resultPrice = originalPrice - savePrice;       // 할인 후 가격

    document.querySelector("#showResult").innerHTML = 
    "<p>상품 원가는<span>" + originalPrice + "원</span>이고, 할인율은 " + dcRate + "% 입니다. <br>"
    + "할인 금액은 " + savePrice + "원이고, 할인 후 가격은 <span>" + resultPrice + "원</span>입니다.<br></p>";
}