$(document).ready(function () {
  $('.hero_slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    cssEase: 'linear',
    arrows: false,
  });
  $('.product-images').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    cssEase: 'linear',
    arrows: false,
  });
  $('.card_slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000,
    speed: 500,
    cssEase: 'linear',
    arrows: false,
  });

});