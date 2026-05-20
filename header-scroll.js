(function () {
  const header = document.querySelector('header');

  if (!header) {
    return;
  }

  function updateHeader() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}());
