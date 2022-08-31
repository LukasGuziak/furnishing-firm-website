const navBtn = document.querySelector('#menu-btn');
const navBar = document.querySelector('.navigation__navbar');

console.log(navBar);
console.log(navBtn);

const navMobile = () => {
	navBar.classList.toggle('active');
};

navBtn.addEventListener('click', navMobile);
navBar.addEventListener('click',navMobile)
