import allProducrts from "./props.js"
import createShop from "./props-mark-up.js"

// html tags
const htmlTags = {
    searchForm: document.querySelector(".search-form-main"),
    searchFormNav: document.querySelector(".search-in-nav-form"),
    filterForm: document.querySelector(".filter-form"),
    sortFeature: document.querySelector(".sortFeature"),
    brandSelector: document.querySelector(".brand-name"),
    resetFilters: document.querySelector(".reset"),
    searchBtn: document.querySelector(".search-icon-btn"),
}

// create props markup

createShop(allProducrts)

// do search
htmlTags.searchForm.addEventListener("submit", doSearch)
htmlTags.searchFormNav.addEventListener("submit", doSearch)


function doSearch(event) {
    event.preventDefault()
    doReset()
const searchResult = []
    for (const product of allProducrts) {

            if (product.name.toUpperCase().includes(event.target.elements.search.value.toUpperCase().trim())) {
                searchResult.push(product)
                createShop(searchResult)
        } 
        
    }
    event.target.elements.search.value = ""
    
}

let supportForSort = allProducrts

// sort
htmlTags.sortFeature.addEventListener("change", doSort)

function doSort(event) {
    // if (supportForSort) {
        if (event.target.value === "min-to-max") {
            const sortProps = supportForSort.toSorted((a, b) => a.price - b.price)
            createShop(sortProps)
        } else if (event.target.value === "max-to-min") {
            const sortProps = supportForSort.toSorted((a, b) => b.price - a.price)
            createShop(sortProps)
        } else {
            createShop(supportForSort)
        }
    // }
    // else {
    //     if (event.target.value === "min-to-max") {
    //         const sortProps = allProducrts.toSorted((a, b) => a.price - b.price)
    //         createShop(sortProps)
    //     } else if (event.target.value === "max-to-min") {
    //         const sortProps = allProducrts.toSorted((a, b) => b.price - a.price)
    //         createShop(sortProps)
    //     } else {
    //         createShop(allProducrts)
    //     }
    // }
}

// model markup create
htmlTags.brandSelector.addEventListener("change", doChange)

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
htmlTags.filterForm.addEventListener("submit", doFilter)


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
    if (htmlTags.sortFeature.value === "min-to-max") {
        filteredTotal = filteredTotal.toSorted((a, b) => a.price - b.price)

        createShop(filteredTotal)
    } else if (htmlTags.sortFeature.value === "max-to-min") {
        filteredTotal = filteredTotal.toSorted((a, b) => b.price - a.price)

        createShop(filteredTotal)
    } else {
        createShop(filteredTotal)

    }

}

// reset 
htmlTags.resetFilters.addEventListener("click", doReset)

function doReset() {
    htmlTags.filterForm.reset()
    createShop(allProducrts)
    supportForSort = allProducrts
    htmlTags.sortFeature.selectedIndex = 0
    const modelFilterValue = document.querySelector(".model-option-list")
    modelFilterValue.innerHTML = `<option value="no-model">Model</option>`
}



// search in nav
htmlTags.searchBtn.addEventListener("click", openModalSearch)

function openModalSearch(event) {
    event.preventDefault()
    const formInNav = htmlTags.searchFormNav
    formInNav.classList.remove("is-hidden-item")

    setTimeout(function () {
        document.addEventListener("click", closeModalByClick)
    function closeModalByClick(event) {
        if (!formInNav.contains(event.target) && event.target !== htmlTags.searchBtn) {
            formInNav.classList.add("is-hidden-item")
            document.removeEventListener("click", closeModalByClick)
            document.removeEventListener("keydown", closeModal)
        }
        
        }
        document.addEventListener("keydown", closeModal)
    function closeModal(event) {
        if (event.code === "Escape") {
            formInNav.classList.add("is-hidden-item")
            document.removeEventListener("keydown", closeModal)
            document.removeEventListener("click", closeModalByClick)
        }
    }
   
    }, 100) 
    

    
}

