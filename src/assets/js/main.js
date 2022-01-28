

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


    const goToTop = document.querySelector(".goTopPortfolio")
    if (goToTop) {
      goToTop.addEventListener("click", function(event) {
        event.preventDefault()
        
        let blockID  = goToTop.getAttribute('href');
        console.log(blockID);
        document.querySelector(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      })
    } 
    /// Скролл для кнопки goTop на portfolio page
  






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
    'Darya Ladudo\n',
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




























// function onEntry(entry) {
//     entry.forEach(change => {
//         if (change.isIntersecting) {
//             change.target.classList.add('element-show');
//         }
//     });
// }

// let options = {
//     threshold: [0.5]
// };
// let observer = new IntersectionObserver(onEntry, options);
// let elements = document.querySelectorAll('.skills__inner');

// for (let elm of elements) {
//     observer.observe(elm);
// }
