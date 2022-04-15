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
const headerMain = document.querySelector('.header-main');
const hrBurger = document.querySelectorAll('.hr-burger');

function toggleMenu() {
  bodyBurger.classList.toggle('overlay');
  headerMain.classList.toggle('header-main-burger');
  for (let i =0; i< hrBurger.length; i++) {
    hrBurger[i].classList.toggle('open');
  };
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



// SLIDER

const sliderPets = [
    {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    }
    
  ]

const slider = document.querySelector('.slider');

function createSlider(x) {
  for (let i = 0; i <= x; i++) {
    let sliderItemI = 'sliderItem' + i;
    sliderItemI = document.createElement('div'); // create element
    slider.append(sliderItemI); // add element to slider Item container
    sliderItemI.classList.add('slider-item');
    sliderItemI.setAttribute('id', `item${i}`);
    
    const sliderImg = document.createElement('img');
    sliderItemI.append(sliderImg);
    sliderImg.classList.add('slider-img');
    sliderImg.src = sliderPets[i].img;
    
    const sliderName = document.createElement('p');
    sliderItemI.append(sliderName);
    sliderName.classList.add('slider-name');
    sliderName.textContent = sliderPets[i].name;
    
    function createSliderButton(x) {
      const sliderButton = document.createElement('button');
      x.append(sliderButton);
      sliderButton.classList.add('slider-button');
      sliderButton.textContent = 'Learn more';
    };
    createSliderButton(sliderItemI);
  }
  
}
function createAdaptiveSlider() {
  if (window.screen.availWidth >= 1280) {
    document.querySelector('.slider').innerHTML = '';
    createSlider(7);
  }
  if (window.screen.availWidth < 1280 && window.screen.availWidth >= 768) {
    document.querySelector('.slider').innerHTML = '';
    createSlider(5);
  }
  if (window.screen.availWidth < 768) {
    document.querySelector('.slider').innerHTML = '';
    createSlider(2);
  }
}

createAdaptiveSlider();



 

// POP UP START
const sliderItem = document.querySelectorAll('.slider-item');
const bodyPopup = document.querySelector('.body-popup');
const popupVisible = document.querySelector('.popup');
const popupItems = document.querySelector('.popup-items');
let sliderPetsIndex;

//CREATE
let nameOfPet;
function popupClickEvent() {
      for (let i = 0; i < sliderItem.length; i++) {
        sliderItem[i].addEventListener('click', (event) =>{
          nameOfPet = event.target.parentElement.children[1].textContent;
          for (let [a, b] of sliderPets.entries()) {
              if (b.name == nameOfPet)  {
                sliderPetsIndex = a;
                break;
              } 
            }
        })
        sliderItem[i].addEventListener('click', popUpCreate );
      } 
}
popupClickEvent();



function popUpCreate() {
  bodyPopup.classList.toggle('overlay-popup');
  popupVisible.classList.toggle('popup-visible');
  popupVisible.children[0].classList.toggle('close');
  popupVisible.children[2].classList.toggle('pop-item');

  const popupImg = document.createElement('img');
  popupItems.append(popupImg);
  popupImg.classList.add('slider-img');
  popupImg.src = sliderPets[sliderPetsIndex].img;

  const popupTextBlock = document.createElement('div');
  popupItems.append(popupTextBlock);
  popupTextBlock.classList.add('popup-text-block');

  const popupName = document.createElement('p');
  popupTextBlock.append(popupName);
  popupName.classList.add('popup-name');
  popupName.innerHTML = sliderPets[sliderPetsIndex].name;

  const popupTypeBreed = document.createElement('p');
  popupTextBlock.append(popupTypeBreed);
  popupTypeBreed.classList.add('popup-type-breed');
  popupTypeBreed.innerHTML = `${sliderPets[sliderPetsIndex].type} - ${sliderPets[sliderPetsIndex].breed}`;
  
  const popupDescription = document.createElement('p');
  popupTextBlock.append(popupDescription);
  popupDescription.classList.add('popup-description');
  popupDescription.innerHTML = sliderPets[sliderPetsIndex].description;

  const popupList = document.createElement('ul');
  popupTextBlock.append(popupList);
  popupList.classList.add('popup-list');


  const popupListLi1 = document.createElement('li');
  popupList.append(popupListLi1);
  popupListLi1.classList.add('popup-list-li');
  popupListLi1.innerHTML = `${'Age:'.bold()} ${sliderPets[sliderPetsIndex].age}`;

  const popupListLi2 = document.createElement('li');
  popupList.append(popupListLi2);
  popupListLi2.classList.add('popup-list-li');
  popupListLi2.innerHTML = `${'Inoculations:'.bold()} ${sliderPets[sliderPetsIndex].inoculations}`;

  const popupListLi3 = document.createElement('li');
  popupList.append(popupListLi3);
  popupListLi3.classList.add('popup-list-li');
  popupListLi3.innerHTML = `${'Diseases:'.bold()} ${sliderPets[sliderPetsIndex].diseases}`;

  const popupListLi4 = document.createElement('li');
  popupList.append(popupListLi4);
  popupListLi4.classList.add('popup-list-li');
  popupListLi4.innerHTML = `${'Parasites:'.bold()} ${sliderPets[sliderPetsIndex].parasites}`;
}



// hover on close, when cursor on body-overlay
const closeHover = document.querySelector('.closeForHover');
const emptyCell1 = document.querySelector('.emptyCell1');
const emptyCell2 = document.querySelector('.emptyCell2');
// OVER
bodyPopup.onmouseover = function() {
   closeHover.classList.toggle('hover');
}
emptyCell1.onmouseover = function() {
  closeHover.classList.toggle('hover');
}
emptyCell2.onmouseover = function() {
  closeHover.classList.toggle('hover');
}
// OUT
bodyPopup.onmouseout = function() {
  closeHover.classList.toggle('hover');
}
emptyCell1.onmouseout = function() {
  closeHover.classList.toggle('hover');
}
emptyCell2.onmouseout = function() {
  closeHover.classList.toggle('hover');
}


// hide popup, when click on body-overlay

function bodyPopupOverlayHide() {
  bodyPopup.classList.toggle('overlay-popup');
  popupVisible.classList.toggle('popup-visible');
  popupVisible.children[0].classList.toggle('close');
  popupVisible.children[2].classList.toggle('pop-item');
  popupVisible.children[0].innerHTML = '';
  popupVisible.children[2].innerHTML = '';
}
bodyPopup.addEventListener('click', bodyPopupOverlayHide);
emptyCell1.addEventListener('click', bodyPopupOverlayHide);
emptyCell2.addEventListener('click', bodyPopupOverlayHide);
closeHover.addEventListener('click', bodyPopupOverlayHide);
// POP UP END




//pagination buttons
const sliderPagination = document.querySelector('.slider-buttons');

const sliderButton1 = document.createElement('button');
sliderPagination.append(sliderButton1);
sliderButton1.classList.add('slider-button1');
sliderButton1.textContent = '<<';
sliderButton1.disabled;

const sliderButton2 = document.createElement('button');
sliderPagination.append(sliderButton2);
sliderButton2.classList.add('slider-button2');
sliderButton2.textContent = '<';
sliderButton2.disabled;

const sliderButton3 = document.createElement('button');
sliderPagination.append(sliderButton3);
sliderButton3.classList.add('slider-button3');
sliderButton3.textContent = '1';
sliderButton3.disabled;

const sliderButton4 = document.createElement('button');
sliderPagination.append(sliderButton4);
sliderButton4.classList.add('slider-button4');
sliderButton4.textContent = '>';
sliderButton4.style.cursor = 'pointer';

const sliderButton5 = document.createElement('button');
sliderPagination.append(sliderButton5);
sliderButton5.classList.add('slider-button5');
sliderButton5.textContent = '>>';
sliderButton5.style.cursor = 'pointer';




 