import './party_devil/party_devil.scss';
import './sass/all_styles.scss';
// import './sass/style.scss';
import { startAnimations } from './modules/animations.js'


window.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("ready");
    startAnimations();
}