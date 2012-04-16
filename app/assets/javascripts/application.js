// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//= require jquery
// = require jquery_ujs
//= require_tree .

// 



$(document).ready(function() {
	
	$("a#swap-about").fancybox({
			'transitionIn'	:	'fade',
			'transitionOut'	:	'fade',
			'padding' : '40',
			'autoDimensions' : true,
			'width' : '800',
			'height' : '600',
			'scrolling' : 'auto',
			'speedIn'		:	300, 
			'speedOut'		:	300, 
			'overlayShow'	:	true,
			'hideOnContentClick': false,
			'showCloseButton':true		
		});
		
	$("a#swap-contact").fancybox({
		'transitionIn'	:	'fade',
		'transitionOut'	:	'fade',
		'padding' : '40',
		'autoDimensions' : false,
		'width' : '380',
		'height' : '370',
		'scrolling' : 'no',
		'speedIn'		:	300, 
		'speedOut'		:	300, 
		'overlayShow'	:	true,
		'hideOnContentClick': false,
		'showCloseButton':true		
	});
	
	
	$("a#terms_and_conditions").fancybox({
		'transitionIn'	:	'fade',
		'padding' : '15',
		'transitionOut'	:	'fade',
		'autoDimensions' : false,
		'width' : '800',
		'height' : '600',
		'scrolling' : 'auto',
		'speedIn'		:	300, 
		'speedOut'		:	300, 
		'overlayShow'	:	true,
		'hideOnContentClick': false,
		'showCloseButton':true		
	});
	
	$("a#privacy").fancybox({
		'transitionIn'	:	'fade',
		'transitionOut'	:	'fade',
		'padding' : '15',
		'autoDimensions' : false,
		'width' : '800',
		'height' : '600',
		'scrolling' : 'auto',
		'speedIn'		:	300, 
		'speedOut'		:	300, 
		'overlayShow'	:	true,
		'hideOnContentClick': false,
		'showCloseButton':true		
	});
	
});




