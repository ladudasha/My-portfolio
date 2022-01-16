var swiper = new Swiper(".slider-my", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  });



  let anchors = document.querySelectorAll("a[href*='#']")

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



  let goTop = document.querySelector('.footer__scroll-go-top')

  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      goTop.style.opacity = 1
    } else {
      goTop.style.opacity = 0
    }
  })


  let shadowHeader  = document.querySelector('.header')

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      shadowHeader.style.boxShadow = '0 0px 5px rgba(0,0,0,0.25), 0 7px 17px rgba(0,0,0,0.10)'
    } else {
      shadowHeader.style.boxShadow = 0
    }
  })




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


