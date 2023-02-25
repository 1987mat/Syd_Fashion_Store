class MobileMenu {
  constructor() {
    this.mobileMenu = document.querySelector('.menu_wrapper');
    this.hamburger = document.querySelector('.hamburger');
    this.events();
  }

  events() {
    this.hamburger.addEventListener('click', () => {
      this.mobileMenu.classList.toggle('open');
      this.hamburger.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });
  }
}

export default MobileMenu;
