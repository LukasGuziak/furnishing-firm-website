const navBtn = document.querySelector('#menu-btn');
const navBar = document.querySelector('.navigation__navbar');

const navMobile = () => {
	navBar.classList.toggle('active');
};

navBtn.addEventListener('click', navMobile);
navBar.addEventListener('click',navMobile)
