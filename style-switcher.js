// toggle style switcher
let styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
let isShow = true;
styleSwitcherToggle.addEventListener("click",() => {
    document.querySelector(".style-switcher").classList.toggle("review");
})

// hide style switcher  on scroll 
window.addEventListener("scroll",()=> {
    if(document.querySelector(".style-switcher").classList.contains("review"))
    {
        document.querySelector(".style-switcher").classList.remove("review");
    }
})

// theme colors
const alternatesStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternatesStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}

// theme light and dark mode
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",() => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=> {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
