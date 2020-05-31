let top_btn = document.getElementById('top');

window.addEventListener('scroll', function() {
	if(pageYOffset > document.documentElement.clientHeight) {
		top_btn.className = 'top active';
	}else{
		top_btn.className = 'top';
	};
});

top_btn.onclick = function(event) {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
};