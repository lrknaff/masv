'use strict';

import './styles/index.scss';
import jQuery from 'jquery';

import $ from 'jquery';
import { TweenMax, Power2, Elastic, Bounce, onRepeat, staggerFromTo, staggerToFrom } from 'gsap';

//loading animation

// //scroll to top on page reload
$(document).ready(function() {
  $('html, body').animate({
        scrollTop: 0
    });
});

//hp-hero animation on load

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
  var windowHeight = window.innerHeight,
      scrollPosition = $(this).scrollTop(),
      aboutPosition = $('.hp-about-copy').offset().top,
      distance = aboutPosition -= scrollPosition;

  function scrollEvent() {
    if (distance <= 275) {
      TweenMax.to(
        [".hp-hero-main", ".backgrounds-hphero", "nav"],
        0.12, {
           opacity: 0,
           ease:Power2.easeOut,
        }
      );
      TweenMax.to(
        ".backgrounds-aboutus",
        0.5, {
           opacity: 1,
           ease:Power2.easeIn,
           delay: 0.7,
        }
      );
      TweenMax.to(
        ".header-logo-small",
        0.5, {
          fill: 'white',
          ease: Power2.easeIn,
          delay: 0.12
        }
      );
    } else if (distance > 275) {
      TweenMax.to(
        ".backgrounds-aboutus",
        0.12, {
           opacity: 0,
           ease:Power2.easeOut,
        }
      );
      TweenMax.to(
        ".header-logo-small",
        0.5, {
          fill: 'black',
          ease: Power2.easeIn,
        }
      );
      TweenMax.to(
        [".hp-hero-main", ".backgrounds-hphero", "nav"],
        0.5, {
           opacity: 1,
           ease:Power2.easeIn,
           delay:0.7
        }
      );
    }
  }

  requestAnimationFrame(scrollEvent);
});


//scroll to position

$('.nav-li-about').on('click', function(e) {
  e.preventDefault;
  $('html, body').animate({
        scrollTop: $(".hp-about-copy").offset().top
    });
});

$('.header-logo-small').on('click', function(e) {
  e.preventDefault;
  $('html, body').animate({
        scrollTop: 0
    });
});
