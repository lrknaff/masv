import './styles/index.scss';
import jQuery from 'jquery';

import $ from 'jquery';
import { TweenMax, Power2, Elastic, Bounce, onRepeat, staggerFromTo, staggerToFrom } from 'gsap';

//practice
console.log($(window).scrollTop());

$('.hp-hero-header-solid').on('click', function() {
  $('.inner').toggleClass('show');
});




// logo hover effect

$('.header-logo-small').hover(function() {
  $(this).toggleClass('hover');

  TweenMax.staggerFromTo(
    ".hover path",
    0.7, {
      y:"+=100",
      opacity: 0,
    },
    {
      y:"-=100",
      opacity: 1,
    }, 0.2
  );
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

TweenMax.to(
  ".scroll-line",
  0.5, {
     y: 10,
     yoyo: true,
     repeat: 5,
     onRepeat: onRepeat,
     ease:Bounce,
     delay: 2,
  }
);
