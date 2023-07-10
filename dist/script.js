//* Mobile Navigation

const nav = document.querySelector('nav');
const navLink = document.querySelectorAll('nav a');
const navLinks = document.querySelector('nav ul');

const toggleMobileNav = document.querySelector('#toggleMobileNav');
const toggleMobileNavIcon = document.querySelector('#toggleMobileNav i');

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

// Helper Functions

const hideNavbar = navLinks => {
  toggleMobileNav.setAttribute('aria-expanded', 'false');
  toggleMobileNavIcon.classList.replace('bi-x', 'bi-list');
  navLinks.classList.add('nav-hidden');
  setTimeout(() => {
    navLinks.classList.remove('nav-visible');
    navLinks.classList.remove('nav-hidden');
  }, 200);
};

const showNavbar = navLinks => {
  toggleMobileNav.setAttribute('aria-expanded', 'true');
  toggleMobileNavIcon.classList.replace('bi-list', 'bi-x');
  navLinks.classList.add('nav-visible');
};

// Highlight Active Page

navLink.forEach(link => {
  if (link.href === window.location.href) {
    link.setAttribute('aria-current', 'page');
  }
});

document.addEventListener('DOMContentLoaded', e => {
  const homeURL = 'https://lawsonwebdevelopment.com/';
  const servicesURL = 'https://lawsonwebdevelopment.com/services';
  const pricingURL = 'https://lawsonwebdevelopment.com/pricing';
  const contactURL = 'https://lawsonwebdevelopment.com/contact';
  const termsURL = 'https://lawsonwebdevelopment.com/terms-of-service';
  const privacyURL = 'https://lawsonwebdevelopment.com/privacy-policy';

  const currentURL = window.location.href;

  navLink.forEach(link => {
    const href = link.getAttribute('href');

    if (
      href === homeURL ||
      href === servicesURL ||
      href === pricingURL ||
      href === contactURL ||
      href === termsURL ||
      href === privacyURL
    ) {
      href === currentURL
        ? link.setAttribute('aria-current', 'page')
        : link.removeAttribute('aria-current');
    }
  });
});

// Slide-in Cards

const slideCards = document.querySelectorAll('.timeline__card');

const checkCard = () => {
  // Slide in around halfway down viewport
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

if (timePickerHour) {
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
}

// Request consultation checkbox
const requestBtn = document.querySelector('#consult_request');

if (requestBtn) {
  requestBtn.addEventListener('change', e => {
    // Show consultation options
    if (requestBtn.checked) {
      consultSchedule.style.animation = 'slideDown 200ms ease-out 1';
      setTimeout(() => {
        consultSchedule.style.display = 'block';
        consultSchedule.style.transform = 'translateY(0rem)';
      }, 200);
    } else {
      // Hide consultation options
      consultSchedule.style.animation = 'slideUp 200ms ease-out 1';
      setTimeout(() => {
        consultSchedule.style.transform = 'translateY(-2rem)';
        consultSchedule.style.display = 'none';
      }, 200);
    }
  });
}

// Minimum schedule date

const dateSelect = document.querySelector('#consult_date');
// Get current date
const currentDate = new Date().toLocaleDateString('fr-ca');
// Set minimum date to current date
if (dateSelect) {
  dateSelect.value = currentDate;
  dateSelect.min = currentDate;
}

// Flickering Lightbulb

const lightbulb = document.querySelector('#ctaLightbulb');
let interval = 0;

const flickerLightbulb = () => {
  const imageSources = [
    '/assets/svg/lightbulb-on.svg',
    '/assets/svg/lightbulb-off.svg',
  ];

  let isOn = true;

  const flickerInterval = setInterval(() => {
    if (isOn) {
      lightbulb.src = imageSources[0];
      isOn = false;
      setTimeout(() => {
        isOn = true;
        // Turn on
        lightbulb.src = imageSources[1];
        // Glow animation
        lightbulb.style.animation = 'turnOff 500ms ease';
        setTimeout(() => {
          lightbulb.style.animation = '';
        }, 500);
      }, 5000); // Time on
    } else {
      // Turn off
      lightbulb.src = imageSources[1];
      isOn = true;
    }
  }, 5500); // Time off

  return flickerInterval;
};

if (lightbulb) {
  interval = flickerLightbulb();
}
