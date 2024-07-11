import { placeData } from "./allCards.js";


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

for(let i=0; i<20; i++){
    let card = `
                <div class="dests-card gototour slideOnScroll" id="${placeData[i].id}">
                    <div class="dests-img">
                        <img src="${placeData[i].image}" alt="dest1">
                    </div>
                    <div class="dests-info">
                        <p class="address">${placeData[i].location}</p>
                        <h3 class="name">${placeData[i].place}</h3>
                        <div class="rating">
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <h3>${placeData[i].rating}</h3>
                        </div>
                        <p class="about">${placeData[i].description}</p>
                    </div>
                </div>
    `
    document.querySelector(".dests-container").innerHTML += card
}
let showClick = 0;
document.querySelector(".showmore").addEventListener("click", () => {
    let start = 20 + (showClick * 20) + 1
    let end = 40 + (showClick * 20) + 1
    showClick ++
    for(let i=start; i<end; i++){
        if(i > placeData.length) return
        let card = `
                    <div class="dests-card gototour slideOnScroll" id="${placeData[i].id}">
                        <div class="dests-img">
                            <img src="${placeData[i].image}" alt="dest1">
                        </div>
                        <div class="dests-info">
                            <p class="address">${placeData[i].location}</p>
                            <h3 class="name">${placeData[i].place}</h3>
                            <div class="rating">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <h3>${placeData[i].rating}</h3>
                            </div>
                            <p class="about">${placeData[i].description}</p>
                        </div>
                    </div>
        `
        document.querySelector(".dests-container").innerHTML += card
    }
})


// ============= redirect to tour page function ===============//
document.querySelectorAll(".gototour").forEach((card) => {
    card.addEventListener("click", (e) => {
        // console.log(e.target.closest(".gototour").getAttribute("id"))
        let cardId = e.target.closest(".gototour").getAttribute("id")
        window.location.href = `theTour.html?id=${encodeURIComponent(cardId)}`;
    })
})



// ============= Animatiions function ===============//
let tl = gsap.timeline()
tl.from("header", {
    y: -200,
    duration: 1,
    opacity: 0,
})
tl.from(".dest-banner", {
    duration: 1,
    opacity: 0,
}, "same")
tl.from(".dest-head", {
    y: 100,
    opacity: 0,
}, "same")



let slideOnScroll = document.querySelectorAll(".slideOnScroll")
slideOnScroll.forEach((slide) => {
    gsap.from(slide, {
        y: 100,
        duration: 0.5,
        opacity: 0,
        scrollTrigger: {
            trigger: slide,
            start: "top 85%",
            end: "top 70%",
            // markers: true,
            scrub: 1,

        }
    })
})