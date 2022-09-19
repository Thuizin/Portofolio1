//================== TYPING ANIMATION ==================\\
var typed = new Typed(".typing", {
    strings:["Web Designer", "Web Developer", "Graphic Designer", "Youtuber"],
    typeSpeed:80,
    BackSpeed:60,
    loop:true
}) 

//================== SCROLL ANIMATION ==================\\
window.sr = ScrollReveal({reset: true});
ScrollReveal().reveal('.scroll-animate', {duration: 1000});