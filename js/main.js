// import Typed from 'typed.js';

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}













// Typed js

const typed = new Typed('.multiple-text', {
    strings: ['Java Developer', 'Mechanical Engineer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});