const header = document.querySelector(".site-header");
const revealTargets = document.querySelectorAll(
  ".section-heading, .service-card, .proof-image, .proof-copy, .work-item, .reviews, .directions-copy, .map-shell, .contact-list"
);

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

if ("IntersectionObserver" in window) {
  revealTargets.forEach((target) => target.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealTargets.forEach((target) => observer.observe(target));

  window.addEventListener(
    "load",
    () => {
      revealTargets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView) target.classList.add("is-visible");
      });
    },
    { once: true }
  );
}
