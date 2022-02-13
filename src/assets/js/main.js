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


// печатная машинка
if(document.querySelector('.home')) {
  const text = [
    // 'Darya Ladudo\n',
    'Web developer from Minsk. Sometimes works as a freelancer.\n',
  ];
  
  let line = 0;
    let count = 0;
    let result = '';
    function typeLine() {
      let interval = setTimeout(
        () => {
          result += text[line][count]
          document.querySelector('span').innerHTML =result +'|';
  
  
        count++;
        if (count >= text[line].length) {
          count = 0;
          line++;
          if (line == text.length) {
            clearTimeout(interval);
            document.querySelector('span').innerHTML =result;
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
}





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




// GALLERY

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
    showMoreText.innerHTML = (showMoreText.className == 'portfolio__link-text btn--show') ? 'Hide projects ' : 'View more';
  

  
    
    
}


