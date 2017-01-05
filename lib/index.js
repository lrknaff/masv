'use strict';

import './styles/index.scss';
import jQuery from 'jquery';

import $ from 'jquery';
import { TweenMax, Power2, Elastic, Bounce, onRepeat, staggerFromTo, staggerToFrom } from 'gsap';

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


//event listener for scroll

window.addEventListener('scroll', function(e) {
  var windowHeight = window.innerHeight;
  var scrollPosition = $(this).scrollTop();
  var aboutPosition = $('.hp-about-copy').offset().top;
  var distance = aboutPosition -= scrollPosition;

  console.log(distance)

  function scrollEvent() {
    if (distance <= 300) {
      TweenMax.to(
        ".backgrounds-aboutus",
        0.5, {
           opacity: 1,
           ease:Power2.easeIn,
           delay: 0.12
        }
      );
    } else if (distance > 300) {
      TweenMax.to(
        ".backgrounds-aboutus",
        0.5, {
           opacity: 0,
           ease:Power2.easeOut,
           delay: 0.12
        }
      );
    }
  }

  requestAnimationFrame(scrollEvent);

});


//hp-hero animation

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
