let bar = document.getElementById("bar")
let menu = document.getElementById("menu")
let link = document.getElementById("link")

let check = document.getElementById("menuLink")
let menuBox = document.getElementById("menuBox")
let show = false

let bot = document.getElementById("bot")
let description = document.getElementById("description")
let buttonInvite = document.getElementById("buttonInvite")
let home = document.getElementById("home")


function loc(href){
    location.href = href
}
function frame(){
    menuBox.style.height = `100%`
    if (window.innerWidth <= 760){
        menu.style.display = `block`
        link.style.display = `none`
        
        bar.style.height = `70px`
        menu.style.top = `15px`
        menuBox.style.top = `70px`
        home.style.top = `-8px`

        description.style.fontSize = `35px`

        bot.style.width = `230px`
        bot.style.height = `230px`
        bot.style.backgroundSize = `230px`

        buttonInvite.style.width = `135px`
        buttonInvite.style.height = `40px`
        buttonInvite.style.fontSize = `30px`
        buttonInvite.children[0].style.top = `-1%`
    }else if (window.innerWidth <= 960){
        menu.style.display = `block`
        link.style.display = `none`

        bar.style.height = `90px`
        menu.style.top = `25px`
        menuBox.style.top = `90px`
        home.style.top = `0px`

        description.style.fontSize = `35px`

        bot.style.width = `250px`
        bot.style.height = `250px`
        bot.style.backgroundSize = `250px`

        buttonInvite.style.width = `180px`
        buttonInvite.style.height = `60px`
        buttonInvite.style.fontSize = `40px`
        buttonInvite.children[0].style.top = `-1%`
    }else{
        menu.style.display = `none`
        link.style.display = `block`
        description.style.fontSize = `50px`

        bar.style.height = `90px`
        menu.style.top = `25px`
        menuBox.style.top = `90px`
        home.style.top = `0px`

        bot.style.width = `300px`
        bot.style.height = `300px`
        bot.style.backgroundSize = `300px`

        buttonInvite.style.width = `230px`
        buttonInvite.style.height = `80px`
        buttonInvite.style.fontSize = `50px`
        buttonInvite.children[0].style.top = `4%`
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
    await sleep(.5)
    document.getElementsByClassName("white")[0].style.transition = `all .35s`
    document.getElementsByClassName("white")[0].style.color = `rgb(255, 255, 255)`
    buttonInvite.style.transition = `all .35s`
    console.log(buttonInvite.children[0])
    bot.style.transition = `all .35s`
    description.style.transition = `all .35s`
    bar.style.transition = `all 1s`
    menu.style.transition = `all 1s`
    home.style.transition = `all 1s`
    menuBox.style.transition = `all 1s`

}

showMenu()
frame()