window.onload = function() {
    const bgCount = 5;

    let randomNum = Math.floor(Math.random() * bgCount) + 1;
    document.body.style.backgroundImage = `url(images/bg-${randomNum}.jpg)`;
}