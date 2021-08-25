$(document).ready(function () {
	$(".courses-wrapper").slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
	$(".carouse-wrapper").slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
});
