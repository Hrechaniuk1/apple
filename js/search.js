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


