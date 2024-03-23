import allProducrts from "./props.js"

// -----------------------------------------------------------------------------

const basket = document.querySelector(".basket-list")
let dataFromStorage
let dataFromStorageNumber 
let basketProps = []

// -----------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", createShop)
basket.addEventListener("click", doDel)

// -----------------------------------------------------------------------------

function createShop() {
    basketProps = []
  dataFromStorage = JSON.parse(localStorage.getItem("propList"))
  if(dataFromStorage) {dataFromStorageNumber = dataFromStorage.map((prop) => +prop)
  for (const prod of allProducrts) {
    if (dataFromStorageNumber.includes(prod.id)) {
      
      basketProps.push(prod)
    }}
    
  }
    const htmlProducts = basketProps.map(prod => `<li class="section-3-product-list-item" data-price="${prod.price}" data-id="${prod.id}" data-brand="${prod.brand}">
            <div class="product-list-img-container">
            <img src="https://cdn.pixabay.com/photo/2020/05/07/15/11/farm-5141889_1280.png" alt="prop" width="200">
            </div>
            <h3 class="product-list-item-name">${prod.name}</h3>
            <p class="product-list-item-description">
              ${prod.descript}
            </p>
            <p class="product-list-item-description">
              ${prod.color}
            </p>
            <p class="product-list-item-price">${prod.price} USD</p>
            <button class="delete-to-basket-btn" >Delete from basket</button>
          </li>`)
    basket.innerHTML = htmlProducts.join("")
    const totalPrice = document.querySelector(".total-price")

totalPrice.textContent = basketProps.reduce((acc, prop) => acc + +prop.price,0)
}



function doDel(event) {
    if (event.target.nodeName === "BUTTON") {
        const idToDel = event.target.closest("li").dataset.id
        const findIndex = dataFromStorageNumber.indexOf(+idToDel)
        dataFromStorageNumber.splice(findIndex, 1)
        localStorage.setItem("propList", JSON.stringify(dataFromStorageNumber))
        createShop()
        if (basket.children.length < 1) {
            localStorage.removeItem("propList")
            console.log(localStorage.getItem("propList"))
        }
    }
}

