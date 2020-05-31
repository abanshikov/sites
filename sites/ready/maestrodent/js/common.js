$(document).ready(function() {
	// img svg to svg
	$('img.img-svg').each(function() {
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		$.get(
			imgURL,
			function(data) {
				var $svg = $(data).find('svg');
				if (typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass + ' replaced-svg');
				}
				$svg = $svg.removeAttr('xmlns:a');
				if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
				}
				$img.replaceWith($svg);
			},
			'xml'
		);
	});

	// fancybox
	$('.modalbox').fancybox();
	$('#f_contact').submit(function() {
		return false;
	});
	$('#f_send').on('click', function() {
		$('#f_contact').fadeOut('fast', function() {
			$(this).before('<p><strong>Ваше сообщение отправлено!</strong></p>');
			setTimeout('$.fancybox.close()', 1000);
		});
	});

	// slider s1
	$('.s1-slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: true,
		infinite: true,
	});

	// sliders s6
	$('.s6_slider_left').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		dots: false,
		infinite: true,
	});
	$('.s6_slider_right').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		dots: false,
		infinite: true,
	});

	// slider s8
	$('.s8_slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1260,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});
	$('.s8_arrow-left').on('click', function() {
		event.preventDefault();
		$('.s8_slider').slick('slickPrev');
	});
	$('.s8_arrow-right').on('click', function() {
		event.preventDefault();
		$('.s8_slider').slick('slickNext');
	});

	// slider s9
	$('.s9_arrow-left').on('click', function() {
		event.preventDefault();
		$('.s9_slider').slick('slickPrev');
	});
	$('.s9_arrow-right').on('click', function() {
		event.preventDefault();
		$('.s9_slider').slick('slickNext');
	});

	// handler
	var addListeners = function(slider) {
		var $buttons = $('.toggle-slick');

		$buttons.on('click', function() {
			var slide = $(this).attr('data-slide');

			slider.slick('slickGoTo', slide);
		});
	};

	var addGoHash = function(slider) {
		var slide = window.location.hash.replace('#', '');

		if (slide) {
			setTimeout(function() {
				slider.slick('slickGoTo', slide, true);
			});
		}
	};

	// selection slide
	$('.s9_slider').on('afterChange', function(event, slick, currentSlide) {
		const navLinks = document.querySelectorAll('.toggle-slick');
		for (let i = 0; i < navLinks.length; i++) {
			if (i == currentSlide) {
				navLinks[i].classList.add('active');
			} else {
				navLinks[i].classList.remove('active');
			}
		}
	});

	// Initialize slider
	var init = function() {
		var $slickContainer = $('.s9_slider');

		// Init event handler
		$slickContainer.on('init', function(event, slick, currentSlide, nextSlide) {
			var $slider = $(this);

			addListeners($slider);
			addGoHash($slider);
		});

		// Initialize slider
		$('.s9_slider').slick({
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: false,
			dots: false,
			infinite: true,
			responsive: [
				{
					breakpoint: 961,
					settings: {
						dots: true,
					},
				},
			],
		});
	};

	init();
});

// input modal
let inputs = document.querySelectorAll('.input-info');
inputs.forEach(function(input) {
	input.onfocus = function() {
		this.previousElementSibling.firstElementChild.style.backgroundColor = '#0F91FC';
		this.parentElement.style.zIndex = 1;
	};

	input.onblur = function() {
		this.previousElementSibling.firstElementChild.style.backgroundColor = '#e6e6e6';
		this.parentElement.style.zIndex = 0;
	};
});

let inputs_reception = document.querySelectorAll('.input-info_reception');
inputs_reception.forEach(function(input) {
	input.onfocus = function() {
		this.previousElementSibling.firstElementChild.style.backgroundColor = '#0F91FC';
		this.parentElement.style.zIndex = 1;
	};

	input.onblur = function() {
		this.previousElementSibling.firstElementChild.style.backgroundColor = 'rgba(255,255,255,0.26)';
		this.parentElement.style.zIndex = 0;
	};
});

// button modal
function toggleBilling() {
	billingItem = document.querySelector('#sendInfo');
	billingItem.disabled = !billingItem.disabled;
}

// nav menu
const navSlide = () => {
	const navLinks = document.querySelectorAll('.topmenu-link');
	const topMenu = document.querySelector('.topmenu');
	const body = document.querySelector('body');

	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			event.preventDefault();
			if (link.classList.contains('topmenu-active')) {
				link.lastElementChild.style.animation = 'navLinkOut 1s ease forwards 0s';
			} else {
				for (var i = 0; i < topMenu.children.length; i++) {
					if (topMenu.children[i].classList.contains('topmenu-active')) {
						topMenu.children[i].lastElementChild.style.animation = `navLinkOut 1s ease forwards 0s`;
						topMenu.children[i].classList.remove('topmenu-active');
						topMenu.children[i].classList.add('topmenu-notactive');
					}
				}

				link.lastElementChild.style.animation = `navLinkFade 1s ease forwards 0s`;
			}

			link.classList.toggle('topmenu-active');
			link.classList.toggle('topmenu-notactive');

			replaceImg();
		});
	});

	if (document.body.scrollHeight > document.body.clientHeight) {
		body.classList.toggle('noscroll');
	}
};

// replace image
function replaceImg() {
	const topMenu = document.querySelector('.topmenu');
	let isActive = false;

	for (let i = 0; i < topMenu.children.length; i++) {
		if (topMenu.children[i].classList.contains('topmenu-active')) {
			isActive = true;
		}
	}

	if (!isActive) {
		for (let i = 0; i < topMenu.children.length; i++) {
			let navImg = topMenu.children[i].firstElementChild.firstElementChild.src;

			if (navImg.match(/nav\/white\//i) != null) {
				topMenu.children[i].firstElementChild.firstElementChild.src = navImg.replace(/nav\/white\//i, 'nav/');
			}

			if (navImg.match(/nav\/blue\//i) != null) {
				topMenu.children[i].firstElementChild.firstElementChild.src = navImg.replace(/nav\/blue\//i, 'nav/');
			}
		}
	} else {
		for (let i = 0; i < topMenu.children.length; i++) {
			let navImg = topMenu.children[i].firstElementChild.firstElementChild.src;
			if (topMenu.children[i].classList.contains('topmenu-active')) {
				if (navImg.match(/nav\/blue\//i) != null) {
					topMenu.children[i].firstElementChild.firstElementChild.src = navImg.replace(/nav\/blue\//i, 'nav/');
					navImg = topMenu.children[i].firstElementChild.firstElementChild.src;
				}
				if (navImg.match(/nav\/white\//i) == null) {
					topMenu.children[i].firstElementChild.firstElementChild.src = navImg.replace(/nav\//i, 'nav/white/');
					navImg = topMenu.children[i].firstElementChild.firstElementChild.src;
				}
			}
			if (topMenu.children[i].classList.contains('topmenu-notactive')) {
				if (navImg.match(/nav\/white\//i) != null) {
					topMenu.children[i].firstElementChild.firstElementChild.src = navImg.replace(/nav\/white\//i, 'nav/');
					navImg = topMenu.children[i].firstElementChild.firstElementChild.src;
				}
				if (navImg.match(/nav\/blue\//i) == null) {
					topMenu.children[i].firstElementChild.firstElementChild.src = navImg.replace(/nav\//i, 'nav/blue/');
					navImg = topMenu.children[i].firstElementChild.firstElementChild.src;
				}
			}
		}
	}
}

// expand list
const expandList = () => {
	const btns = document.querySelectorAll('.btn_s4');
	const items = document.querySelectorAll('.hide_s4');
	const arrow = document.querySelector('.img_svg_s4');

	btns.forEach(btn => {
		btn.addEventListener('click', () => {
			items.forEach(item => {
				event.preventDefault();
				item.classList.toggle('hide');
			});
		});
	});
};

// button up
let top_btn = document.getElementById('top');
window.addEventListener('scroll', function() {
	if (pageYOffset > document.documentElement.clientHeight) {
		top_btn.className = 'top active';
	} else {
		top_btn.className = 'top';
	}
});

top_btn.onclick = function(event) {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};

navSlide();
expandList();
