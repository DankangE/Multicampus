// remove1.html css 제거

let items = document.querySelectorAll("li"); // li 태그 선택

for (let item of items) {
    item.addEventListener("click", function() {
        this.parentNode.removeChild(this); // 클릭한 li 태그 삭제
        // this.remove(this);
    })
};