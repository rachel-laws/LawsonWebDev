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
  setTimeout(() => {
    navLinks.classList.remove('nav-visible');
    navLinks.classList.remove('nav-hidden');
  }, 200);
};

const showNavbar = navLinks => {
  toggleMobileNav.setAttribute('aria-expanded', 'true');
  toggleMobileNavIcon.classList.replace('bi-list', 'bi-x-square');
  navLinks.classList.add('nav-visible');
};

// Slide-in Cards

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

// Contact form

// AM / PM
const timePickerHour = document.querySelector('#timePickerHour');
const timeOfDay = document.querySelector('#timeOfDay');
timePickerHour.addEventListener('change', e => {
  switch (timePickerHour.value) {
    case '9':
      timeOfDay.textContent = 'AM (EDT)';
      break;
    case '10':
      timeOfDay.textContent = 'AM (EDT)';
      break;
    case '11':
      timeOfDay.textContent = 'AM (EDT)';
      break;
    case '':
      timeOfDay.textContent = '';
      break;
    default:
      timeOfDay.textContent = 'PM (EDT)';
  }
});

// Request consultation checkbox
const requestBtn = document.querySelector('#consult_request');
requestBtn.addEventListener('change', e => {
  if (requestBtn.checked) {
    consultSchedule.style.animation = 'slideDown 200ms ease-out 1';
    setTimeout(() => {
      consultSchedule.style.display = 'block';
      consultSchedule.style.transform = 'translateY(0rem)';
    }, 200);
  } else {
    consultSchedule.style.animation = 'slideUp 200ms ease-out 1';
    setTimeout(() => {
      consultSchedule.style.transform = 'translateY(-2rem)';
      consultSchedule.style.display = 'none';
    }, 200);
  }
});

// Minimum schedule date
const currentDate = new Date().toLocaleDateString('fr-ca');
const dateSelect = document.querySelector('#consult_date');
dateSelect.value = currentDate;
dateSelect.min = currentDate;
