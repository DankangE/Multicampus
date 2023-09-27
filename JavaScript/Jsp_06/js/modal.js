const open = document.getElementById('open');
const modalBox = document.querySelector('#modal-box');
const close = document.getElementById('close');

open.onclick = function() {
    modalBox.classList.add('active');
}

close.onclick = function() {
    modalBox.classList.remove('active');
}