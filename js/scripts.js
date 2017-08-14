/**
 * Created by Илья on 11.08.2017.
 */
$(function () {
	$('.carousel').carousel({
		interval: false
	});

	$('.search').on('click',function () {
		$(".main-menu .navbar-form").slideToggle();
	});
});