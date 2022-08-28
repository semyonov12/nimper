window.onload = function () {

	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});

	let isMobile = {
		Android: function () { return navigator.userAgent.match(/Android/i); },
		BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
		iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
		Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
		Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
		any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
	};
	let bodyq = document.querySelector('body');
	if (isMobile.any()) {
		bodyq.classList.add('touch');
		let arrow = document.querySelectorAll('.menu__down');
		let footerArrow = document.querySelectorAll('.menu-footer__down');
		for (i = 0; i < arrow.length; i++) {
			let subMenu = arrow[i].nextElementSibling;
			let thisArrow = arrow[i];

			arrow[i].addEventListener('click', function () {
				subMenu.classList.toggle('open');
				thisArrow.classList.toggle('active');
			});
		};

		for (i = 0; i < footerArrow.length; i++) {
			let subMenu = footerArrow[i].nextElementSibling;
			let thisArrow = footerArrow[i];

			footerArrow[i].addEventListener('click', function () {
				subMenu.classList.toggle('open');
				thisArrow.classList.toggle('active');
			});
		}
	} else {
		bodyq.classList.add('mouse');
	}

	let burger = document.querySelector(".menu__burger");
	let menu = document.querySelector(".menu");
	let body = document.querySelector("body");
	let header = document.querySelector(".header");

	burger.addEventListener("click", function(){
		burger.classList.toggle("active");
		menu.classList.toggle("active");
		body.classList.toggle("lock");
		header.classList.toggle("bef");
	});
};
