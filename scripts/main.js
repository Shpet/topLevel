'use strict';

$(document).ready(function () {
  const header = document.querySelector('.wrap-header');
  const mobileHeader = document.querySelector('.mobile');
  const burger = document.querySelector('.burger');
  let navLinks = document.querySelectorAll(
    '.mobile nav a, .mobile header .logo'
  );

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 10) {
      header.classList.add('active');
      return;
    }

    header.classList.remove('active');
  });

  burger.addEventListener('click', () => {
    mobileHeader.classList.toggle('active');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileHeader.classList.remove('active');
    });
  });
  // lazyload iframe
  var lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
  });

  
  // cookies
  const cookies = document.querySelector('.cookies');
  const hideCookies = localStorage.getItem('acceptCookies');

  if (!hideCookies && cookies) {
    cookies.classList.add('active');

    const closeButt = document.querySelector('.cookies .close');

    closeButt.addEventListener('click', () => {
      localStorage.setItem('acceptCookies', true);
      cookies.classList.remove('active');
    });
  }

  // modals

  const modalTriggers = document.querySelectorAll('[data-modal]');

  modalTriggers.forEach((button) => {
    button.addEventListener('click', () => {
      const showModalClass = button.getAttribute('data-modal');
      const showModalElem = document.querySelector(`.${showModalClass}`);

      showModalElem.classList.add('active');
    });
  });

  const modalCloseButtons = document.querySelectorAll('.modal .close');
  const modalCloseBackgrounds = document.querySelectorAll(
    '.modal:not(.modal-form)'
  );

  modalCloseButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const activeModal = document.querySelector('.modal.active');

      activeModal.classList.remove('active');
    });
  });

  modalCloseBackgrounds.forEach((background) => {
    background.addEventListener('click', (e) => {
      console.log(e);
      if (e.target === background) {
        const activeModal = document.querySelector('.modal.active');
        activeModal.classList.remove('active');
      }
    });
  });



  
});
