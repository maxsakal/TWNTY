// Sticky menu
let scrollpos = window.scrollY;
let header = document.querySelector(".header");

function scrollAdd() {
    header.classList.add("fade-in");
}

function scrollRemove() {
    header.classList.remove("fade-in");
}

window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;

    if (scrollpos > 250) {
        scrollAdd();
    } else {
        scrollRemove();
    }
});

// Lang switch
const langSwitch = document.querySelectorAll('.lang-switch__link');

langSwitch.forEach(item => {
    item.addEventListener('click', (e) => {
        langSwitch.forEach(el => {
            el.classList.remove('active-lang');
        });
        item.classList.add('active-lang')
    })
})

// Height Safari
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()


// menu toggler
const hamburgerButton = document.querySelector('.header-menu__hamburger');
const hamburgerMenu = document.querySelector('.header__menu');
const hiddenOverflow = document.querySelector('body');

hamburgerButton.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active')
    hamburgerButton.classList.toggle('animate')
    if (hamburgerMenu.classList.contains("active")) {
        hiddenOverflow.classList.add("active-state");
    } else {
        hiddenOverflow.classList.remove("active-state");
    }
});

// Scroll menu anchor
let menuItems = document.querySelectorAll(".header__menu li");

menuItems.forEach(function (elem) {
    elem.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active')
        hamburgerButton.classList.remove('animate')
        hiddenOverflow.classList.remove("active-state");
    });
});







