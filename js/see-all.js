const seeAllBtn = document.querySelector(".see-all-btn")
seeAllBtn.addEventListener("click", doForSeeAll)



function doForSeeAll() {
    const seeAllList = document.querySelectorAll(".section-5-item")
    seeAllList.forEach(item => item.classList.toggle("is-visible"))
    
}