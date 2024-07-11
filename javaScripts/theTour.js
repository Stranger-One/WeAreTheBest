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


// ============= Page Loading ==============//
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const cardId = getQueryParam('id');
// console.log(cardId)


let relatedCards = ``;
function relatedCardGenerate (){
    let allCards = ``
    for(let i=0; i<=3; i++){
        let index = Math.floor( Math.random() * placeData.length)
        let card = `
                <div class="trending-card gototour" id="${placeData[index].id}">
                    <div class="card-img">
                        <img src="${placeData[index].image}" alt="">
                    </div>
                    <div class="card-details">
                        <div class="add-rat">
                            <h4>${placeData[index].location}</h4>
                            <h4>${placeData[index].rating} <i class="ri-star-fill"></i></h4>
                        </div>
                        <h2 class="name">${placeData[index].place}</h2>
                        <div class="days-cost">
                            <h4>${placeData[index].duration} days • from Rs.${(placeData[index].starting_cost || 12000).toLocaleString()}</h4>
                        </div>
                    </div>
                </div>
        `
        allCards += card
    }
    relatedCards = allCards
}
relatedCardGenerate()
// console.log(placeData.filter( elem => elem.id == cardId)[0])
let pageDetails = placeData.filter( elem => elem.id == cardId)[0]

let tourPage = `
<section class="tour-hero main-p">
            <span>
                <h4 class="address">${pageDetails.location || "Address"} • <i class="ri-star-fill"></i> ${pageDetails.rating} (236) </h4>
            </span>
            <span>
                <h1 class="place">The complete ${pageDetails.place || "Place"} tour</h1>
            </span>
            <span>
                <p class="description">${pageDetails.description || "Description"}</p>
            </span>
            <span>
                <div class="details-container">
                    <div class="details-item">
                        <div class="icon">
                            <i class="ri-time-line"></i>
                        </div>
                        <div class="text">
                            <h4>Duration</h4>
                            <h3>${pageDetails.duration || 3} Days</h3>
                        </div>
                    </div>
                    <div class="details-item">
                        <div class="icon">
                            <i class="ri-group-line"></i>
                        </div>
                        <div class="text">
                            <h4>Group size</h4>
                            <h3>${pageDetails.group_size || "1-10"} people</h3>
                        </div>
                    </div>
                    <div class="details-item">
                        <div class="icon">
                            <i class="ri-user-3-line"></i>
                        </div>
                        <div class="text">
                            <h4>Age range</h4>
                            <h3>${pageDetails.age_range || "All ages"}</h3>
                        </div>
                    </div>
                    <div class="details-item">
                        <div class="icon">
                            <i class="ri-chat-4-line"></i>
                        </div>
                        <div class="text">
                            <h4>Language</h4>
                            <h3>${pageDetails.language || "Hindi"}</h3>
                        </div>
                    </div>
                    <div class="details-item">
                        <div class="icon">
                            <i class="ri-money-rupee-circle-line"></i>
                        </div>
                        <div class="text">
                            <h4>Starting fron</h4>
                            <h3>Rs. ${(pageDetails.starting_cost || 12000).toLocaleString()}</h3>
                        </div>
                    </div>
                </div>
            </span>
            <span class="banner-cover">
                <div class="cover-image">
                    <img src="${pageDetails.image || images/New-york-city.jpg}" alt="">
                </div>
            </span>
            <div class="overview">
                <span>
                    <h2>Overview</h2>
                </span>
                <span>
                    <p>${pageDetails.description || Description}</p>
                </span>
            </div>
        </section>

        <section class="tour-map main-p">
            <div class="map">
                <iframe src="${pageDetails.map || `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12624.280960536385!2d77.2144509067443!3d28.60905520072321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2db961be393%3A0xf6c7ef5ee6dd10ae!2sIndia%20Gate%2C%20New%20Delhi%2C%20Delhi!5e1!3m2!1sen!2sin!4v1720411996395!5m2!1sen!2sin` }" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </section>
        <section class="itinerary-page main-p">
            <div class="full-page">
                <div class="left">
                    <div class="itinerary">
                        <h2 class="head">Itinerary</h2>
                        <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque culpa quae
                            in quas
                            illum laborum blanditiis dolorum, aut porro recusandae illo a ab, qui fugit amet dicta
                            labore praesentium.</p>
                        <div class="itinerary-container">
                        ${pageDetails.itinerary ? pageDetails.itinerary.map( elem => `
                            <div class="itinerary-item day-${elem.day}">
                                <input type="radio" id="day-${elem.day}" name="itinerary">
                                <label for="day-${elem.day}">
                                    <h3>Day ${elem.day}</h3>
                                    <i class="ri-arrow-down-s-line"></i>
                                </label>

                                <div class="itinerary-detaild">
                                ${elem.activities.map(act => `
                                    <div class="item">
                                        <i class="ri-corner-down-right-line"></i>
                                        <p>${act}</p>
                                    </div>
                                ` ).join("")}
                                </div>
                            </div>
                        `).join("") : ""}
                        </div>
                    </div>
                    <div class="other-facility">
                        <h2 class="head">Area availability</h2>
                        <div class="lists">
                            <div class="item">
                                <i class="ri-rfid-line"></i>
                                <h2>Internet</h2>
                                <div>
                                ${pageDetails.facilities.internet != "Not Available" ? ` <i class="ri-checkbox-circle-line"></i>` :`<i class="ri-close-circle-line"></i>`}
                                    
                                   
                                    <p>${pageDetails.facilities.internet}</p>
                                </div>
                            </div>
                            <div class="item">
                                <i class="ri-git-commit-line"></i>
                                <h2>Electricity</h2>
                                <div>
                                ${pageDetails.facilities.electricity != "Not Available" ? ` <i class="ri-checkbox-circle-line"></i>` :`<i class="ri-close-circle-line"></i>`}

                                    <p>${pageDetails.facilities.electricity}</p>

                                </div>
                            </div>
                            <div class="item">
                                <i class="ri-car-line"></i>
                                <h2>Transportation</h2>
                                <div>
                                ${pageDetails.facilities.transportation != "Not Available" ? ` <i class="ri-checkbox-circle-line"></i>` :`<i class="ri-close-circle-line"></i>`}

                                    <p>${pageDetails.facilities.transportation}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="near-place">
                        <h2 class="head">Nearest Places</h2>
                        <div class="place-cont">
                        ${pageDetails.nearest_places ? pageDetails.nearest_places.map(place => `
                            <div class="place">
                                <h2 class="name">${place.name}</h2>
                                <p class="dist">${place.distance_km} km</p>
                            </div>
                        `).join("") : "Not found"}
                        </div>
                    </div>
                    <div class="tour-operator">
                        <h2 class="head">Tour Operator</h2>
                        <div class="about">
                            <div class="descrip">
                                <span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quisquam
                                        doloribus reiciendis laborum quae natus sapiente, accusantium temporibus
                                        repudiandae quibusdam? Sapiente ad magni officia labore blanditiis consectetur
                                        amet nihil eum!</p>
                                </span>
                                <span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quisquam
                                        doloribus reiciendis laborum quae natus sapiente, accusantium temporibus
                                        repudiandae quibusdam? Sapiente ad magni officia labore blanditiis consectetur
                                        amet nihil eum!</p>
                                </span>
                            </div>
                            <div class="profile">
                                <div class="image">
                                    <img src="images/paris.jpg" alt="profile">
                                </div>
                                <div class="name">John Doe</div>
                                <div class="position">CEO</div>
                                <div class="email">john@doe.com</div>
                                <div class="phone">+1 234 567 890</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="right">
                    <div class="sticky-box">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quisquam iusto perspiciatis,
                        dolorum molestiae accusamus vel voluptas provident! Nam, temporibus!
                    </div>
                </div>
            </div>
        </section>

        <section class="gallery main-p">
            <h2 class="head">Our galley</h2>
            <div class="container">
                <div style="background-image: url(${pageDetails.gallery[0] || "https://media.gettyimages.com/id/645085786/photo/india-varanasi-ghats-on-the-river-ganges.jpg?s=612x612&w=0&k=20&c=oHDhUQO5jQQrE9iAP2G4yhdGFt2WayOR7s5RUzL7RCA=" });" class="item"></div>
                <div style="background-image: url(${pageDetails.gallery[1] || "https://media.gettyimages.com/id/645085786/photo/india-varanasi-ghats-on-the-river-ganges.jpg?s=612x612&w=0&k=20&c=oHDhUQO5jQQrE9iAP2G4yhdGFt2WayOR7s5RUzL7RCA=" });" class="item col-2"></div>
                <div style="background-image: url(${pageDetails.gallery[2] || "https://media.gettyimages.com/id/645085786/photo/india-varanasi-ghats-on-the-river-ganges.jpg?s=612x612&w=0&k=20&c=oHDhUQO5jQQrE9iAP2G4yhdGFt2WayOR7s5RUzL7RCA=" });" class="item row-col-2"></div>
                <div style="background-image: url(${pageDetails.gallery[3] || "https://media.gettyimages.com/id/645085786/photo/india-varanasi-ghats-on-the-river-ganges.jpg?s=612x612&w=0&k=20&c=oHDhUQO5jQQrE9iAP2G4yhdGFt2WayOR7s5RUzL7RCA=" });" class="item row-col-2"></div>
                <div style="background-image: url(${pageDetails.gallery[4] || "https://media.gettyimages.com/id/645085786/photo/india-varanasi-ghats-on-the-river-ganges.jpg?s=612x612&w=0&k=20&c=oHDhUQO5jQQrE9iAP2G4yhdGFt2WayOR7s5RUzL7RCA=" });" class="item"></div>
                <div style="background-image: url(${pageDetails.gallery[5] || "https://media.gettyimages.com/id/645085786/photo/india-varanasi-ghats-on-the-river-ganges.jpg?s=612x612&w=0&k=20&c=oHDhUQO5jQQrE9iAP2G4yhdGFt2WayOR7s5RUzL7RCA=" });" class="item col-2"></div>
                <div style="background-image: url(${pageDetails.gallery[6] || "https://media.gettyimages.com/id/645085786/photo/india-varanasi-ghats-on-the-river-ganges.jpg?s=612x612&w=0&k=20&c=oHDhUQO5jQQrE9iAP2G4yhdGFt2WayOR7s5RUzL7RCA=" });" class="item"></div>
            </div>
        </section>

        <section class="reviews main-p">
            <h2 class="head">Tourist Reviews</h2>
            <div class="container">
            ${pageDetails.tourist_reviews ? pageDetails.tourist_reviews.map(review => `
                <div class="review-box">
                    <h3 class="rating">
                        <span>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                        </span>
                        ${review.rating}
                    </h3>
                    <p class="message">${review.message}</p>
                    <a href="#" class="read">read more</a>
                    <div class="about">
                        <h3 class="name">${review.name}</h3>
                        <h4 class="address">${review.belongs_from}</h4>
                    </div>
                </div>
            `).join("") : "Not Found"}
            </div>
        </section>

        <section class="trnding main-p">
            <div class="page-header">
                <span>
                    <h2>Related Tours</h2>
                </span>
            </div>
            <div class="page-content trending-card-container">
            ${relatedCards}
                
            </div>

        </section>

        <section class="touch main-p">
            <div class="page-content touch">
                <h2>Get intouch with us</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ratione molestias, quasi quas optio
                    ducimus eos doloribus dicta. Eum, autem?</p>
                <button>contact us</button>
            </div>
        </section>
`

document.querySelector("#full-page").innerHTML = tourPage



// ============= redirect to tour page function ===============//
document.querySelectorAll(".gototour").forEach((card) => {
    card.addEventListener("click", (e) => {
        // console.log(e.target.closest(".gototour").getAttribute("id"))
        let cardId = e.target.closest(".gototour").getAttribute("id")
        window.location.href = `theTour.html?id=${encodeURIComponent(cardId)}`;
    })
})

document.querySelector("#day-1").checked = true