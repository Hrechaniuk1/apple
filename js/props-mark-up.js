function createShop(props) {
    const basket = document.querySelector(".section-3-product-list")
    const htmlProducts = props.map(prod => `<li class="section-3-product-list-item" data-price="${prod.price}" data-id="${prod.id}" data-brand="${prod.brand}">
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
            <button class="add-to-basket-btn" >Add to basket</button>
          </li>`)
    basket.innerHTML = htmlProducts.join("")
}

export default createShop