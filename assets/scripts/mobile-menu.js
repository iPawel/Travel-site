const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.menu');


const handleClick = () => {
    burger.classList.toggle('burger--active');
    mobileMenu.classList.toggle('menu--active');
}

burger.addEventListener('click', handleClick);