// preloader

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}



var swiper = new Swiper(".slider-my", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
});



// плавный скролл
const homePageScroll = document.querySelector(".home");

if( homePageScroll ) {
  let anchors = document.querySelectorAll("a[href*='#']")
  console.log(anchors);
  // остановим привычное поведение якорных ссылок 
  for(let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
      event.preventDefault()
      
      let blockID  = anchor.getAttribute('href');
      document.querySelector(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  }
}


// кнопка go top

let goTop = document.querySelector('.footer__scroll-go-top')

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    goTop.style.opacity = 1
  } else {
    goTop.style.opacity = 0
  }
})


// тень в меню при скролле

let shadowHeader  = document.querySelector('.header')

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    shadowHeader.style.boxShadow = '0 0px 5px rgba(0,0,0,0.25), 0 7px 17px rgba(0,0,0,0.10)'
  } else {
    shadowHeader.style.boxShadow = '0 0 0 rgba(0,0,0,0), 0 0 0 rgba(0,0,0,0)'
  }
})







// burger-close

// function burgerMenu() {
//   let burger = document.getElementById("burger");
//   burger.addEventListener("click", function ()  {
//     burger.classList.toggle("header__burger-active")
//   })
// }
// burgerMenu()




// burger-menu

let burgerMenu = document.getElementById("burger__menu");

function toggleBurgerMenu() {
let burgerIcon = document.querySelector(".burger__icon");
let burgerClose = document.getElementById("burger__close");

burgerIcon.addEventListener("click", toggleMenu)
burgerClose.addEventListener("click", toggleMenu)
}

function toggleMenu() {
burgerMenu.classList.toggle("burger__menu-active")
}

toggleBurgerMenu()




// // GALLERY

const gallery = document.querySelectorAll(".portfolio--hide");
const showMore = document.querySelector(".portfolio__link-more");
const showMoreText = document.querySelector(".portfolio__link-text");

showMore.addEventListener('click', () => {
    galleryHide()
    showMoreBtn()
    
})

function galleryHide() {
    gallery.forEach((photo) => {
        photo.classList.toggle('portfolio--hide');
    })
}
function showMoreBtn() {
  if (showMoreText.classList.contains('btn--show')) {
    showMore.setAttribute('href', '#skills')
    setTimeout(() => {
      showMore.removeAttribute('href')
    },1000)
  } 

    showMoreText.classList.toggle('btn--show');
    if(showMoreText.classList.contains('btn--show')) {
      showMoreText.innerHTML = hash === 'en'? 
      'Hide projects': 
      'Скрыть проекты'
    } 
    else {
      showMoreText.innerHTML =  hash === 'en' ?
      'View more':
      'Показать больше'
    }
  }




// мультиязычность
const select = document.querySelector('select');
const allLang = ['en', 'ru'];

select.addEventListener('change', changeURLLaguage);
// перенаправить на url с указанием языка
function changeURLLaguage(){
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}
let hash = '#en';
function changeLanguage() {
  hash = window.location.hash;
  hash = hash.substr(1);

  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();

  }
  select.value = hash;

  document.querySelector('title').innerHTML = langArr['title-site'][hash];

  for (let key in langArr) {
    let elem = document.querySelector('.lng-' + key);
    // let elem = document.querySelector(`.${key}--lng`);
    if (elem) {
        elem.innerHTML = langArr[key][hash];
    }

}
  
}
changeLanguage();




// печатная машинка

  const text = [
    // 'Web developer from Minsk.\n',
    langArr["h1"][hash]
  ];
  
  let line = 0;
    let count = 0;
    let result = '';
    function typeLine() {
      let interval = setTimeout(
        () => {
          result += text[line][count]
          document.querySelector('h1').innerHTML =result +'|';
  
  
        count++;
        if (count >= text[line].length) {
          count = 0;
          line++;
          if (line == text.length) {
            clearTimeout(interval);
            document.querySelector('h1').innerHTML =result;
            return true;
          }
        }
        typeLine();
      }, getRandomInt(getRandomInt(250*2.5)))
    }
    typeLine();
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

