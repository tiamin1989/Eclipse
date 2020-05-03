'use strict';

let menu = document.querySelector('#menu');
let list = document.querySelectorAll('#list > .header__nav-element');

window.addEventListener('resize', () => {
  for (let i = list.length - 1; i >= 0; i--) {
    list[i].removeAttribute('style');
  }
});

menu.addEventListener('click', () => {
  for (let i = list.length - 1; i >= 0; i--) {
    if (!list[i].hasAttribute('style')) list[i].style.display = 'list-item';
    else list[i].removeAttribute('style');
  }
});
