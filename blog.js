
// ============= Animatiions function ===============//
let tl = gsap.timeline()
tl.from("header", {
    y: -200,
    duration: 1,
    opacity: 0,
})
tl.from(".fromzero", {
    opacity: 0,
    delay: 0.5
})



let fromLeft = document.querySelectorAll(".fromLeft")
fromLeft.forEach((slide) => {
    gsap.from(slide, {
        x: -100,
        y: 30,
        duration: 0.5,
        opacity: 0,
        scrollTrigger: {
            trigger: slide,
            start: "top 80%",
            end: "top 70%",
            // markers: true,
            scrub: 1,

        }
    })
})
let fromBottom = document.querySelectorAll(".fromBottom")
fromBottom.forEach((slide) => {
    gsap.from(slide, {
        x: 50,
        y: 100,
        duration: 0.5,
        opacity: 0,
        scrollTrigger: {
            trigger: slide,
            start: "top 90%",
            end: "top 80%",
            // markers: true,
            scrub: 1,

        }
    })
})