export default function loading(div){
    var loader = document.getElementById(div)
    console.log("ok")
    window.addEventListener("load",()=>{
        console.log("ok")
        loader.style.display = "none"
    })
}
