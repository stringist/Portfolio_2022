// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export function startAnimations() {
    arrowAni();
    cardsAni();
    cubesAni();
    screenAni();
    getSVGS();
    // devilAni();
}
// animations

function getSVGS() {

    fetch("../assets/party_devil_sketch.svg")
        .then((e) => e.text())
        .then((d) => {
            document.querySelector(".party_devil_container").insertAdjacentHTML("afterbegin", d);
            devilAni();
        });
    // fetch("../assets/party_devil_left.svg")
    //     .then((e) => e.text())
    //     .then((d) => {
    //         document.querySelector(".party_devil_container").insertAdjacentHTML("afterbegin", d);
    //         devilAni();
    //     });
    // fetch("../assets/party_devil_right.svg")
    //     .then((e) => e.text())
    //     .then((d) => {
    //         document.querySelector("..party_devil_container").insertAdjacentHTML("beforeend", d);
    //         devilAni();
    //     });
}

function arrowAni() {

    const downArrow = document.querySelector(".arrow_container");
    const tlArrowBounce = gsap.timeline({ repeat: -1 });

    tlArrowBounce.
    to(downArrow, { y: '-9', ease: "sine", duration: .8 }).
    to(downArrow, { y: '+=9', ease: "sine", duration: .8 });
}

function cardsAni() {
    // ui cards
    const cards = document.querySelectorAll(".UI_card");

    gsap.fromTo(cards, { duration: 2, opacity: 0, }, {
        opacity: 1,
        scrollTrigger: { trigger: cards, scrub: 1.5, markers: false, start: "top 75%", end: "bottom 30%", toggleActions: "play reverse reverse reverse" }
    });

    const bouncetl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
    bouncetl.fromTo(cards, { duration: .5, y: 5, stagger: { each: .1 } }, { duration: .5, y: -5, stagger: { each: .15, yoyo: true, repeat: 3, ease: "sine" } });
}

function cubesAni() {
    // rolling cubes scroll trigger
    const cubes = document.querySelectorAll(".cube");
    // const cubetl = gsap.timeline({ repeat: -1, delay: .5, repeatDelay: .5 });

    gsap.from(cubes, { x: "-60vw", rotation: -400, duration: 2, ease: "back", stagger: -.4, scrollTrigger: { trigger: cubes, markers: false, start: "top 75%", end: "bottom 30%", toggleActions: "play reverse play reverse" } });
    gsap.to(cubes, { y: -6, repeat: -1, duration: 1, stagger: { each: .2, repeat: Infinity, yoyo: true } });
}

function screenAni() {
    // rotating screen
    const screen = document.querySelector(".device_container");
    const screentl = gsap.timeline({ repeat: -1, delay: 1.5, repeatDelay: 3 });

    screentl.to(screen, { duration: 1, scaleX: .5, scaleY: .5, rotation: 90, ease: "sine" });
    screentl.to(screen, { duration: 1, scaleX: .5, scaleY: .6, delay: 1, ease: "bounce" });
    screentl.to(screen, { duration: 1, rotation: 90, delay: 0, ease: "sine" });
    screentl.to(screen, { duration: 1, rotation: 180, delay: 0, ease: "sine" });
    screentl.to(screen, { duration: 1.5, scaleX: 1, scaleY: 1, delay: 1, ease: "power2" });
}

function devilAni() {
    console.log("devilAni")
        // const svgContent = document.querySelector("svg *");
    const devilContainer = document.querySelector(".party_devil_container");
    // "drawing effect"   
    // gsap.from("svg *", {
    //     duration: .08,
    //     opacity: -1.5,
    //     stagger: .03,
    //     scrollTrigger: { trigger: devilContainer, markers: false, start: "top 40%", end: "bottom 50%", toggleActions: "play reverse play reverse" },
    //     y: () => Math.random() * 200 - 100,
    //     x: () => Math.random() * 200 - 100,
    // });
    // backup drawing effect
    //  gsap.from("svg *", {
    //         duration: .1,
    //         opacity: -1,
    //         stagger: .03,
    //         scrollTrigger: { trigger: devilContainer, markers: false, start: "top 70%", end: "bottom 50%", toggleActions: "play reverse restart reverse" },
    //         y: () => Math.random() * 200 - 100,
    //         x: () => Math.random() * 200 - 100,
    //     });
    // "assembling" effect
    gsap.from("svg *", {
        duration: 2,
        opacity: -1.5,
        stagger: .001,
        scrollTrigger: { trigger: devilContainer, markers: true, start: "top 80%", end: "bottom 50%", toggleActions: "play reverse restart reverse" },
        y: () => Math.random() * 200 - 100,
        x: () => Math.random() * 200 - 100,
    });
}