// toggle menu responsive
const MenuBurger = () => {
  const burger = document.querySelector('#burger');
  const burgerOn = document.querySelector('#burger-on');
  const burgerClose = document.querySelector('#burger-close');
  const menu = document.querySelector('#menu');

  burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      burgerClose.classList.remove('hidden');
      burgerOn.classList.add('hidden');
    } else {
      menu.classList.add('hidden');
      burgerOn.classList.remove('hidden');
      burgerClose.classList.add('hidden');
    }
  });
};
MenuBurger();

//random pictures home page
const sliderHome = () => {
  const pictures = ['./img/pic1.jpg', './img/pic2.jpg', './img/pic3.jpg'];
  const max = pictures.length;
  function getRandomInt(max) {
    const random = Math.floor(Math.random() * Math.floor(max));
    document.getElementById('sliderHome').src = pictures[random];
  }
  getRandomInt(max);
};
sliderHome();
