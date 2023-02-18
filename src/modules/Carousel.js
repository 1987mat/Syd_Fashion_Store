class Slider {
  constructor() {
    this.slides = document.querySelectorAll('.product-slide');
    this.events();
  }

  events() {
    let curSlide = 0;
    let maxSlide = this.slides.length - 1;

    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    nextBtn.addEventListener('click', () => {
      if (curSlide === maxSlide) {
        curSlide = 0;
      } else {
        curSlide++;
      }

      this.slides.forEach((slide) => {
        slide.style.transform = `translateX(${100 * -curSlide}%)`;
      });
    });

    prevBtn.addEventListener('click', () => {
      if (curSlide === 0) {
        curSlide = maxSlide;
      } else {
        curSlide--;
      }

      this.slides.forEach((slide) => {
        slide.style.transform = `translateX(${-100 * curSlide}%)`;
      });
    });
  }
}

export default Slider;
