'use strict';

$(document).ready(function () {
  
  $('#photo-slider').owlCarousel({
    loop: true,
    margin: 41,
    center: true,
    nav: true,
    dots: true,
    items: 1,
    stagePadding: 93,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,

    responsive: {
      501: {
        items: 1,
        stagePadding: 150,
      },

      601: {
        margin: 80,
        stagePadding: 180,
      },

      769: {
        items: 1,
        margin: 60,
        stagePadding: 250,
      },

      941: {
        items: 3,
        stagePadding: 0,
        margin: 25,
      },
    },
  });

  $('.brands-slider').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    dots: false,
    items: 4,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,

    responsive: {
      541: {
        items: 6,
        margin: 20,
      },

      1251: {
        items: 8,
        margin: 25,
      },
    },
  });

  $('.reviews__slider').owlCarousel({
    loop: true,
    margin: 5,
    nav: true,
    dots: false,
    items: 1,
    stagePadding: 80,
    autoHeight: true,

    responsive: {
      541: {
        margin: 10,
        stagePadding: 150,
      },

      941: {
        items: 3,
        margin: 30,
        stagePadding: 0,
      },
    },
  });

  // Initialise Video Carousel
  const videoCarousel = new Carousel(document.querySelector('#video-carousel'), {
    Dots: false,
  });

  // Thumbnails
  const thumbVideoCarousel = new Carousel(
    document.querySelector('#video-thumb-carousel'),
    {
      Sync: {
        target: videoCarousel,
        friction: 0,
      },
      Dots: false,
      Navigation: false,
      center: true,
      slidesPerPage: 1,
      infinite: false,
    }
  );

  Fancybox.bind('[data-fancybox="photo-gallery"]', {
    Toolbar: false,
    closeButton: 'top',
  });
});
