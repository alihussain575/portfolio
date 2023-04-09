const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;
      const target = document.querySelector(hash);
      const targetTop = target.offsetTop;
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
    }
  });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  });