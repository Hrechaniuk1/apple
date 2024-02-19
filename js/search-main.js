const searchForm = document.querySelector(".search-container")


searchForm.addEventListener("submit", doSearch)




function doSearch(event) {
    event.preventDefault()
        const products = document.querySelectorAll("h2")
        for (const product of Array.from(products)) {
            if (product.textContent.toUpperCase().includes(searchForm.elements.search.value.toUpperCase().trim())) {
                console.log(product.textContent)
                document.getElementById(product.id).scrollIntoView();
            } 
    }
    searchForm.reset()
    
}


