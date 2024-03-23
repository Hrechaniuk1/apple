const sliderBox = document.querySelector(".slider-box")
const sliderList = document.querySelector(".slider-list")
const sliderImg = document.querySelectorAll(".slider-image-container")

// ------------------------------------------------------------------

let counter = 0
let sliderWidth = sliderBox.offsetWidth

// ------------------------------------------------------------------

function nextSlide(event) {
    counter++
    if (counter >= sliderImg.length / 2) {
        counter = 0
    }
    slideImg()
}



function slideImg() {
    sliderList.style.transform = `translate(${-counter * sliderWidth}px)`
}

setInterval(() => nextSlide(), 3000)
