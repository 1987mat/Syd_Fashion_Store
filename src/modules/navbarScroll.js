export function hideNavbar() {
  let previousScroll = 0;
  const header = document.querySelector('.site_header');
  const headerHeight = header.clientHeight;

  window.addEventListener('scroll', () => {
    if (window.innerWidth >= 992) {
      let currentScroll = window.scrollY;

      if (currentScroll > previousScroll && currentScroll > headerHeight) {
        header.classList.add('hide');
      } else {
        header.classList.remove('hide');
      }

      previousScroll = currentScroll;
    }
  });
}
