const title = document.querySelector("#title");
const author = document.querySelector("#author");
const saveBtn = document.querySelector("#save");
const bookList = document.querySelector("#bookList");


saveBtn.addEventListener("click", function(event) {
    event.preventDefault();

    const liItem = document.createElement("li");
    liItem.innerHTML = `${title.value} - ${author.value}
                        <button class="delButton">삭제</button>`;

    bookList.appendChild(liItem);

    title.value = "";
    author.value = "";

    // 삭제 버튼 클릭시 해당 요소 삭제
    const delButtons = document.querySelectorAll(".delButton");
    for ( let delBtn of delButtons) {
        delBtn.addEventListener("click", removeItem);
    }
});

function removeItem(event) {
    const list = this.parentNode;
    list.parentNode.removeChild(list);

}