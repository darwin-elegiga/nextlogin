const bars__menu = document.querySelector(".bars__menu");
const menu__ul = document.querySelector(".menu__ul");

bars__menu.addEventListener("click", () =>{
    menu__ul.classList.toggle("menu__ul-visible");
})

// alert("ojo")

window.addEventListener("scroll", function(){
    const header = document.querySelector(".header");
    const nav = document.querySelector(".nav");
    const logo = document.querySelector(".logo");
    const menu__li = document.querySelector(".menu__li");
    const menu__a = document.querySelector(".nav");
    const bars__menu = document.querySelector(".bars__menu");
    const menu__ul = document.querySelector(".menu__ul");


    header.classList.toggle("header-pp",window.scrollY<750);
    nav.classList.toggle("nav-pp",window.scrollY<750);
    bars__menu.classList.toggle("bars-menu-pp",window.scrollY<750);
    logo.classList.toggle("logo-pp",window.scrollY<750);
    menu__ul.classList.toggle("menu__ul-pp",window.scrollY<750);
    menu__li.classList.toggle("menu__li-pp",window.scrollY<750);
    menu__a.classList.toggle("menu__a-pp",window.scrollY<750);
    


    


})

// window.addEventListener("scroll", ()=>{
//     header.classList.toggle("header-pp",window.scrollY>0);
//     nav.classList.toggle("nav-pp",window.scrollY>0);
//     bars__menu.classList.toggle("bars-menu-pp",window.scrollY>0);
//     logo.classList.toggle("logo-pp",window.scrollY>0);
//     menu__ul.classList.toggle("menu__ul-pp",window.scrollY>0);
//     menu__li.classList.toggle("menu__li-pp",window.scrollY>0);
//     menu__a.classList.toggle("menu__a-pp",window.scrollY>0);
//     menu__principal.classList.toggle("menu__principal-pp",window.scrollY>0);

    
//     header.classList.toggle("header-pp",window.scrollY=0);
//     nav.classList.toggle("nav-pp",window.scrollY=0);
//     bars__menu.classList.toggle("bars-menu-pp",window.scrollY=0);
//     logo.classList.toggle("logo-pp",window.scrollY=0);
//     menu__ul.classList.toggle("menu__ul-pp",window.scrollY=0);
//     menu__li.classList.toggle("menu__li-pp",window.scrollY=0);
//     menu__a.classList.toggle("menu__a-pp",window.scrollY=0);
//     menu__principal.classList.toggle("menu__principal-pp",window.scrollY=0);

    
// })