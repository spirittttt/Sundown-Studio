const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});



function imageAnime() {
    var bottomContainer = document.querySelector("#bottom-container")
var fixedContainer = document.querySelector("#fixed-container")
bottomContainer.addEventListener("mouseenter",function(){
    fixedContainer.style.display = "block"
})
bottomContainer.addEventListener("mouseleave",function(){
    fixedContainer.style.display = "none"
})
var bottom = document.querySelectorAll(".bottom")
bottom.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var image = elem.getAttribute("data-image")
        fixedContainer.style.backgroundImage = `url(${image})`
    })
})
}

function navAnime() {

var navh1 = document.querySelector("#navh1")
var navh1i = document.querySelector("#i1")
var nah1i2 = document.querySelector("#i2")
var fullSrc = document.querySelector("#full-src")
var flag = 0


navh1.addEventListener("click",function(){
    if (flag == 0) {
        fullSrc.style.top = "0%"
        nah1i2.style.opacity = 1
        navh1i.style.opacity = 0
        flag = 1
    }
    else {
        fullSrc.style.top = "-100%"
        navh1i.style.opacity = 1
        nah1i2.style.opacity = 0
        flag = 0 
    }
})
}

function loader() {
    var loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top = "-100%"
},4000)

}

imageAnime();
navAnime();
loader();


