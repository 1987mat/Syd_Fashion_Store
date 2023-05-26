class MobileMenu {
  constructor() {
    this.mobileMenu = document.querySelector('.menu_wrapper');
    this.hamburger = document.querySelector('.hamburger');
    this.dropdownIcon = document
      .querySelector('.menu')
      .querySelector('.dashicons-arrow-down');
    this.dropdownMenu = document.querySelector('.sub-menu');
    this.mediaQueryMatch = window.matchMedia('(max-width: 768px)');
    this.events();
  }

  events() {
    // Toggle mobile menu
    this.hamburger.addEventListener('click', () => {
      this.mobileMenu.classList.toggle('open');
      this.hamburger.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });

    // Toggle dropdown menu
    if (this.mediaQueryMatch.matches) {
      this.dropdownIcon.addEventListener('click', (e) => {
        e.preventDefault();
        this.dropdownMenu.classList.toggle('open');
      });
    }
  }
}

export default MobileMenu;
