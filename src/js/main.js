const navBtn = document.querySelector('#menu-btn');
const navBar = document.querySelector('.navigation__navbar');

const navMobile = () => {
	navBar.classList.toggle('active');
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

navBtn.addEventListener('click', navMobile);
navBar.addEventListener('click', navMobile);

