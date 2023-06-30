//* Mobile Navigation

// const nav = document.querySelector('#nav');
// const navLinks = document.querySelector('nav a');
// const toggleMobileNav = document.querySelector('#toggleMobileNav');
// const toggleMobileNavIcon = document.querySelector('#toggleMobileNav i');
// const navLinkNotCurrent = document.querySelector(
//   'a:not([aria-current="page"])'
// );

// // Show / Hide Navbar

// mobileNavBtn.addEventListener('click', e => {
//   if (nav.classList.contains('visible')) {
//     hideNavbar(nav);
//   } else {
//     showNavbar(nav);
//   }
// });

// // Close when clicking outside navbar

// document.addEventListener('click', function handleClickOutsideBox(event) {
//   if (nav.classList.contains('visible')) {
//     if (!nav.contains(event.target) && !navbar.contains(event.target)) {
//       hideNavbar(nav);
//     }
//   }
// });

// // Helper Functions

// const hideNavbar = nav => {
//   mobileNavBtn.setAttribute('aria-expanded', 'false');
//   mobileNavBtnIcon.classList.replace('bi-x-lg', 'bi-list');
//   nav.classList.add('hidden');
//   setTimeout(() => {
//     nav.classList.remove('visible');
//     nav.classList.remove('hidden');
//   }, 150);
// };

// const showNavbar = nav => {
//   mobileNavBtn.setAttribute('aria-expanded', 'true');
//   mobileNavBtnIcon.classList.replace('bi-list', 'bi-x-lg');
//   nav.classList.add('visible');
// };
