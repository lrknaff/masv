'use strict';

import $ from 'jquery';
import gsap from 'gsap';
import { TweenMax, Power2, Elastic, Bounce, onRepeat, fromTo, staggerFromTo, staggerToFrom, TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
const { Controller, Scene } = ScrollMagic;
import animationGSAP from 'animation.gsap';
import debugIndicators from 'debug.addIndicators';

TweenMax.defaultOverwrite = false;

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
    $('nav').css('opacity', '0');
    $('nav').fadeOut();
  } else {
    $('.hp-hero-scroll').fadeIn();
    $('nav').fadeIn();
  }
});

$(function() {
  var scrollMagicController = new ScrollMagic.Controller();

  var aboutTween = new TimelineMax()
      .to(".backgrounds-hphero", 0.8, {
        opacity: 1,
        ease:Power2.easeInOut,
      })
      .to(".header-logo-small", 0.12, {
        fill: 'white',
        ease: Power2.easeIn,
      })
      .staggerFromTo(['.hp-about-copy', '.hp-services'], 0.2, {
        opacity: 0,
        y: 0,
      }, {
        opacity: 1,
        y: -30,
        ease: Power2.easeInOut,
      });


  var AboutScene = new ScrollMagic.Scene({
    triggerElement: '.hp-about-copy',
    offset: '100vh',
  })
  .setTween(aboutTween)
  .addTo(scrollMagicController);

  AboutScene.addIndicators();

  var projectsTween = new TimelineMax()
      .to(".backgrounds-hphero", 0.8, {
        opacity: 0,
        ease:Power2.easeInOut,
      })
      .to(".header-logo-small", 0.12, {
        fill: 'black',
        ease: Power2.easeIn,
      });

  var ProjectsScene = new ScrollMagic.Scene({
    triggerElement: '.hp-portfolio',
    offset: '100vh',
  })
  .setTween(projectsTween)
  .addTo(scrollMagicController);

  ProjectsScene.addIndicators();


  var contactTween = new TimelineMax()
      .to(".backgrounds-hphero", 0.8, {
        opacity: 1,
        ease:Power2.easeInOut,
      })
      .to(".header-logo-small", 0.2, {
        fill: 'white',
        ease: Power2.easeIn,
      });

  var contactScene = new ScrollMagic.Scene({
    triggerElement: '.hp-contact-container',
    offset: '100vh',
  })
  .setTween(contactTween)
  .addTo(scrollMagicController);

  contactScene.addIndicators();
});
