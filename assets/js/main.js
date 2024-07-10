/*=============== MENU SHOW Y HIDDEN ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //Quando clicar em cada nav__link, remover a classe show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ACCORDION SKILLS ===============*/


/*=============== QUALIFICATION TABS ===============*/


/*=============== SERVICES MODAL ===============*/

