"use strict";

const navMain = document.querySelector(`.main-nav`);

function toggleMenu() {
  navMain.classList.toggle(`main-nav--opened`);
}

function closeMenu() {
  navMain.classList.remove(`main-nav--opened`);
}

const modalOpenedClass = `modal-form--opened`;
function showPopup(popupSelector) {
  const popup = document.querySelector(popupSelector);
  popup.classList.add(modalOpenedClass);
}

function closePopup() {
  const popup = document.querySelector(`.${modalOpenedClass}`);
  popup.classList.remove(modalOpenedClass);
}

const modal = document.querySelector(`.modal`);
function toggleModal() {
  modal.classList.toggle(`modal--opened`);
  modal.classList.toggle(`modal--closed`);
}

function closeModal() {
  modal.classList.remove(`modal--opened`);
  modal.classList.add(`modal--closed`);
}

Array.from(document.getElementsByClassName('accordion__item')).forEach((item) => {
  const triggerElement = item.querySelector('.accordion__title-wrapper');
  const wrapper = item.querySelector('.accordion__content-wrapper');
  const content = item.querySelector('.accordion__content');

  triggerElement.addEventListener('click', (evt) => {
    wrapper.classList.toggle(`accordion__content-wrapper--opened`);
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

document.addEventListener(`keydown`, (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeMenu();
    closePopup();
    closeModal();
  }
});


