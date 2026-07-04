// Bela Mori Homestay — script.js
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 80));

  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => { links.classList.toggle('open'); toggle.classList.toggle('active'); });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { links.classList.remove('open'); toggle.classList.remove('active'); }));

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => { e.preventDefault(); const t = document.querySelector(a.getAttribute('href')); if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
  });

  const form = document.getElementById('contactForm');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(form);
    let msg = `Halo Bela Mori! 👋\n\nNama: ${fd.get('name')}\n`;
    if (fd.get('phone')) msg += `WA: ${fd.get('phone')}\n`;
    const rooms = { beach: '🏖️ Beach Room — Rp 250rb', ocean: '🌊 Ocean View Bungalow — Rp 400rb', family: '👨‍👩‍👧 Family Cottage — Rp 550rb' };
    if (fd.get('room')) msg += `Kamar: ${rooms[fd.get('room')] || fd.get('room')}\n`;
    if (fd.get('dates')) msg += `Tanggal: ${fd.get('dates')}\n`;
    if (fd.get('message')) msg += `\n${fd.get('message')}`;
    window.open(`https://wa.me/6282190968523?text=${encodeURIComponent(msg)}`, '_blank');
  });

  const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; obs.unobserve(e.target); } }); }, { threshold: 0.1 });
  document.querySelectorAll('.about, .packages, .gallery, .reviews, .contact').forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(30px)'; el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; obs.observe(el); });
});
