// toggle menu responsive
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
