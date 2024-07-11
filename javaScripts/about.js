import { operators } from "./operators.js"



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
// ============= all operators function ===============//

operators.forEach((optr) => {
    let operator = `
            <div class="operators slideOnScroll" id="${optr.id}">
                <div class="profile">
                    <img src="${optr.profile}" alt="">
                </div>
                <h3 class="name">${optr.name}</h3>
                <h3 class="profession">${optr.profession}</h3>
                <h3 class="expe">${optr.experience} of experience</h3>
                <h3 class="location"><strong>From: </strong>${optr.location}</h3>
                <h3 class="lang"><strong>languages spoken: </strong>${optr.languages_spoken} </h3>
                <h3 class="rating">
                    <span>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                    </span>
                    ${optr.rating}
                </h3>
            </div>
    `
    document.querySelector(".operator-container").innerHTML += operator

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