import './styles/index.scss';
import jQuery from 'jquery';

import $ from 'jquery';
import { TweenMax, Power2 } from 'gsap';

//practice
console.log($(window).scrollTop());

$('.hp-hero-header-solid').on('click', function() {
  $('.inner').toggleClass('show');
});


// $(document).scroll(function() {
//   let y = $(this).scrollTop();
//   console.log(y);
//
//   if (y > 50) {
//     $('header').fadeOut();
//   } else {
//     $('header').fadeIn();
//   }
// });

//hp-hero
// let tm = new tweenMax();
console.log($('.show').length)

TweenMax.to(
  ".gsap-animate-fade-down",
  0.5, {
     opacity: 1,
     y:50,
     ease:Power2.easeIn,
     delay: 0.5
  }
);

TweenMax.to(
  "header",
  0.5, {
     opacity: 1,
     y:50,
     ease:Power2.easeIn,
     delay: 1
  }
);

TweenMax.to(
  ".inner",
  0.7, {
     opacity: 1,
     width: '100%',
     ease:Power2.easeIn,
     delay: 0.3
  }
);
