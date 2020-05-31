const progress = document.querySelector('.progress');
let top_btn = document.getElementById('top');

window.addEventListener('scroll', function() {
	if(pageYOffset > document.documentElement.clientHeight) {
		top_btn.className = 'top active';
	}else{
		top_btn.className = 'top';
	};

	progressBarr();
});

top_btn.onclick = function(event) {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
};

function progressBarr(event) {
	let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let windowHight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let percent = (windowScroll / windowHight) * 100;

	progress.style.width = percent + '%';
}


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
	menu_nav[0].style.paddingTop = 2 * coords.bottom - coords.height +  'px';
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