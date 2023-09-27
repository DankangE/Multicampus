const title = document.querySelector("h1");
const userName = document.querySelector("#desc p");
const pfImage = document.querySelector("img");

title.onclick = function() {
    title.innerText = "민들레 프로필";
}  
userName.onclick = () => userName.innerText = "이름 : 민들레";
pfImage.onclick = () => pfImage.src = "images/pf2.png";