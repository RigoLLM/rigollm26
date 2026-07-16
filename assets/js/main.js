// RigoLLM 2026 — minimal nav interactions
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    // Close the mobile menu after clicking a link
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }

  // Solidify header shadow on scroll
  var header = document.querySelector('.site-header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 4px 22px rgba(17, 35, 99, 0.14)';
    } else {
      header.style.boxShadow = '0 2px 18px rgba(17, 35, 99, 0.08)';
    }
  });
})();
