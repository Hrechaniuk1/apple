const searchForm = document.querySelector(".search-container")


searchForm.addEventListener("submit", doSearch)


function doSearch(event) {
    event.preventDefault()
        const products = document.querySelectorAll(".section-3-product-list-item")
        for (const product of Array.from(products)) {
            if (product.querySelector("h3").textContent.toUpperCase().includes(searchForm.elements.search.value.toUpperCase().trim())) {
                console.log(product.textContent)
                product.classList.remove("is-hidden-item")
            } else {
                product.classList.add("is-hidden-item")
            }
    }
    searchForm.reset()
    
}

// filter

// const allProducrts = [
//     { name: "Apple iPhone 3g", descript: "lorem sdfsdf ewrwe ssdf", price: "80" },
//     { name: "Apple iPhone 5", descript: "lorem sdfsdf ewrwe ssdf", price: "100" },
//     { name: "Apple iPhone 6", descript: "lorem sdfsdf ewrwe ssdf", price: "150" },
//     { name: "Apple iPhone 13", descript: "lorem sdfsdf ewrwe ssdf", price: "1000" },
//     { name: "Apple iPhone 14", descript: "lorem sdfsdf ewrwe ssdf", price: "1200" },
//     { name: "Apple iPad", descript: "lorem sdfsdf ewrwe ssdf", price: "600" },
//     { name: "Samsung Star S5230", descript: "lorem sdfsdf ewrwe ssdf", price: "25" },
//     { name: "Lenovo Idea Pad", descript: "lorem sdfsdf ewrwe ssdf", price: "900" },
//     { name: "Acer", descript: "lorem sdfsdf ewrwe ssdf", price: "1010" },
//     { name: "Ferrari", descript: "lorem sdfsdf ewrwe ssdf", price: "100000" },
//     { name: "Apple iPhone 99", descript: "lorem sdfsdf ewrwe ssdf", price: "100000000" },
              
// ]

// const basket = document.querySelector(".products-container")

// function createShop(allProducrts) {
//     const htmlProducts = allProducrts.map(prod => `<li class="section-3-product-list-item" data-price="${prod.price}">
//             <div class="product-list-img-container">
//             </div>
//             <h3 class="product-list-item-name">${prod.name}</h3>
//             <p class="product-list-item-description">
//               ${prod.descript}
//             </p>
//             <p class="product-list-item-price">${prod.price} USD</p>
//           </li>`)
//     basket.insertAdjacentHTML("afterbegin", htmlProducts.join(""))
// }

// createShop(allProducrts)





// searchForm.addEventListener("input", doSearch)

// function doSearch(event) {
//         const products = document.querySelectorAll(".section-3-product-list-item")

//     let sortProd
//     if (event.target.value === "up") {
//       sortProd = Array.from(products).toSorted((a, b) => (a.dataset.price) - (b.dataset.price))
//     } else if (event.target.value === "down") {
//        sortProd = Array.from(products).toSorted((a, b) => (b.dataset.price) - (a.dataset.price))
//     }
// console.log(Array.from(products).toSorted((a, b) => (a.dataset.price) - (b.dataset.price)))
//     basket.innerHTML = sortProd.map(prod => prod.outerHTML).join("");
//     searchForm.reset()
    
// }

