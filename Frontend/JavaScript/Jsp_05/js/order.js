// 1. 전송번튼 클릭시 각 항목에 대한 값 입력 여부 확인
// 2. 입력이 안된 항목이 있으면 안내창 띄우기
// 3. 입력이 안된 항목으로 포커스 이동

let order = document.querySelector(".order");

// function orderCheck() {
//     if (document.order.product.value == "") {
//         alert("상품명을 입력하세요.");
//         document.order.product.focus();
//         exit;  // 함수 종료
//     }
// }

// order.addEventListener("click", orderCheck);
order.onclick = function () {
    // name을 이용한 값 입력 여부 확인
    console.log(document.order.product.value);
    if (document.order.product.value == "") {
        alert("상품명을 입력하세요.");
        document.order.product.focus();
        return;
    }

    console.log(document.order['prod-num'].value);
    if (document.order['prod-num'].value == "") {
        alert("수량을 입력하세요.");
        document.order['prod-num'].focus();
        return;
    }

    // id를 이용한 값 입력 여부 확인
    console.log(document.querySelector("#order-name").value);
    if (document.querySelector("#order-name").value == "") {
        alert("주문자명을 입력하세요.");
        document.querySelector("#order-name").focus();
        return;
    }

    console.log(document.querySelector("#order-tel").value);
    if (document.querySelector("#order-tel").value == "") {
        alert("연락처를 입력하세요.");
        document.querySelector("#order-tel").focus();
        return;
    }

    console.log(document.querySelector("#order-addr").value);
    if (document.querySelector("#order-addr").value == "") {
        alert("받을 주소지를 입력하세요.");
        document.querySelector("#order-addr").focus();
        return;
    }
}