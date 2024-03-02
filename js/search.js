const searchForm = document.querySelector(".search-container")



// props

const allProducrts = [
    { color: "red", brand: "apple", name: "Apple iPhone 5", descript: "lorem sdfsdf ewrwe ssdf", price: "100" },
    { color: "black", brand: "apple", name: "Apple iPhone 3g", descript: "lorem sdfsdf ewrwe ssdf", price: "80" },
    { color: "green", brand: "apple", name: "Apple iPhone 6", descript: "lorem sdfsdf ewrwe ssdf", price: "150" },
    { color: "blue", brand: "apple", name: "Apple iPhone 13", descript: "lorem sdfsdf ewrwe ssdf", price: "1000" },
    { color: "red", brand: "apple", name: "Apple iPhone 14", descript: "lorem sdfsdf ewrwe ssdf", price: "1200" },
    { color: "red", brand: "apple", name: "Apple iPad", descript: "lorem sdfsdf ewrwe ssdf", price: "600" },
        { color: "red", brand: "apple", name: "Apple iPhone 5", descript: "lorem sdfsdf ewrwe ssdf", price: "100" },
    { color: "black", brand: "apple", name: "Apple iPhone 6", descript: "lorem sdfsdf ewrwe ssdf", price: "150" },
    { color: "black", brand: "apple", name: "Apple iPhone 13", descript: "lorem sdfsdf ewrwe ssdf", price: "1000" },
    { color: "black", brand: "apple", name: "Apple iPhone 14", descript: "lorem sdfsdf ewrwe ssdf", price: "1200" },
    { color: "green", brand: "apple", name: "Apple iPad", descript: "lorem sdfsdf ewrwe ssdf", price: "600" },
    { color: "blue", brand: "samsung", name: "Samsung Star S5230", descript: "lorem sdfsdf ewrwe ssdf", price: "25" },
    { color: "red", brand: "lenovo", name: "Lenovo Idea Pad", descript: "lorem sdfsdf ewrwe ssdf", price: "900" },
    { color: "blue", brand: "acer", name: "Acer", descript: "lorem sdfsdf ewrwe ssdf", price: "1010" },
    { color: "red", brand: "lenovo", name: "s43", descript: "lorem sdfsdf ewrwe ssdf", price: "143" },
    { color: "black", brand: "lenovo", name: "start32", descript: "lorem sdfsdf ewrwe ssdf", price: "954" },    { brand: "apple", name: "Apple iPhone 5", descript: "lorem sdfsdf ewrwe ssdf", price: "100" },
    { color: "black", brand: "apple", name: "Apple iPhone 6", descript: "lorem sdfsdf ewrwe ssdf", price: "150" },
    { color: "black", brand: "apple", name: "Apple iPhone 13", descript: "lorem sdfsdf ewrwe ssdf", price: "1000" },
    { color: "black", brand: "samsung", name: "multiphone", descript: "lorem sdfsdf ewrwe ssdf", price: "1200" },
    { color: "black", brand: "samsung", name: "duos", descript: "lorem sdfsdf ewrwe ssdf", price: "600" },
    { color: "red", brand: "samsung", name: "Samsung Star S5230", descript: "lorem sdfsdf ewrwe ssdf", price: "25" },
    { color: "red", brand: "lenovo", name: "Lenovo Idea Pad", descript: "lorem sdfsdf ewrwe ssdf", price: "900" },
    {color: "blue", brand: "acer", name: "Acer", descript: "lorem sdfsdf ewrwe ssdf", price: "1010" },
    {color: "blue", brand: "acer", name: "acer a54", descript: "lorem sdfsdf ewrwe ssdf", price: "10032" },
    {color: "blue", brand: "apple", name: "Apple iPhone 99", descript: "lorem sdfsdf ewrwe ssdf", price: "100" },    { brand: "apple", name: "Apple iPhone 5", descript: "lorem sdfsdf ewrwe ssdf", price: "100" },
    {color: "blue", brand: "apple", name: "Apple iPhone 6", descript: "lorem sdfsdf ewrwe ssdf", price: "150" },
    {color: "blue", brand: "acer", name: "acer s13", descript: "lorem sdfsdf ewrwe ssdf", price: "1000" },
    {color: "blue", brand: "apple", name: "Apple iPhone 14", descript: "lorem sdfsdf ewrwe ssdf", price: "1200" },
    {color: "blue", brand: "apple", name: "Apple iPad", descript: "lorem sdfsdf ewrwe ssdf", price: "600" },
    {color: "blue", brand: "samsung", name: "Samsung Star S5230", descript: "lorem sdfsdf ewrwe ssdf", price: "25" },
    {color: "blue", brand: "lenovo", name: "Lenovo Idea Pad", descript: "lorem sdfsdf ewrwe ssdf", price: "900" },
    {color: "blue", brand: "acer", name: "Acer", descript: "lorem sdfsdf ewrwe ssdf", price: "101000" },
    {color: "blue", brand: "acer", name: "acer 54", descript: "lorem sdfsdf ewrwe ssdf", price: "100000" },
    {color: "blue", brand: "apple", name: "Apple iPhone 99", descript: "lorem sdfsdf ewrwe ssdf", price: "100000000" },
    {color: "blue", brand: "samsung", name: "Samsung Star S5230", descript: "lorem sdfsdf ewrwe ssdf", price: "25" },
    {color: "blue", brand: "lenovo", name: "Lenovo Idea Pad", descript: "lorem sdfsdf ewrwe ssdf", price: "900" },
    {color: "green", brand: "acer", name: "Acer", descript: "lorem sdfsdf ewrwe ssdf", price: "101" },
    {color: "green", brand: "acer", name: "acer 54", descript: "lorem sdfsdf ewrwe ssdf", price: "100000" },
    {color: "green", brand: "apple", name: "Apple iPhone 99", descript: "lorem sdfsdf ewrwe ssdf", price: "100000000" },
              
]

// do search

searchForm.addEventListener("submit", doSearch)


function doSearch(event) {
    event.preventDefault()
    doReset()
const searchResult = []
    for (const product of allProducrts) {

            if (product.name.toUpperCase().includes(searchForm.elements.search.value.toUpperCase().trim())) {
                searchResult.push(product)
                createShop(searchResult)
        } 
        
    }
    searchForm.reset()
    
}

// create props markup

const basket = document.querySelector(".section-3-product-list")


function createShop(props) {
    const htmlProducts = props.map(prod => `<li class="section-3-product-list-item" data-price="${prod.price}" data-brand="${prod.brand}">
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
          </li>`)
    basket.innerHTML = htmlProducts.join("")
}

createShop(allProducrts)

// do filters and sort

const filterForm = document.querySelector(".filter-form")
const sortFeature = document.querySelector(".sortFeature")
const brandSelector = document.querySelector(".brand-name")
const resetFilters = document.querySelector(".reset")

// sort
sortFeature.addEventListener("change", doSort)

let supportForSort

function doSort(event) {
    if (supportForSort) {
        if (event.target.value === "min-to-max") {
            const sortProps = supportForSort.toSorted((a, b) => a.price - b.price)
            createShop(sortProps)
        } else if (event.target.value === "max-to-min") {
            const sortProps = supportForSort.toSorted((a, b) => b.price - a.price)
            createShop(sortProps)
        } else {
            createShop(supportForSort)
        }
    } else {
        if (event.target.value === "min-to-max") {
            const sortProps = allProducrts.toSorted((a, b) => a.price - b.price)
            createShop(sortProps)
        } else if (event.target.value === "max-to-min") {
            const sortProps = allProducrts.toSorted((a, b) => b.price - a.price)
            createShop(sortProps)
        } else {
            createShop(allProducrts)
        }
    }
}

// model markup create
brandSelector.addEventListener("change", doChange)

function doChange(event) {
    
    const modelFilterValue = document.querySelector(".model-option-list")
    modelFilterValue.innerHTML = `<option value="no-model">Model</option>`
    const modelFilter = allProducrts.filter(a => a.brand === event.target.value)
    const realMarkUp = modelFilter.map((elem) => { 
      return  `<option value="${elem.name}">${elem.name}</option>`
    })
        modelFilterValue.insertAdjacentHTML("beforeend", realMarkUp.join(""))
}


// filter
filterForm.addEventListener("submit", doFilter)


function doFilter(event) {
    event.preventDefault()
    let filteredTotal = allProducrts
    if (event.target.elements.brand.value !== "no-brand") {
        filteredTotal = allProducrts.filter(a => a.brand === event.target.elements.brand.value)
        
    } 


    if (event.target.elements.color.value !== "no-color") {
        filteredTotal = filteredTotal.filter(a => a.color === event.target.elements.color.value)
    } 

    if (event.target.elements.model.value !== "no-model") {
        filteredTotal = filteredTotal.filter(a => a.name === event.target.elements.model.value)
    } else {
     console.log("hi")
    }
supportForSort = filteredTotal
    if (sortFeature.value === "min-to-max") {
        filteredTotal = filteredTotal.toSorted((a, b) => a.price - b.price)

        createShop(filteredTotal)
    } else if (sortFeature.value === "max-to-min") {
        filteredTotal = filteredTotal.toSorted((a, b) => b.price - a.price)

        createShop(filteredTotal)
    } else {
        createShop(filteredTotal)

    }

}

// reset 
resetFilters.addEventListener("click", doReset)

function doReset() {
    filterForm.reset()
    createShop(allProducrts)
    sortFeature.selectedIndex = 0
}

// search in nav
const searchBtn = document.querySelector(".search-icon-btn")
searchBtn.addEventListener("click", openModalSearch)

function openModalSearch(event) {
    event.preventDefault()
    const formInNav = document.querySelector(".search-in-nav-form")
    formInNav.classList.toggle("is-hidden-item")
    document.addEventListener("keydown", closeModal)
    function closeModal(event) {
        if (event.code === "Escape") {
            formInNav.classList.toggle("is-hidden-item")
            document.removeEventListener("keydown", closeModal)
        }
    }
    // document.addEventListener("click", closeModalByClick)
    // function closeModalByClick(event) {
    //     if (event.target !== formInNav) {
    //         formInNav.classList.toggle("is-hidden-item")
    //         document.removeEventListener("click", closeModalByClick)
    //     }
        
    // }
}

