// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const html = document.querySelector('html');
document.addEventListener("click", function (e) {

	const targetElement = e.target;
	if (targetElement.closest('.menu__icon')) {
		html.classList.toggle('menu-open');
		html.classList.toggle('lock');
	}
	else if (!targetElement.closest('.menu__body')) {
		html.classList.remove('menu-open');
		html.classList.remove('lock');
	}
});