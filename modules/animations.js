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
    hogwartsAni();
}
// animations

function getSVGS() {

    fetch("../my_assets/party_devil_sketch.svg")
        .then((e) => e.text())
        .then((d) => {
            document.querySelector(".party_devil_container").insertAdjacentHTML("afterbegin", d);
            devilAni();
        });
    fetch("../my_assets/SVG/cube_city.svg")
        .then((e) => e.text())
        .then((d) => {
            document.querySelector(".framework_graphic").insertAdjacentHTML("afterbegin", d);
            frameworksAni();
        });
    fetch("../my_assets/glass_group.svg")
        .then((e) => e.text())
        .then((d) => {
            document.querySelector(".glass_group").insertAdjacentHTML("afterbegin", d);
            glassAni();
        });
    // fetch("../my_assets/party_devil_left.svg")
    //     .then((e) => e.text())
    //     .then((d) => {
    //         document.querySelector(".party_devil_container").insertAdjacentHTML("afterbegin", d);
    //         devilAni();
    //     });
    // fetch("../my_assets/party_devil_right.svg")
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
    const paths = document.querySelectorAll(".party_devil_container svg path");
    const circles = document.querySelectorAll(".party_devil_container svg circle");
    const ellipses = document.querySelectorAll(".party_devil_container svg ellipse");
    const polys = document.querySelectorAll(".party_devil_container svg polygon");
    const svgContent = [paths, ellipses, polys, circles];
    const allContent = document.querySelectorAll(".party_devil_container svg *");
    const devilContainer = document.querySelector(".party_devil_container");

    // assembling effect
    gsap.from(svgContent, {
        delay: -.5,
        duration: 2.5,
        opacity: -1,
        stagger: .001,
        yoyo: true,
        repeat: -1,
        repeatDelay: 1.2,
        scrollTrigger: { trigger: devilContainer, markers: false, start: "top 80%", end: "bottom 50%", toggleActions: "play reverse restart reverse" },
        y: () => Math.random() * 100 - 50,
        x: () => Math.random() * 100 - 50,
    });

    // "drawing effect"
    // gsap.from(allContent, {
    //     duration: .05,
    //     opacity: 0,
    //     stagger: .06,
    //     yoyo: true,
    //     repeat: -1,
    //     repeatDelay: 1.8,
    //     scrollTrigger: { trigger: devilContainer, markers: false, start: "top 40%", end: "bottom 50%", toggleActions: "play reverse restart reverse" },
    //     y: () => Math.random() * 200 - 100,
    //     x: () => Math.random() * 200 - 100,
    // });
}

// "assembling" effect



function hogwartsAni() {
    const icons = document.querySelectorAll(".hogwarts_container *");
    // float effect
    const tlIconBounce = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    tlIconBounce.
    to(icons, { y: '-9', ease: "none", duration: 2, stagger: .5, delay: -2 }).
    to(icons, { y: '+=9', ease: "none", duration: 2, stagger: .5, delay: -2 });
}

function glassAni() {
    const paths = document.querySelectorAll(".glass_group svg path");
    const circles = document.querySelectorAll(".glass_group svg circle");
    const ellipses = document.querySelectorAll(".glass_group svg ellipse");
    const polys = document.querySelectorAll(".glass_group svg polygon");
    const svgContent = [paths, circles, polys, ellipses];
    // const svgContent = document.querySelectorAll(".glass_group svg *");
    const fadetl = gsap.timeline({ repeat: -1, repeatDelay: 0, yoyo: true });
    fadetl.fromTo(svgContent, { duration: .1, opacity: .3, stagger: { each: .1 } }, { duration: .4, opacity: .9, stagger: { each: .1, ease: "sine" } });
    fadetl.to(svgContent, { delay: 2, opacity: .2, duration: .005 })
}

// function glassAni() {
//     const svg = document.querySelector(".glass_group");
//     const svgContent = document.querySelectorAll(".glass_group svg *")
//     gsap.to(svg, { opacity: .5, duration: 5, yoyo: true, repeat: -1, ease: "sine", repeatDelay: 1, });

//     const tlIconBounce = gsap.timeline({ repeat: -1, repeatDelay: 0 });

//     tlIconBounce.
//     to(svgContent, { y: '-.5', ease: "none", duration: .5, stagger: .1, delay: -2 });
//     to(svgContent, { y: '.5', ease: "none", duration: .5, stagger: .1, delay: -2 });
// }

function frameworksAni() {

    // const container = document.querySelector("#framework");
    const allContent = document.querySelectorAll(".framework_graphic svg *");

    const tl = gsap.timeline({ repeat: -1, repeatDelay: -.2 });

    tl.from(allContent, {
        duration: .1,
        opacity: .6,
        stagger: .02,
        yoyo: true,
        repeat: 1,
        repeatDelay: 1.8,
        y: () => Math.random() * 100 - 50,
        x: () => Math.random() * 100 - 50,
    });

    tl.to(allContent, { opacity: 0, duration: 2, delay: 0 });
}