import './styles/index.scss';
import jQuery from 'jquery';

import $ from 'jquery';

console.log($(window).scrollTop());

$('nav').on('click', function() {
  $(this).toggleClass('red');
});
