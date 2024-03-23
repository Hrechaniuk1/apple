const seeAllBtn = document.querySelector(".see-all-btn")
seeAllBtn.addEventListener("click", doForSeeAll)

// ------------------------------------------------------------------

function doForSeeAll() {
    const seeAllList = document.querySelectorAll(".section-5-item-hidden")
    seeAllList.forEach(item => item.classList.toggle("is-visible"))
}
