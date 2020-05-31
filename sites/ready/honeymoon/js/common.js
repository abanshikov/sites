console.log('StartJS');

// переменные - кнопка, меню, координаты кнопки, координаты span, ширина окна
let menu_btn = document.getElementsByClassName('menu-block__btn');
let menu_nav = document.getElementsByClassName('menu-block__nav');


// нажатие на кнопку
menu_btn[0].onclick = function(event) {
	// отмена действий по умолчанию
	event.preventDefault();

	// отступ от крестика
	let coords = menu_btn[0].getBoundingClientRect();
	let coords_span = menu_btn[0].children[0].getBoundingClientRect();
	let winWidth = document.documentElement.clientWidth;
	// menu_nav[0].style.paddingTop = 2 * coords.bottom - coords.height +  'px';
	menu_nav[0].style.paddingRight = winWidth - coords_span.right +  'px';

	// изменение классов
	this.classList.toggle('menu-block__btn__active');
	menu_nav[0].classList.toggle('menu-block__nav__active');

	// фиксирование кнопки, в зависимости от её класса
	if (this.classList.contains('menu-block__btn__active')) {
		this.style.top = coords.top + 'px';
		this.style.position = 'fixed';
	} else{
		menu_nav[0].style.paddingTop = '';
		menu_nav[0].style.paddingRight = '';
		this.style.top = '';
		this.style.position = '';
	};

};

// скрытие меню по нажатию
menu_nav[0].onclick = function(event) {
	menu_btn[0].classList.remove('menu-block__btn__active');
	menu_nav[0].classList.remove('menu-block__nav__active');
};

let top_btn = document.getElementById('top');

window.addEventListener('scroll', function() {
	/*
	https://learn.javascript.ru/onscroll#zagruzka-vidimyh-izobrazheniy
	https://learn.javascript.ru/size-and-scroll-window
	*/
	if(pageYOffset > document.documentElement.clientHeight) {
		top_btn.className = 'top active';
	}else{
		top_btn.className = 'top';
	};
});

top_btn.onclick = function(event) {
	// https://developer.mozilla.org/ru/docs/Web/API/Window/scrollTo
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
};

// jQuery
$(document).ready(function(){
	console.log('jQ');
	$('.testimonial__carousel').slick({
		infinite: true, 		// зацикливание
		slidesToShow: 1,		// колличество показываемых слайдов
		slidesToScroll: 1,		// колличество прокручиваемых слайдов
		arrows: true,			// навигационные кнопки
	});
});