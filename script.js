const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
const authOpen = document.getElementById('authOpen');
const authModal = document.getElementById('authModal');
const authClose = document.getElementById('authClose');
const authTabs = document.querySelectorAll('.auth-tab');
const authForms = document.querySelectorAll('.auth-form');

themeToggle?.addEventListener('click', () => {
  body.classList.toggle('dark');
  themeToggle.textContent = body.classList.contains('dark') ? 'Light' : 'Dark';
});

navToggle?.addEventListener('click', () => {
  const expanded = mainNav.style.display === 'flex';
  mainNav.style.display = expanded ? 'none' : 'flex';
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 720) {
    mainNav.style.display = 'flex';
  }
});

const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 720) {
      mainNav.style.display = 'none';
    }
  });
});

authOpen?.addEventListener('click', () => {
  authModal?.classList.add('show');
  authModal?.setAttribute('aria-hidden', 'false');
});

authClose?.addEventListener('click', () => {
  authModal?.classList.remove('show');
  authModal?.setAttribute('aria-hidden', 'true');
});

authModal?.addEventListener('click', (event) => {
  if (event.target === authModal) {
    authModal.classList.remove('show');
    authModal.setAttribute('aria-hidden', 'true');
  }
});

authTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    authTabs.forEach((button) => {
      button.classList.remove('active');
      button.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    authForms.forEach((form) => {
      form.classList.toggle('active', form.id === `${tab.dataset.tab}Form`);
    });
  });
});

const roadButtons = document.querySelectorAll('.route-select');
const routeTitle = document.getElementById('routeTitle');
const routeStatus = document.getElementById('routeStatus');
const routeNote = document.getElementById('routeNote');

const routeData = {
  'juba-nimule': {
    title: 'Juba → Nimule',
    status: 'Good',
    note: 'Smooth travel, clear roads through the main corridor.',
  },
  'juba-bor': {
    title: 'Juba → Bor',
    status: 'Flooded',
    note: 'Heavy rains near Bor have made this route difficult. Use caution.',
  },
  'juba-yei': {
    title: 'Juba → Yei',
    status: 'Poor',
    note: 'Roads are rough with occasional waterlogged sections.',
  },
  'wau-malakal': {
    title: 'Wau → Malakal',
    status: 'Closed',
    note: 'Bridge repair work has temporarily closed the route.',
  },
  'rumbek-bentiu': {
    title: 'Rumbek → Bentiu',
    status: 'Under Construction',
    note: 'Improvements are underway, expect slow moving traffic.',
  },
};

roadButtons.forEach((button) => {
  button.addEventListener('click', () => {
    roadButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    const route = routeData[button.dataset.route];
    if (route) {
      routeTitle.textContent = route.title;
      routeStatus.textContent = `Status: ${route.status}`;
      routeNote.textContent = route.note;
    }
  });
});
