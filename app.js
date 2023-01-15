const burger = document.querySelector('.navbar-burger');
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.navbar li');

console.log(burger);
console.log(navbar);
console.log(navbarLinks);

burger.addEventListener('click', () => {
    navbar.classList.toggle('navbar-active')

    burger.classList.toggle('toggle')
})

