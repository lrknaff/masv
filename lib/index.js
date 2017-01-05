import './styles/index.scss';
import jQuery from 'jquery';

import $ from 'jquery';

//practice
console.log($(window).scrollTop());

$('.hp-hero-header-solid').on('click', function() {
  $('.inner').toggleClass('show');
});


$(document).scroll(function() {
  let y = $(this).scrollTop();
  console.log(y);

  if (y > 50) {
    $('header').fadeOut();
  } else {
    $('header').fadeIn();
  }
});

//hp-hero
