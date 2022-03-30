// export function startAnimations() {
//     arrowAni();
//     cardsAni();
//     cubesAni();
//     screenAni();
// }
// // animations

// function arrowAni() {

//     const downArrow = document.querySelector(".arrow_container");
//     const tlArrowBounce = gsap.timeline({ repeat: -1 });

//     tlArrowBounce.
//     to(downArrow, { y: '-9', ease: "sine", duration: .8 }).
//     to(downArrow, { y: '+=9', ease: "sine", duration: .8 });
// }


// // ui cards
// const cards = document.querySelectorAll(".UI_card");

// gsap.fromTo(cards, { duration: 2, opacity: 0, }, {
//     opacity: 1,
//     scrollTrigger: { trigger: cards, scrub: 1.5, markers: true, start: "top 75%", end: "bottom 30%", toggleActions: "play reverse reverse reverse" }
// });

// const bouncetl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
// bouncetl.fromTo(cards, { duration: .5, y: 5, stagger: { each: .1 } }, { duration: .5, y: -5, stagger: { each: .15, yoyo: true, repeat: 3, ease: "sine" } });


// // rolling cubes scroll trigger
// const cubes = document.querySelectorAll(".cube");
// // const cubetl = gsap.timeline({ repeat: -1, delay: .5, repeatDelay: .5 });

// gsap.from(cubes, { x: "-60vw", rotation: -400, duration: 2, ease: "back", stagger: -.4, scrollTrigger: { trigger: cubes, markers: false, start: "top 75%", end: "bottom 30%", toggleActions: "play reverse play reverse" } });
// gsap.to(cubes, { y: -6, repeat: -1, duration: 1, stagger: { each: .2, repeat: Infinity, yoyo: true } });

// // rotating screen
// const screen = document.querySelector(".device_container");
// const screentl = gsap.timeline({ repeat: -1, delay: 1.5, repeatDelay: 3 });

// screentl.to(screen, { duration: 1, scaleX: .5, scaleY: .5, rotation: 90, ease: "sine" });
// screentl.to(screen, { duration: 1, scaleX: .5, scaleY: .6, delay: 1, ease: "bounce" });
// screentl.to(screen, { duration: 1, rotation: 90, delay: 0, ease: "sine" });
// screentl.to(screen, { duration: 1, rotation: 180, delay: 0, ease: "sine" });
// screentl.to(screen, { duration: 1.5, scaleX: 1, scaleY: 1, delay: 1, ease: "power2" });