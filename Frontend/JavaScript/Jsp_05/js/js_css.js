
const title = document.querySelector("#title");

title.onclick = function() {
    if (!title.classList.contains("clicked")) {
        title.classList.add("active");
    } else {
        title.classList.remove("active");
    }
}