let menu = document.getElementById("menu")
let dev = document.getElementById("dev") 

let check = document.getElementById("menuLink")
let menuBox = document.getElementById("menuBox")
let list = document.getElementById("list")

function loc(href){
    location.href = href
}
function frame(){
    if (window.innerWidth <= 960){
        menu.style.display = `block`
        dev.style.display = `none`
    }else{
        menu.style.display = `none`
        dev.style.display = `block`
    }

    if (check.checked){
        menuBox.style.display = `block`
        list.style.display = `none`
    }else{
        menuBox.style.display = `none`
        list.style.display = `block`
    }


    requestAnimationFrame(frame)
}

frame()