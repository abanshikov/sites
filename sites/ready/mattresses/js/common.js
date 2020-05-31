$(document).ready(function() {});

// aside
let menu_links = document.querySelectorAll('.l-menu__main__link');
let submenus = document.querySelectorAll('.l-menu__main__submenu');
menu_links.forEach(function(menu_link) {
	menu_link.addEventListener('click', () => {
		event.preventDefault();

		submenus.forEach(function(submenu) {
			if (submenu.classList.contains('active')) {
				submenu.classList.remove('active');
			}
		});
		menu_link.nextElementSibling.classList.add('active');
	});
});

// dropdown
let dropdown_items = document.querySelectorAll('.dropdown-item');
dropdown_items.forEach(dropdown_item => {
	dropdown_item.addEventListener('click', () => {
		event.preventDefault();
		dropdown_item.parentElement.parentElement.firstElementChild.innerHTML = dropdown_item.innerHTML;
	});
});
