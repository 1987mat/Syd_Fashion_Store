import { hideNavbar } from './modules/navbarScroll';
import { animationOnScroll } from './modules/animationOnScroll';
import MobileMenu from './modules/MobileMenu';

jQuery(document).ready(() => {
  hideNavbar();
  animationOnScroll();
  const mobileMenu = new MobileMenu();
});
