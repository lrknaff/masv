'use strict';

import './styles/index.scss';

import $ from 'jquery';
import gsap from 'gsap';
import { TweenMax, Power2, Elastic, Bounce, onRepeat, fromTo, staggerFromTo, staggerToFrom, TimelineMax } from 'gsap';
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
    0.2, {
      y:"+=100",
      opacity: 0,
    },
    {
      y:"-=100",
      opacity: 1,
    }, 0.1
  );
});


//scroll to position

$('.nav-li-about').on('click', function(e) {
  e.preventDefault;
  $('html, body').animate({
        scrollTop: $(".hp-about-copy").offset().top
    });
});

$('.nav-li-portfolio').on('click', function(e) {
  e.preventDefault;
  $('html, body').animate({
        scrollTop: $(".hp-portfolio").offset().top
    });
});

$('.header-logo-small').on('click', function(e) {
  e.preventDefault;
  $('html, body').animate({
        scrollTop: 0
    });
});


//scrollmagic + gsap
$(document).scroll(function() {
  let y = $(this).scrollTop();

  if (y > 25) {
    $('.hp-hero-scroll').fadeOut();
    $('nav').fadeOut();
  } else {
    $('.hp-hero-scroll').fadeIn();
    $('nav').fadeIn();
  }
});

$(function() {
  var scrollMagicController = new ScrollMagic.Controller();

  var aboutTween = new TimelineMax()
      .to([".backgrounds-hphero", ".hp-hero-main", "nav"], 0.5, {
         opacity: 0,
         ease:Power2.easeOut,
      })
      .to('.backgrounds-aboutus', 0.5, {
        opacity: 1,
        ease:Power2.easeIn,
      })
      .to(".header-logo-small", 0.2, {
        fill: 'white',
        ease: Power2.easeIn,
        delay: 0.12
      })
      .staggerFromTo(['.hp-about-copy', '.hp-services'], 1, {
        opacity: 0,
      }, {
        opacity: 1,
        y: -20,
        ease: Power2.easeInOut,
      }, 1);


  var AboutScene = new ScrollMagic.Scene({
    triggerElement: '.hp-about-copy',
    offset: -200,
    duration: 500
  })
  .setTween(aboutTween)
  .addTo(scrollMagicController);

  AboutScene.addIndicators();

  var projectsTween = new TimelineMax()
      .to([".backgrounds-aboutus"], 0.5, {
         opacity: 0,
         ease:Power2.easeOut,
      })
      .to(".header-logo-small", 0.2, {
        fill: 'black',
        ease: Power2.easeIn,
        delay: 0.12
      });

  var ProjectsScene = new ScrollMagic.Scene({
    triggerElement: '.hp-portfolio',
    offset: -250,
    duration: 20
  })
  .setTween(projectsTween)
  .addTo(scrollMagicController);

  ProjectsScene.addIndicators();
});
