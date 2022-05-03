import './party_devil/party_devil.scss';
import './sass/all_styles.scss';
// import './sass/style.scss';
import { startAnimations } from './modules/animations.js'
new ClipboardJS('.copy_email');
const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".burger");

menuToggle.onclick = () => {
    navigation.classList.toggle("active");
}

window.addEventListener("DOMContentLoaded", start);

function start() {
    // const mediaQuery = window.matchMedia('(min-width: 750px)');
    console.log("ready");
    // if (mediaQuery.matches) {
    //     startAnimations();
    // }
    startAnimations();
    topFunction();
    burgerMenu();
}

function topFunction() {
    const bttButton = document.querySelector(".back_to_top");
    bttButton.addEventListener("click", scrollToTop);

    function scrollToTop() {
        console.log("scroll");
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}