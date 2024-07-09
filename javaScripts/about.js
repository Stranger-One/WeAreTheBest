
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