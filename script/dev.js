let menu = document.getElementById("menu")
let link = document.getElementById("link") 

let check = document.getElementById("menuLink")
let menuBox = document.getElementById("menuBox")
let list = document.getElementById("list")

let show = false

function loc(href){
    location.href = href
}
function frame(){
    menuBox.style.height = `100%`;
    if (window.innerWidth <= 960){
        menu.style.display = `block`
        link.style.display = `none`
    }else{
        menu.style.display = `none`
        link.style.display = `block`
    }
    requestAnimationFrame(frame)
}

function showMenu(){
    if (show){
        menuBox.style.display = `block`
        document.body.style.overflow = `hidden`
        show = false
        document.getElementById("top").style.transform = `translateY(150%) rotate(-45deg)`
        document.getElementById("middle").style.opacity = `0`
        document.getElementById("bottom").style.transform = `translateY(-150%) rotate(45deg)`
    }else{
        menuBox.style.display = `none`
        document.body.style.overflow = `visible`
        show = true
        document.getElementById("top").style.transform = `translateY(0%) rotate(0deg)`
        document.getElementById("middle").style.opacity = `100`
        document.getElementById("bottom").style.transform = `translateY(0%) rotate(0deg)`
    }
}

showMenu()
frame()