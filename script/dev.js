let bar = document.getElementById("bar")
let menu = document.getElementById("menu")
let link = document.getElementById("link") 

let menuBox = document.getElementById("menuBox")
let list = document.getElementById("list")
let home = document.getElementById("home")

let show = false

function loc(href){
    location.href = href
}
function frame(){
    menuBox.style.height = `100%`;
    if (window.innerWidth <= 760){
        menu.style.display = `block`
        link.style.display = `none`
        
        bar.style.height = `70px`
        menu.style.top = `15px`
        menuBox.style.top = `70px`
        home.style.top = `-8px`
    }else if (window.innerWidth <= 960){
        menu.style.display = `block`
        link.style.display = `none`

        bar.style.height = `90px`
        menu.style.top = `25px`
        menuBox.style.top = `90px`
        home.style.top = `0px`

    }else{
        menu.style.display = `none`
        link.style.display = `block`

        bar.style.height = `90px`
        menu.style.top = `25px`
        menuBox.style.top = `90px`
        home.style.top = `0px`
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

function sleep(time){
    return new Promise(res=>{
        setTimeout(res , time*1000)
    })
}

window.onload = async ()=>{
    bar.style.transition = `all 1s`
    menu.style.transition = `all 1s`
    home.style.transition = `all 1s`
    for (i = 0;i<document.getElementsByClassName("line").length;i++){
        document.getElementsByClassName("line")[i].style.width = `90%`
        await sleep(0.1)
    }
    
}
showMenu()
frame()