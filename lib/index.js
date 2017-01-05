import './styles/index.scss';
import jQuery from 'jquery';

import $ from 'jquery';

console.log($(window).scrollTop());

$('.hp-hero-header-solid').on('click', function() {
  $('.solid-inner').toggleClass('show');
});
