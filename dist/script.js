//* Mobile Navigation

const nav = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');

const toggleMobileNav = document.querySelector('#toggleMobileNav');
const toggleMobileNavIcon = document.querySelector('#toggleMobileNav i');

const navLink = document.querySelectorAll('nav a');
const navLinkCurrent = document.querySelector('nav a[aria-current="page"]');

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
