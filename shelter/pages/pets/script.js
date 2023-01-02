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
const htmlBurger = document.querySelector('html');

function toggleMenu() {
  htmlBurger.classList.toggle('open');
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



// SLIDER OUR PETS

const sliderPets = [
    { "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    { "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    { "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    { "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    { "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    { "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    },
    { "name": "Scarlett",
      "img": "../../assets/images/pets-scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    { "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },

    
   
    { "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    },
    { "name": "Woody",
    "img": "../../assets/images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
    },
    { "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    { "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    { "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    { "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    { "name": "Scarlett",
      "img": "../../assets/images/pets-scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    { "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },

    { "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    { "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    { "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    { "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    },
    { "name": "Katrine",
    "img": "../../assets/images/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
    },
    { "name": "Scarlett",
    "img": "../../assets/images/pets-scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
    },
    { "name": "Jennifer",
    "img": "../../assets/images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
    },
    { "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
  
   

    { "name": "Jennifer",
    "img": "../../assets/images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
    },
    { "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    { "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    },
    { "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    { "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    { "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    { "name": "Scarlett",
      "img": "../../assets/images/pets-scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    { "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },

    { "name": "Woody",
    "img": "../../assets/images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
    },   
    { "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    { "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    { "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }, 
    { "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    { "name": "Scarlett",
      "img": "../../assets/images/pets-scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    { "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    { "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },

    { "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    { "name": "Woody",
    "img": "../../assets/images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
    },
    { "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    },
    { "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    { "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    { "name": "Scarlett",
      "img": "../../assets/images/pets-scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    { "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    { "name": "Timmy",
    "img": "../../assets/images/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
    },
    
  ]

const slider = document.querySelector('.slider');
let lastIndex = 0;
const sliderPagination = document.querySelector('.slider-buttons');
let buttonLeftEnd;
let buttonLeft;
let buttonCurrentPage;
let buttonRight;
let buttonRightEnd;


function createSlide(z) {
  let sliderItemI = 'sliderItem' + z;
  sliderItemI = document.createElement('div'); // create element
  slider.append(sliderItemI); // add element to slider Item container
  sliderItemI.classList.add('slider-item');
  
  const sliderImg = document.createElement('img');
  sliderItemI.append(sliderImg);
  sliderImg.classList.add('slider-img');
  sliderImg.src = sliderPets[z].img;
  
  const sliderName = document.createElement('p');
  sliderItemI.append(sliderName);
  sliderName.classList.add('slider-name');
  sliderName.textContent = sliderPets[z].name;

  const sliderButton = document.createElement('button');
  sliderItemI.append(sliderButton);
  sliderButton.classList.add('slider-button');
  sliderButton.textContent = 'Learn more';


  lastIndex = z;
  

}

function createSlider(sliderSize, firstPetIndex) {
  for (let i = firstPetIndex; i <= sliderSize + firstPetIndex; i++) {
    createSlide(i);
    
  }
  
}

function createAdaptiveSlider(firstIndex) {
  slider.innerHTML = '';
  if (window.screen.availWidth >= 1280) createSlider(7, firstIndex);
  if (window.screen.availWidth < 1280 && window.screen.availWidth >= 768)  createSlider(5, firstIndex);
  if (window.screen.availWidth < 768) createSlider(2, firstIndex);
}
// let randomStartFirstIndex = Math.floor(Math.random() * 40);
// console.log(randomStartFirstIndex);
createAdaptiveSlider(0);
createButtons();


//pagination buttons

function createButtons() {
buttonLeftEnd = document.createElement('button');
sliderPagination.append(buttonLeftEnd);
buttonLeftEnd.classList.add('slider-button1');
buttonLeftEnd.textContent = '<<';
buttonLeftEnd.disabled = true;

buttonLeft = document.createElement('button');
sliderPagination.append(buttonLeft);
buttonLeft.classList.add('slider-button2');
buttonLeft.textContent = '<';
buttonLeft.disabled = true;

buttonCurrentPage = document.createElement('button');
sliderPagination.append(buttonCurrentPage);
buttonCurrentPage.classList.add('slider-button3');
buttonCurrentPage.textContent = '1';
buttonCurrentPage.disabled;

buttonRight = document.createElement('button');
sliderPagination.append(buttonRight);
buttonRight.classList.add('slider-button4');
buttonRight.textContent = '>';
buttonRight.style.cursor = 'pointer';

buttonRightEnd = document.createElement('button');
sliderPagination.append(buttonRightEnd);
buttonRightEnd.classList.add('slider-button5');
buttonRightEnd.textContent = '>>';
buttonRightEnd.style.cursor = 'pointer';
}




// SLIDER CHANGE
buttonRight.addEventListener('click', (event) => {
  lastIndex = lastIndex + 1;
  createAdaptiveSlider(lastIndex);
  if (lastIndex === 47) {
    buttonRight.style.cursor = 'default';
    buttonRight.classList.remove('slider-button4');
    buttonRight.classList.add('slider-button1');
    buttonRight.disabled = true;
    
    buttonRightEnd.style.cursor = 'default';
    buttonRightEnd.classList.remove('slider-button5');
    buttonRightEnd.classList.add('slider-button1');
    buttonRightEnd.disabled = true;
  };

  if (lastIndex > 0 && lastIndex < 47) {
    buttonLeftEnd.classList.add('slider-button4');
    buttonLeftEnd.classList.remove('slider-button1');
    buttonLeftEnd.style.cursor = 'pointer';
    buttonLeftEnd.disabled = false;

    buttonLeft.classList.add('slider-button4');
    buttonLeft.classList.remove('slider-button2');
    buttonLeft.style.cursor = 'pointer';
    buttonLeft.disabled = false;
  }
  changePageNumber();
  
});

buttonRightEnd.addEventListener('click', (event) => {
  
  if (window.screen.availWidth >= 1280) {
    lastIndex = sliderPets.length - 8;
    buttonCurrentPage.textContent = '6';
  }
  if (window.screen.availWidth < 1280 && window.screen.availWidth >= 768)  {
    lastIndex = sliderPets.length - 6;
    buttonCurrentPage.textContent = '8';
  }
  if (window.screen.availWidth < 768) {
    lastIndex = sliderPets.length - 3;
    buttonCurrentPage.textContent = '16';
  }
  
  createAdaptiveSlider(lastIndex);
    buttonLeftEnd.classList.add('slider-button4');
    buttonLeftEnd.classList.remove('slider-button1');
    buttonLeftEnd.style.cursor = 'pointer';
    buttonLeftEnd.disabled = false;

    buttonLeft.classList.add('slider-button4');
    buttonLeft.classList.remove('slider-button2c');
    buttonLeft.style.cursor = 'pointer';
    buttonLeft.disabled = false;


  if (lastIndex === 47) {
    buttonRight.disabled = true;
    buttonRight.style.cursor = 'default';
    buttonRight.classList.remove('slider-button4');
    buttonRight.classList.add('slider-button1');

    buttonRightEnd.disabled = true;
    buttonRightEnd.style.cursor = 'default';
    buttonRightEnd.classList.remove('slider-button5');
    buttonRightEnd.classList.add('slider-button1');
  };
  popupClickEvent();
});

buttonLeft.addEventListener('click', (event) => {
  
  if (window.screen.availWidth >= 1280) {
    lastIndex = lastIndex - 15;
  }
  if (window.screen.availWidth < 1280 && window.screen.availWidth >= 768)  {
    lastIndex = lastIndex - 11;
  }
  if (window.screen.availWidth < 768) {
    lastIndex = lastIndex - 5;
  }
  
  createAdaptiveSlider(lastIndex);
   if (lastIndex > 0 && lastIndex < 47) {
    buttonLeftEnd.classList.add('slider-button4');
    buttonLeftEnd.classList.remove('slider-button1');
    buttonLeftEnd.style.cursor = 'pointer';
    buttonLeftEnd.disabled = false;

    buttonLeft.classList.add('slider-button4');
    buttonLeft.classList.remove('slider-button2c');
    buttonLeft.style.cursor = 'pointer';
    buttonLeft.disabled = false;

    buttonRight.style.cursor = 'pointer';
    buttonRight.classList.remove('slider-button1');
    buttonRight.classList.add('slider-button4');
    buttonRight.disabled = false;

    buttonRightEnd.style.cursor = 'pointer';
    buttonRightEnd.classList.remove('slider-button1');
    buttonRightEnd.classList.add('slider-button5');
    buttonRightEnd.disabled = false;
  }

  if (lastIndex === 7) {
    buttonLeftEnd.classList.add('slider-button1');
    buttonLeftEnd.classList.remove('slider-button4');
    buttonLeftEnd.style.cursor = 'default';
    buttonLeftEnd.disabled = true;


    buttonLeft.classList.add('slider-button2');
    buttonLeft.classList.remove('slider-button4');
    buttonLeft.style.cursor = 'default';
    buttonLeft.disabled = true;
  };
  
  changePageNumber();
  
});

buttonLeftEnd.addEventListener('click', (event) => {
  buttonCurrentPage.textContent = '1';
  lastIndex = 0;
  createAdaptiveSlider(lastIndex);
    buttonLeftEnd.classList.add('slider-button1');
    buttonLeftEnd.classList.remove('slider-button4');
    buttonLeftEnd.style.cursor = 'default';
    buttonLeftEnd.disabled = true;


    buttonLeft.classList.add('slider-button2');
    buttonLeft.classList.remove('slider-button4');
    buttonLeft.style.cursor = 'default';
    buttonLeft.disabled = true;

    buttonRight.disabled = false;
    buttonRight.style.cursor = 'pointer';
    buttonRight.classList.remove('slider-button1');
    buttonRight.classList.add('slider-button4');

    buttonRightEnd.disabled = false;
    buttonRightEnd.style.cursor = 'pointer';
    buttonRightEnd.classList.remove('slider-button1');
    buttonRightEnd.classList.add('slider-button5');

    popupClickEvent();
});


function changePageNumber() {
  popupClickEvent();
  if (window.screen.availWidth >= 1280) {
    console.log('lastIndex switch ' + lastIndex);
    let unit = lastIndex;
    switch(unit) {
      case 7:
        buttonCurrentPage.textContent = '1';
        break;
      case 15:
        buttonCurrentPage.textContent = '2';
        break;
      case 23:
        buttonCurrentPage.textContent = '3';
        break;
      case 31:
        buttonCurrentPage.textContent = '4';
        break;
      case 39:
        buttonCurrentPage.textContent = '5';
        break;
      default:
        buttonCurrentPage.textContent = '6';
    }
    
  };
  if (window.screen.availWidth < 1280 && window.screen.availWidth >= 768) {
    switch(lastIndex) {
      case 5:
        buttonCurrentPage.textContent = '1';
        break;
      case 11:
        buttonCurrentPage.textContent = '2';
        break;
      case 17:
        buttonCurrentPage.textContent = '3';
        break;
      case 23:
        buttonCurrentPage.textContent = '4';
        break;
      case 29:
        buttonCurrentPage.textContent = '5';
        break;
      case 35:
        buttonCurrentPage.textContent = '6';
        break;
      case 41:
        buttonCurrentPage.textContent = '7';
        break;
      default:
        buttonCurrentPage.textContent = '8';
    }
  }
  if (window.screen.availWidth < 768) {
    switch(lastIndex) {
      case 2:
        buttonCurrentPage.textContent = '1';
        break;
      case 5:
        buttonCurrentPage.textContent = '2';
        break;
      case 8:
        buttonCurrentPage.textContent = '3';
        break;
      case 11:
        buttonCurrentPage.textContent = '4';
        break;
      case 14:
        buttonCurrentPage.textContent = '5';
        break;
      case 17:
        buttonCurrentPage.textContent = '6';
        break;
      case 20:
        buttonCurrentPage.textContent = '7';
        break;
      case 23:
        buttonCurrentPage.textContent = '8';
        break;
      case 26:
        buttonCurrentPage.textContent = '9';
        break;
      case 29:
        buttonCurrentPage.textContent = '10';
        break;
      case 32:
        buttonCurrentPage.textContent = '11';
        break;
      case 35:
        buttonCurrentPage.textContent = '12';
        break;
      case 38:
        buttonCurrentPage.textContent = '13';
        break;
      case 41:
        buttonCurrentPage.textContent = '14';
        break;
      case 44:
        buttonCurrentPage.textContent = '15';
        break;
      default:
        buttonCurrentPage.textContent = '16';
    }
  }
}
 

// POP UP START

const bodyPopup = document.querySelector('.body-popup');
const popupVisible = document.querySelector('.popup');
const popupItems = document.querySelector('.popup-items');
let sliderPetsIndex;

//CREATE
let nameOfPet;
function popupClickEvent() {
  const sliderItem = document.querySelectorAll('.slider-item');
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
  htmlBurger.classList.add('open');
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
  htmlBurger.classList.remove('open');
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









 