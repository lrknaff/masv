'use strict';

import './styles/index.scss';

import $ from 'jquery';
import gsap from 'gsap';
import { TweenMax, Power2, Elastic, Bounce, onRepeat, fromTo, staggerFromTo, staggerToFrom } from 'gsap';
import ScrollMagic from 'scrollmagic';
const { Controller, Scene } = ScrollMagic;
import animationGSAP from 'animation.gsap';
import debugIndicators from 'debug.addIndicators';

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
        [".backgrounds-hphero", ".hp-hero-main", "nav"],
        0.12, {
           opacity: 0,
           ease:Power2.easeOut,
        }
      );
      TweenMax.to(
        ".backgrounds-aboutus",
        0.2, {
           opacity: 1,
           ease:Power2.easeIn,
           delay: 0.7,
        }
      );
      TweenMax.to(
        ".header-logo-small",
        0.2, {
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
        0.2, {
          fill: 'black',
          ease: Power2.easeIn,
        }
      );
      TweenMax.to(
        [".backgrounds-hphero", ".hp-hero-main", "nav"],
        0.2, {
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


//scrollmagic

$(function() {
  var scrollMagicController = new ScrollMagic.Controller();

  var tween = TweenMax.to(".hp-about-copy", 0.5, {
    backgroundColor: 'red',
    scale: 2,
    rotation: 360
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: '.hp-about-copy',
    offset: -200
  })
  .setTween(tween)
  .addTo(scrollMagicController);

  // scene.addIndicators();
});
