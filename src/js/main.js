const navBtn = document.querySelector('#menu-btn');
const navBar = document.querySelector('.navigation__navbar');
const footerYear = document.querySelector('.footer__year');

const navMobile = () => {
	navBar.classList.toggle('active');
};

const hendleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};



// !-- Initialize Swiper
var swiper = new Swiper('.mySwiper', {
	loop: true,
	grabCursor: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


hendleCurrentYear();
navBtn.addEventListener('click', navMobile);
navBar.addEventListener('click', navMobile);

