const bars__menu = document.querySelector(".bars__menu");
const menu__ul = document.querySelector(".menu__ul");

bars__menu.addEventListener("click", () =>{
    menu__ul.classList.toggle("menu__ul-visible");
})


window.addEventListener("scroll", function(){
    const bars_menu_pp = document.querySelector(".bars-menu-pp");
    const menu__a_pp = document.querySelector(".menu__a-pp");
    const header_pp = document.querySelector(".header-pp");
    const menu__ul_pp = document.querySelector(".menu__ul-pp");
    const div__logo_pp = document.querySelector(".div__logo-pp");
    const logo_pp = document.querySelector(".logo-pp");
    const menu__li_pp = document.querySelector(".menu__li-pp");

    header_pp.classList.toggle("header",window.scrollY<750);
    menu__a_pp.classList.toggle("header",window.scrollY<750);
    menu__ul_pp.classList.toggle("header",window.scrollY<750);
    div__logo_pp.classList.toggle("header",window.scrollY<750);
    div__logo_pp.classList.toggle("header",window.scrollY<750);
    div__logo_pp.classList.toggle("header",window.scrollY<750);
    


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