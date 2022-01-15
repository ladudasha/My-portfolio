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


