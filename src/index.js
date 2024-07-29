import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");



loadHome();

homeBtn.addEventListener('click', () => {
    //console.log("clicking home");
    loadHome();
});
menuBtn.addEventListener('click', () => {
    //console.log("clicking menu");
    loadMenu();
});
contactBtn.addEventListener('click', () => {
    //console.log("clicking menu");
    loadContact();
});
