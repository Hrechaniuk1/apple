const sliderBox = document.querySelector(".slider-box")
const sliderList = document.querySelector(".slider-list")
const sliderImg = document.querySelectorAll(".slider-image-container")
const btnNext = document.querySelector(".btn-slider-next")
const btnPrev = document.querySelector(".btn-slider-prev")

let counter = 0

let sliderWidth = sliderBox.offsetWidth

btnNext.addEventListener("click", nextSlide)

function nextSlide(event) {
    counter++
    if (counter >= sliderImg.length) {
        counter = 0
    }
    slideImg()
}

btnPrev.addEventListener("click", prevSlide)

function prevSlide(event) {
    counter--
    if (counter < 0) {
        counter = sliderImg.length -1
    }
    slideImg()
}

function slideImg() {
    sliderList.style.transform = `translate(${-counter * sliderWidth}px)`
}

setInterval(() => nextSlide(), 3000)
