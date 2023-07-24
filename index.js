const Btn = document.querySelector('#burger');
let nav = document.getElementById('nav');

Btn.addEventListener("click", ()=>{
    nav.classList.toggle('active');
    Btn.classList.toggle('active');
})