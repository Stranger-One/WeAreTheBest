import { placeData } from "./allCards.js";


// =================== Header function ================= //
let prevScrollVal = 0;
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    let scrollVal = window.scrollY

    if (scrollVal > prevScrollVal) {
        header.style.top = "-80px"
    }
    else if (scrollVal < prevScrollVal) {
        header.style.top = "0px"
    }
    prevScrollVal = scrollVal

})

//================ Search function =================//

let input = document.querySelector(".search-input")
let searchButton = document.querySelector(".search")
let autoSugg = []
let getPlaces = [];
input.onkeyup = () => {
    autoSugg = []
    getPlaces = [];
    let inputValue = input.value;
    if (inputValue) {
        getPlaces = placeData.filter((keyword) => {
            return keyword.place.toLowerCase().includes(inputValue.toLowerCase()) || keyword.location.toLowerCase().includes(inputValue.toLowerCase())
        })
    }

    getPlaces.forEach((e) => {
        autoSugg.push(e.place)
    })

    document.querySelector(".suggestion-list ul").innerHTML = autoSugg.map((elem) => `
     <li class="suggestion-item suggItem">${elem}</li>
    `).join("")

    let suggestionItems = document.querySelectorAll(".suggItem")

    suggestionItems.forEach((item) => {
        item.onclick = () => {
            input.value = item.textContent
            document.querySelector(".suggestion-list ul").innerHTML = ""
        }
    })

}

// input.addEventListener('keydown', function(event) {
//     if (event.key == 'Enter') {
//         // alert('Enter key pressed in the input field!');
//         document.querySelector(".suggestion-list ul").innerHTML = ""
//     }
// });

searchButton.addEventListener("click", (e) => {
    e.preventDefault()
    let resultContainer = document.querySelector(".search-results")
    if (input.value.length <= 0) {
        resultContainer.innerHTML = "No Results Found"
        return
    }

    let placeResults = placeData.filter((keyword) => {
        return keyword.place.toLowerCase().includes(input.value.toLowerCase()) || keyword.location.toLowerCase().includes(input.value.toLowerCase())
    })

    document.querySelector(".suggestion-list ul").innerHTML = ""
    document.querySelector(".search-results").innerHTML = ""

    if (placeResults.length <= 0) {
        resultContainer.innerHTML = "No Results Found"
    }

    placeResults.forEach((elem) => {
        let card = `
                  <div class="card gototour" id="${elem.id}">
                        <div class="image" style="background-image: url(${elem.image});"></div>
                        <div class="details">
                            <h3>${elem.location}</h3>
                            <h2>${elem.place}</h2>
                            <h3 class="rating">
                                <i class="ri-star-fill"></i>
                                ${elem.rating}
                            </h3>
                            <p class="desc">
                            ${elem.description}
                            </p>
                            <h4>3 days - starting form 12,000</h4>

                        </div>
                    </div>
        `
        resultContainer.innerHTML += card
    })
})



const root = document.documentElement;
let cardNum = getComputedStyle(root).getPropertyValue('--recoCardNumber');
console.log(cardNum)
function swiperCard(){
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: cardNum,
        spaceBetween: 10,
        loop: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });
}
swiperCard()
window.addEventListener("resize", () => {
    cardNum = getComputedStyle(root).getPropertyValue('--recoCardNumber');
    // console.log(cardNum)
    swiperCard()
})



// ============= trending function ===============//

for (let i = 0; i <= 3; i++) {
    let trending = `
                <div class="trending-card gototour slideOnScroll" id="${placeData[i].id}">
                    <div class="card-img">
                        <img src="${placeData[i].image}" alt="">
                    </div>
                    <div class="card-details">
                        <div class="add-rat">
                            <h4>${placeData[i].location}</h4>
                            <h4>${placeData[i].rating} <i class="ri-star-fill"></i></h4>
                        </div>
                        <h2 class="name">${placeData[i].place}</h2>
                        <div class="days-cost">
                            <h4>${placeData[i].duration || 2} days • from Rs.${(placeData[i].starting_cost || 15000).toLocaleString()}</h4>
                        </div>
                    </div>
                </div>    
    
    `
    document.querySelector(".trending-card-container").innerHTML += trending
}


// ============= recommended function ===============//
let Start = 1
let Num = 10
let End = Start + Num;

for (let i = 1; i <= 10; i++) {
    let recommended = `
        <div class="swiper-slide gototour" id="${placeData[i].id}">
            <img src="${placeData[i].image}" alt="">
            <div class="text">
                <h2 class="name">${placeData[i].place}</h2>
                <p>${placeData[i].location}</p>
             </div>
        </div>       
    `
    document.querySelector(".recommendation-container").innerHTML += recommended
}




// ============= redirect to tour page function ===============//
document.querySelectorAll(".gototour").forEach((card) => {
    card.addEventListener("click", (e) => {
        console.log(e.target.closest(".gototour").getAttribute("id"))
        let cardId = e.target.closest(".gototour").getAttribute("id")
        window.location.href = `theTour.html?id=${encodeURIComponent(cardId)}`;
    })
})


// ============== Animations function ===============//


let tl = gsap.timeline()
tl.from("header", {
    y: -200,
    duration: 1,
    opacity: 0,
})
tl.from(".hero-header", {
    y: 100,
    opacity: 0,
    duration: 1,
})
tl.from(".form-container", {
    opacity: 0,
    duration: 1,
})

let slideOnScroll = document.querySelectorAll(".slideOnScroll")
slideOnScroll.forEach((slide) => {
    gsap.from(slide, {
        y: 100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: slide,
            start: "top 90%",
            end: "top 80%",
            // markers: true,
            // scrub: true,

        }
    })
})