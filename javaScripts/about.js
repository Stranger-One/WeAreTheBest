
// =================== menu function ================= //

let open = document.querySelector(".menu-btn")
let close = document.querySelector(".close")
let menu = document.querySelector("header nav ul")
let links = document.querySelectorAll("header nav ul li")
open.addEventListener("click", (e) => {
    menu.style.right = "0%"
})
close.addEventListener("click", (e) => {
    menu.style.right = "-100%"
})
links.forEach((elem) => {
    elem.addEventListener("click", () => {
        menu.style.right = "-100%"
    })
})

// =================== Header function ================= //
let prevScrollVal = 0;
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    let scrollVal = window.scrollY

    if (scrollVal > prevScrollVal) {
        header.style.top = "-80px"
        menu.style.right = "-100%"
    }
    else if (scrollVal < prevScrollVal) {
        header.style.top = "0px"
        menu.style.right = "-100%"
    }
    prevScrollVal = scrollVal

})
// ============= Animatiions function ===============//
let tl = gsap.timeline()
tl.from("header", {
    y: -200,
    duration: 1,
    opacity: 0,
})
tl.from(".formBottom", {
    // y: 100,
    duration: 1,
    opacity: 0,
}, "same")
tl.from(".image img", {
    y: -100,
    x: 100,
    duration: 1,
    opacity: 0,
}, "same")
tl.from(".fromZero", {
    opacity: 0,
    delay: 0.5
}, "same")



let slideOnScroll = document.querySelectorAll(".slideOnScroll")
slideOnScroll.forEach((slide) => {
    gsap.from(slide, {
        y: 100,
        duration: 0.5,
        opacity: 0,
        scrollTrigger: {
            trigger: slide,
            start: "top 90%",
            end: "top 80%",
            // markers: true,
            // scrub: 1,

        }
    })
})