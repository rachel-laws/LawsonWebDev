//* Mobile Navigation

const nav = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');

const toggleMobileNav = document.querySelector('#toggleMobileNav');
const toggleMobileNavIcon = document.querySelector('#toggleMobileNav i');

const navLink = document.querySelectorAll('nav a');

// Show / Hide Navbar

toggleMobileNav.addEventListener('click', e => {
  if (navLinks.classList.contains('nav-visible')) {
    hideNavbar(navLinks);
  } else {
    showNavbar(navLinks);
  }
});

// Close when clicking outside navbar

document.addEventListener('click', function handleClickOutsideBox(event) {
  if (navLinks.classList.contains('nav-visible')) {
    if (!navLinks.contains(event.target) && !nav.contains(event.target)) {
      hideNavbar(navLinks);
    }
  }
});

// Highlight Active Page

navLink.forEach(link => {
  if (link.href === window.location.href) {
    link.setAttribute('aria-current', 'page');
  }
});

// Helper Functions

const hideNavbar = navLinks => {
  toggleMobileNav.setAttribute('aria-expanded', 'false');
  toggleMobileNavIcon.classList.replace('bi-x-square', 'bi-list');
  navLinks.classList.add('nav-hidden');
  navLinks.classList.remove('nav-visible');
};

const showNavbar = navLinks => {
  toggleMobileNav.setAttribute('aria-expanded', 'true');
  toggleMobileNavIcon.classList.replace('bi-list', 'bi-x-square');
  navLinks.classList.remove('nav-hidden');
  navLinks.classList.add('nav-visible');
};

// Scroll Animations

// function debounce(func, wait = 10, immediate = true) {
//   let timeout;
//   return function () {
//     let context = this,
//       args = arguments;
//     let later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     let callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) {
//       func.apply(context, args);
//     }
//   };
// }

const slideCards = document.querySelectorAll('.timeline__card');

const checkCard = () => {
  const slideIn = (window.innerHeight / 2) * 1.22;
  slideCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < slideIn) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', checkCard);
