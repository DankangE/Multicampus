// window.open("notice.html", "", "width=600 , height=500");

function openPopup() {
    let left = (screen.availWidth - popWidth) /2
    let top = (screen.availHeight - popHeight) /2
    window.open("notice.html", "이벤트 팝업", `width=$(popWidth) height=$(popHeight) left=$(left) top=$(top)`);
}

const btn = document.querySelector("button");
const popWidth = 600;
const popHeight = 500;

btn.addEventListener("click", openPopup);