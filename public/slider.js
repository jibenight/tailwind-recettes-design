//add slider to home page
//import Splide from '@splidejs/splide';
// document.addEventListener('DOMContentLoaded', function () {
//   new Splide('#splide').mount();
// });
new Splide('#splide', {
  type: 'loop',
  perPage: 1,
  autoplay: true,
}).mount();
