document.addEventListener('DOMContentLoaded', () => {
  const resume = document.querySelector('.resume');
  if (!resume) return;

  const sections = resume.querySelectorAll('.section');
  const divider = resume.querySelectorAll('.divider');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  sections.forEach((section, i) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(10px)';
    section.style.transition = `opacity 0.5s ease-out ${i * 0.08}s, transform 0.5s ease-out ${i * 0.08}s`;
    observer.observe(section);
  });

  dividers.forEach((div, i) => {
    div.style.opacity = '0';
    div.style.transition = `opacity 0.4s ease-out ${i * 0.08 + 0.2}s`;
    observer.observe(div);
  });
});
