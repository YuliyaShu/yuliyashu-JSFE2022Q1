


// button to Our friends
function buttonToOurFriends() {
    window.location.hash="our-friends";
}


function buttonToOurFriendsPage() {
    window.open('https://rolling-scopes-school.github.io/yuliyashu-JSFE2022Q1/shelter/pages/pets/index.html', '_blank');
    
}

function inAdditionButton() {
    window.open('#', '_blank');
}






//burger-menu

const burger = document.querySelector('.nav-header-burger');
const burgerUl = document.querySelector('ul');
const navBurgerMenu = document.querySelector('.nav-burger-menu');
const navBurgerMenuContainer = document.querySelector('.nav-burger-menu-container');
const navBurgerMenuList = document.querySelector('.nav-burger-menu-list');
const navBurgerMenuLink1 = document.querySelector('.nav-burger-menu-link-1');
const navBurgerMenuLink2 = document.querySelector('.nav-burger-menu-link-2');
const navBurgerMenuLink3 = document.querySelector('.nav-burger-menu-link-3');
const navBurgerMenuLink4 = document.querySelector('.nav-burger-menu-link-4');
const logoBurger = document.querySelector('.logo-burger');
const bodyBurger = document.querySelector('.body-burger');

function toggleMenu() {
  bodyBurger.classList.toggle('overlay');
  logoBurger.classList.toggle('open');
  burgerUl.classList.toggle('open');
  navBurgerMenu.classList.toggle('open');
  navBurgerMenuContainer.classList.toggle('open');
  navBurgerMenuList.classList.toggle('open');
  navBurgerMenuLink1.classList.toggle('open');
  navBurgerMenuLink2.classList.toggle('open');
  navBurgerMenuLink3.classList.toggle('open');
  navBurgerMenuLink4.classList.toggle('open');
  burger.classList.toggle('open');
}

burger.addEventListener('click', toggleMenu);
navBurgerMenuLink1.addEventListener('click', toggleMenu);
navBurgerMenuLink2.addEventListener('click', toggleMenu);
navBurgerMenuLink3.addEventListener('click', toggleMenu);
navBurgerMenuLink4.addEventListener('click', toggleMenu);
bodyBurger.addEventListener('click', toggleMenu);



