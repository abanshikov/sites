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