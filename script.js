const nav = document.getElementById('nav');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 80);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const video = document.getElementById('hero-video');
if (video) {
  video.playbackRate = 0.6;
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(
  '#about .col-text, #about .col-image, .menu-item, #quote blockquote, .info-block'
).forEach((el, i) => {
  el.classList.add('fade-up');
  el.style.setProperty('--i', i);
  observer.observe(el);
});
