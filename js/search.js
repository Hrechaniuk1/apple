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

const allProducrts = [
    { brand: "apple", name: "Apple iPhone 3g", descript: "lorem sdfsdf ewrwe ssdf", price: "80" },
    { brand: "apple", name: "Apple iPhone 5", descript: "lorem sdfsdf ewrwe ssdf", price: "100" },
    { brand: "apple", name: "Apple iPhone 6", descript: "lorem sdfsdf ewrwe ssdf", price: "150" },
    { brand: "apple", name: "Apple iPhone 13", descript: "lorem sdfsdf ewrwe ssdf", price: "1000" },
    { brand: "apple", name: "Apple iPhone 14", descript: "lorem sdfsdf ewrwe ssdf", price: "1200" },
    { brand: "apple", name: "Apple iPad", descript: "lorem sdfsdf ewrwe ssdf", price: "600" },
        { brand: "apple", name: "Apple iPhone 5", descript: "lorem sdfsdf ewrwe ssdf", price: "100" },
    { brand: "apple", name: "Apple iPhone 6", descript: "lorem sdfsdf ewrwe ssdf", price: "150" },
    { brand: "apple", name: "Apple iPhone 13", descript: "lorem sdfsdf ewrwe ssdf", price: "1000" },
    { brand: "apple", name: "Apple iPhone 14", descript: "lorem sdfsdf ewrwe ssdf", price: "1200" },
    { brand: "apple", name: "Apple iPad", descript: "lorem sdfsdf ewrwe ssdf", price: "600" },
    { brand: "samsung", name: "Samsung Star S5230", descript: "lorem sdfsdf ewrwe ssdf", price: "25" },
    { brand: "lenovo", name: "Lenovo Idea Pad", descript: "lorem sdfsdf ewrwe ssdf", price: "900" },
    { brand: "acer", name: "Acer", descript: "lorem sdfsdf ewrwe ssdf", price: "1010" },
    { brand: "ferrari", name: "Ferrari", descript: "lorem sdfsdf ewrwe ssdf", price: "100000" },
    { brand: "apple", name: "Apple iPhone 99", descript: "lorem sdfsdf ewrwe ssdf", price: "100000000" },    { brand: "apple", name: "Apple iPhone 5", descript: "lorem sdfsdf ewrwe ssdf", price: "100" },
    { brand: "apple", name: "Apple iPhone 6", descript: "lorem sdfsdf ewrwe ssdf", price: "150" },
    { brand: "apple", name: "Apple iPhone 13", descript: "lorem sdfsdf ewrwe ssdf", price: "1000" },
    { brand: "apple", name: "Apple iPhone 14", descript: "lorem sdfsdf ewrwe ssdf", price: "1200" },
    { brand: "apple", name: "Apple iPad", descript: "lorem sdfsdf ewrwe ssdf", price: "600" },
    { brand: "samsung", name: "Samsung Star S5230", descript: "lorem sdfsdf ewrwe ssdf", price: "25" },
    { brand: "lenovo", name: "Lenovo Idea Pad", descript: "lorem sdfsdf ewrwe ssdf", price: "900" },
    { brand: "acer", name: "Acer", descript: "lorem sdfsdf ewrwe ssdf", price: "1010" },
    { brand: "ferrari", name: "Ferrari", descript: "lorem sdfsdf ewrwe ssdf", price: "100000" },
    { brand: "apple", name: "Apple iPhone 99", descript: "lorem sdfsdf ewrwe ssdf", price: "100000000" },    { brand: "apple", name: "Apple iPhone 5", descript: "lorem sdfsdf ewrwe ssdf", price: "100" },
    { brand: "apple", name: "Apple iPhone 6", descript: "lorem sdfsdf ewrwe ssdf", price: "150" },
    { brand: "apple", name: "Apple iPhone 13", descript: "lorem sdfsdf ewrwe ssdf", price: "1000" },
    { brand: "apple", name: "Apple iPhone 14", descript: "lorem sdfsdf ewrwe ssdf", price: "1200" },
    { brand: "apple", name: "Apple iPad", descript: "lorem sdfsdf ewrwe ssdf", price: "600" },
    { brand: "samsung", name: "Samsung Star S5230", descript: "lorem sdfsdf ewrwe ssdf", price: "25" },
    { brand: "lenovo", name: "Lenovo Idea Pad", descript: "lorem sdfsdf ewrwe ssdf", price: "900" },
    { brand: "acer", name: "Acer", descript: "lorem sdfsdf ewrwe ssdf", price: "1010" },
    { brand: "ferrari", name: "Ferrari", descript: "lorem sdfsdf ewrwe ssdf", price: "100000" },
    { brand: "apple", name: "Apple iPhone 99", descript: "lorem sdfsdf ewrwe ssdf", price: "100000000" },
    { brand: "samsung", name: "Samsung Star S5230", descript: "lorem sdfsdf ewrwe ssdf", price: "25" },
    { brand: "lenovo", name: "Lenovo Idea Pad", descript: "lorem sdfsdf ewrwe ssdf", price: "900" },
    { brand: "acer", name: "Acer", descript: "lorem sdfsdf ewrwe ssdf", price: "1010" },
    { brand: "ferrari", name: "Ferrari", descript: "lorem sdfsdf ewrwe ssdf", price: "100000" },
    { brand: "apple", name: "Apple iPhone 99", descript: "lorem sdfsdf ewrwe ssdf", price: "100000000" },
              
]

const basket = document.querySelector(".section-3-product-list")

function createShop(allProducrts) {
    const htmlProducts = allProducrts.map(prod => `<li class="section-3-product-list-item" data-price="${prod.price}" data-brand="${prod.brand}">
            <div class="product-list-img-container">
            </div>
            <h3 class="product-list-item-name">${prod.name}</h3>
            <p class="product-list-item-description">
              ${prod.descript}
            </p>
            <p class="product-list-item-price">${prod.price} USD</p>
          </li>`)
    basket.innerHTML = htmlProducts.join("")
}

createShop(allProducrts)




const filterCont = document.querySelector(".filter-container")

filterCont.addEventListener("input", doSort)

function doSort(event) {
        const products = document.querySelectorAll(".section-3-product-list-item")

    let sortProd
    if (event.target === document.querySelector(".filter-up")) {
      sortProd = Array.from(products).toSorted((a, b) => (a.dataset.price) - (b.dataset.price))
    } else if (event.target === document.querySelector(".filter-down")) {
       sortProd = Array.from(products).toSorted((a, b) => (b.dataset.price) - (a.dataset.price))
    }
// console.log(Array.from(products).toSorted((a, b) => (a.dataset.price) - (b.dataset.price)))
    basket.innerHTML = sortProd.map(prod => prod.outerHTML).join("");
    
}

const brandFilter = document.querySelector(".filter-brand-container")

brandFilter.addEventListener("input", doFilter)

function doFilter(event) {
    createShop(allProducrts)
    const products = document.querySelectorAll(".section-3-product-list-item")
    let filterProd
    if (event.target === document.querySelector(".filter-apple")) {
        filterProd = Array.from(products).filter(prod => prod.dataset.brand === "apple")
    } else if (event.target === document.querySelector(".filter-acer")) {
        filterProd = Array.from(products).filter(prod => prod.dataset.brand === "acer")
    } else if (event.target === document.querySelector(".filter-lenovo")) {
        filterProd = Array.from(products).filter(prod => prod.dataset.brand === "lenovo")
    }
    basket.innerHTML = filterProd.map(prod => prod.outerHTML).join("");
}


