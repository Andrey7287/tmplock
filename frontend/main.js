'use strict';

/* Make jQuery available in global */
console.log(`jQuery ${$.fn.jquery} is loaded`);
window.$ = $;
window.jQuery = jQuery;


/* Import project styles and components */
import '../sass/css.scss';
require('script-loader!slick-carousel');
require('fancybox')($);

$('.slider').slick({
	arrows: false,
	dots: true,
	appendDots: $('.slider-dots')
});

$('.fancybox').fancybox();
