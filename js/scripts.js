jQuery(document).ready(function ($) {
$(function () {
	$('.carousel').carousel({
		interval: false
	});

	$('.search').on('click',function () {
		$(".main-menu .navbar-form").slideToggle();
	});

	$('#elastislide').elastislide();
});



  var carouselCaptionWidth = $('#carousel-sidebar .carousel-inner .active img').width();
	$('#carousel-sidebar .carousel-inner img').each(function () {
    $('this').attr('width', carouselCaptionWidth);
	});
	$('#carousel-sidebar .sidebar-carousel-caption').css('max-width', carouselCaptionWidth + 'px');
	$('#carousel-sidebar .carousel-indicators').css('max-width', carouselCaptionWidth + 'px');
	$('.sidebar .banner').css('max-width', carouselCaptionWidth + 'px');
});