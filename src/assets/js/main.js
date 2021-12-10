// var $div = $('skills'), //Блок, доскроллив до которого анимация должна стартовать.
//     inited = false;

// $(window).scroll(function() {
//     if (inited) return;

//     var $t = $(this),
//         s_top = $t.scrollTop();

//     if (s_top + $t.height() + 50 < $div.offset().top)
//         return;

//     /*
//      * Тут твой код.
//      * Еще можно весь твой код затолкать в функцию, а здесь её просто вызвать.
//      * Разницы нет.
//      */

//     inited = true
// });


function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.skills__inner');

for (let elm of elements) {
    observer.observe(elm);
}