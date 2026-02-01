import './style.css';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const header = document.querySelector('header');

let scrollTimer;

header.classList.add('header-visible');

document.addEventListener('scroll', () => {
  header.classList.remove('header-visible');
  header.classList.add('header-hidden');

  clearTimeout(scrollTimer);

  scrollTimer = setTimeout(() => {
    header.classList.remove('header-hidden');
    header.classList.add('header-visible');
  }, 200);
});