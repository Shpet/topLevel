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
    button.addEventListener('click', () => {});
  });

  modalCloseBackgrounds.forEach((background) => {
    background.addEventListener('click', (e) => {
      if (e.target === background) {
        const activeModal = document.querySelector('.modal.active');
        activeModal.classList.remove('active');
      }
    });
  });

  // forms
  const formBtns = document.querySelectorAll('button[type="submit"]');

  formBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const form = e.target.getAttribute('data-form');
      const mailUrl = '../backend/mail.php';
      const selectorModalThanks = '.modal.thanks';

      offModal();
      sendAjaxForm(selectorModalThanks, form, mailUrl);

      return false;
    });
  });
});

function sendAjaxForm(thanks, ajax_form, url) {
  $.ajax({
    url: url,
    type: 'POST',
    dataType: 'html',
    data: $('#' + ajax_form).serialize(),
    success: function () {
      document.querySelector(`${thanks}`).classList.add('active');
    },
    error: function () {
      // Данные не отправлены
      console.log('error');
    },
  });
}

function offModal() {
  const activeModal = document.querySelector('.modal.active');
  activeModal.classList.remove('active');
}
