const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const themeIcon = themeToggle?.querySelector('[data-theme-icon]');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

function savedTheme() {
  try {
    return localStorage.getItem('tedxmp-theme');
  } catch {
    return null;
  }
}

function preferredTheme() {
  return savedTheme() || (systemTheme.matches ? 'dark' : 'light');
}

function setTheme(theme, savePreference = false) {
  root.dataset.theme = theme;
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  const label = `Switch to ${nextTheme} theme`;

  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☀' : '☾';
  }

  themeToggle?.setAttribute('aria-label', label);
  themeToggle?.setAttribute('title', label);

  if (savePreference) {
    try {
      localStorage.setItem('tedxmp-theme', theme);
    } catch {
      // The theme still works for this visit when browser storage is unavailable.
    }
  }
}

setTheme(preferredTheme());

themeToggle?.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme, true);
});

systemTheme.addEventListener('change', (event) => {
  if (!savedTheme()) {
    setTheme(event.matches ? 'dark' : 'light');
  }
});

const earlyBirdCutoff = document.querySelector('#early-bird-cutoff');

if (earlyBirdCutoff) {
  const cutoff = Date.parse(earlyBirdCutoff.dateTime);
  const title = document.querySelector('#admission-title');
  const prices = document.querySelectorAll('[data-admission-price]');
  const buttons = document.querySelectorAll('[data-admission-cta]');
  const earlyBirdDetails = document.querySelectorAll('[data-early-bird]');

  function updateAdmission() {
    const remaining = cutoff - Date.now();
    const earlyBird = remaining > 0;

    title.textContent = earlyBird ? 'Early-bird tickets' : 'General admission';
    prices.forEach((price) => { price.textContent = earlyBird ? '$81.88' : '$92.55'; });
    buttons.forEach((button) => {
      button.textContent = earlyBird ? 'Buy early-bird tickets' : 'Buy general admission tickets';
    });
    earlyBirdDetails.forEach((detail) => { detail.hidden = !earlyBird; });

    if (earlyBird) {
      // Browser timers cannot wait more than roughly 24 days at once.
      window.setTimeout(updateAdmission, Math.min(remaining, 2 ** 31 - 1));
    }
  }

  updateAdmission();
}

const menuButton = document.querySelector('[data-menu-button]');
const navigation = document.querySelector('[data-navigation]');

function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = 'Menu';
}

menuButton.addEventListener('click', () => {
  const willOpen = !navigation.classList.contains('is-open');
  navigation.classList.toggle('is-open', willOpen);
  menuButton.setAttribute('aria-expanded', String(willOpen));
  menuButton.textContent = willOpen ? 'Close' : 'Menu';
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    closeMenu();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    closeMenu();
    menuButton.focus();
  }
});

window.matchMedia('(min-width: 70.01rem)').addEventListener('change', (event) => {
  if (event.matches) {
    closeMenu();
  }
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealItems = document.querySelectorAll('.reveal');

if (reducedMotion.matches || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}
