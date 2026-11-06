// Navigasi mobile. Edit daftar menu di index.html.
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Buka menu');
  });
});

// Animasi saat bagian halaman masuk layar.
const cards = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.09 });
  cards.forEach(card => observer.observe(card));
} else {
  cards.forEach(card => card.classList.add('visible'));
}

// Tahun copyright otomatis.
document.querySelector('#year').textContent = new Date().getFullYear();

// Tandai bagian menu aktif saat menggulir halaman.
const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.nav-links a');
if ('IntersectionObserver' in window) {
  const currentSectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-25% 0px -60% 0px' });
  sections.forEach(section => currentSectionObserver.observe(section));
}

// Galeri foto: klik untuk memperbesar, gunakan panah kiri/kanan untuk pindah.
const galleryButtons = [...document.querySelectorAll('.gallery-card')];
const lightbox = document.querySelector('#gallery-lightbox');
const lightboxImg = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('figcaption');
let galleryIndex = 0;
let previousFocus = null;
function showGalleryImage(index) {
  galleryIndex = (index + galleryButtons.length) % galleryButtons.length;
  const selected = galleryButtons[galleryIndex];
  lightboxImg.src = selected.dataset.full;
  lightboxImg.alt = selected.querySelector('img').alt;
  lightboxCaption.textContent = selected.dataset.caption;
}
function closeGallery() {
  lightbox.hidden = true;
  document.body.classList.remove('lightbox-open');
  lightboxImg.removeAttribute('src');
  previousFocus?.focus();
}
galleryButtons.forEach((button,index) => button.addEventListener('click', () => {
  previousFocus = button;
  lightbox.hidden = false;
  document.body.classList.add('lightbox-open');
  showGalleryImage(index);
  lightbox.querySelector('.lightbox-close').focus();
}));
lightbox.querySelector('.lightbox-close').addEventListener('click', closeGallery);
lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showGalleryImage(galleryIndex - 1));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => showGalleryImage(galleryIndex + 1));
lightbox.addEventListener('click', e => { if(e.target === lightbox) closeGallery(); });
document.addEventListener('keydown', e => {
  if (lightbox.hidden) return;
  if (e.key === 'Escape') closeGallery();
  if (e.key === 'ArrowLeft') showGalleryImage(galleryIndex - 1);
  if (e.key === 'ArrowRight') showGalleryImage(galleryIndex + 1);
  if (e.key === 'Tab') {
    const controls = [...lightbox.querySelectorAll('button')];
    const first = controls[0], last = controls[controls.length - 1];
    if (e.shiftKey && document.activeElement === first) {e.preventDefault();last.focus();}
    else if (!e.shiftKey && document.activeElement === last) {e.preventDefault();first.focus();}
  }
});
