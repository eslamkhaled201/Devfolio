let mainHeading = document.querySelector(".typewritter");
let navBar = document.querySelector('.navbar');
let counters = document.querySelectorAll('.number');
let loadingLayer= document.getElementById("loading-layer");
let speed = 200;

let typewritter = new Typewriter( mainHeading ,{
    strings:[ 'CEO Devfolio' , 'web Developer', 'web Designer', 'Front End Developer' , 'Graphic Desinger' ],
    loop:true,
    autoStart:true,
    cursur: "Pipe character",
    typeSpeed:60,
    deleteSpeed:60
});
function editNavBar() {
    if (window.scrollY >= 400) {
        navBar.classList.replace('navbar-dark', 'navbar-primary');
        $(navBar).addClass("white-backgroud navbar-shadow");
    } else {
        navBar.classList.replace('navbar-primary', 'navbar-dark');
        $(navBar).removeClass("white-backgroud navbar-shadow");
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    let scrollY = window.scrollY;
    loadingLayer.style.top= `${scrollY}px`;
    editNavBar();
});
window.addEventListener("load" ,()=>{
    loadingLayer.classList.add("hide");
})
$(window).scroll(function () {
    let scrollY = window.scrollY;
    loadingLayer.style.top= `${scrollY}px`;
    editNavBar();
    if (window.scrollY >= 2000) {
        counters.forEach(counter => {
            let updateCount = () => {
                let target = +counter.getAttribute('data-target');
                let currentCount = +counter.innerHTML;
                let incValue = target / speed;
                if (currentCount < target) {
                    counter.innerHTML = Math.ceil(currentCount + incValue);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerHTML = target;
                }
            }
            updateCount();
        });
    }
});
