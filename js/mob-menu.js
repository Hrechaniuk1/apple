
const openMobMenu = document.querySelector(".mob-menu-open-btn")
const closeMobMenu = document.querySelector(".mob-close-menu-btn")

// ------------------------------------------------------------------

openMobMenu.addEventListener("click", doForMobMenu)
closeMobMenu.addEventListener("click", doForMobMenu)

// ------------------------------------------------------------------

function doForMobMenu() {
  const mobMenu = document.querySelector(".mobile-menu")
  mobMenu.classList.toggle("is-hidden")
}