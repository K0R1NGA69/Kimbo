
export function changeSearchMode() {
    let searchForm = document.querySelector(".search-box")

    const ptLink = document.querySelector(".pt")
    const ubLink = document.querySelector(".ub")
   
    ptLink.addEventListener("click", (e) => {
        e.preventDefault()
        searchForm.action = "/search/pt"
        ptLink.classList.add("activated")
        ubLink.classList.remove("activated")
        window.addEventListener("load",()=>{
            alert(1)
        })
    })
    ubLink.addEventListener("click", (e) => {
        e.preventDefault()
        searchForm.action = "/search/ub"
        ubLink.classList.add("activated")
        ptLink.classList.remove("activated")
        
    })
}

