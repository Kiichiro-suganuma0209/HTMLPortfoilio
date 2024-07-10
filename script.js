console.log("Script loaded!");

ScrollReveal({ reset: false, distance: "60px", duration: 2000, delay: 200 });
ScrollReveal().reveal('.text', { delay: 500, origin: "left"});
ScrollReveal().reveal('.header-list', { delay: 600, origin: "bottom"});

ScrollReveal().reveal('.vision_image', { delay: 600, origin: "bottom"});
ScrollReveal().reveal('.text_vision', { delay: 200, origin: "bottom"});
// ScrollReveal().reveal('.text_vision2', { delay: 600, origin: "left"});
ScrollReveal().reveal('.pic1', { delay: 600, origin: "left"});
ScrollReveal().reveal('.pic2', { delay: 3000, origin: "left"});
ScrollReveal().reveal('.image-grid', { delay: 600, origin: "bottom"});
ScrollReveal().reveal('.text-about', { delay: 600, origin: "left"});
ScrollReveal().reveal('.pic2', { delay: 600, origin: "left"});

const burger = document.querySelector(".burger");
const headerListItems = document.querySelectorAll(".header-list li");

burger.addEventListener("click", () => {
    headerListItems.forEach(item => {
        item.classList.toggle("nav-active");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            const target = document.querySelector(link.hash),
                  offsetTop = window.pageYOffset + target.getBoundingClientRect().top;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });
 
});
