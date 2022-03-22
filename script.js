let titleBox = document.getElementById("titleBox")
let title = document.getElementById("title")
let bot = document.getElementById("bot")



function frame(){
    if (titleBox.clientWidth < 530){
        title.style.fontSize = `70px`
        title.style.top = `3%`
    }else if (titleBox.clientWidth < 787){
        title.style.fontSize = `100px`
        title.style.top = `1%`
    }else{
        title.style.fontSize = `140px`
        title.style.top = `-2.5%`
    }

    if (window.scrollY > 500){
        bot.style.display = `block`
        bot.style.animationDuration = `2s`
        bot.style.animationFillMode = `both`
        bot.style.animationName = `botIn`

    }
    console.log(window.scrollY)

    requestAnimationFrame(frame)
}

frame()