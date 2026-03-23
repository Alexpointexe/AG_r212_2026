/* ==========================================
   1. GESTION DU MENU BURGER
   ==========================================*/
const bouton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

bouton.addEventListener('click', () => {
  // On bascule la classe
  menu.classList.toggle('is-open');
  
  // On vérifie l'état après l'activation
  const isOpen = menu.classList.contains('is-open');
  bouton.setAttribute('aria-expanded', isOpen);
});

// Fermeture du menu avec la touche Échap
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.classList.contains('is-open')) {
    menu.classList.remove('is-open');
    bouton.setAttribute('aria-expanded', 'false');
    bouton.textContent = '🍔';
    bouton.focus();
  }
});

/* ==========================================
   2. GESTION DE LA MODALE
   ==========================================*/
const btnOpen = document.querySelector('.modal-open');
const btnClose = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');

function ouvrirModale() {
  modal.classList.add('is-visible');
  modal.setAttribute('aria-hidden', 'false');
}

function fermerModale() {
  modal.classList.remove('is-visible');
  modal.setAttribute('aria-hidden', 'true');
  btnOpen.focus();
}

btnOpen.addEventListener('click', ouvrirModale);
btnClose.addEventListener('click', fermerModale);

// Fermeture au clic sur l'overlay (fond sombre)
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    fermerModale();
  }
});

// Fermeture de la modale avec Échap
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
    fermerModale();
  }
});

/* ==========================================
   3. THÈME SOMBRE
   ==========================================*/ 
const btnTheme = document.querySelector('#theme-toggle');

btnTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  const isDark = document.body.classList.contains('dark');
  btnTheme.textContent = isDark ? '☀️ Clair' : '🌙 Sombre';
});