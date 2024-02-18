const selectBtn = document.querySelector(".mobile-solutions-label")
selectBtn.addEventListener("click", selectToggle)

function selectToggle() {
    const selectMenu = document.querySelector(".mobile-solutions-list")
    selectMenu.classList.toggle("mobile-solutions-list-visible")
}