$(document).ready(function () {
  $('.header-nav-btn').on('click', function() {
    $('.modal-window-2').addClass('modal-window-active');
    $('.dark-window').addClass('dark-window-active');
    return false;
  })
  $('.btn-1').on('click', function() {
    $('.modal-window-1').addClass('modal-window-active');
    $('.dark-window').addClass('dark-window-active');
    return false;
  })
  $('.dark-window').on('click', function() {
    $('.modal-window').removeClass('modal-window-active');
    $('.dark-window').removeClass('dark-window-active');
    return false;
  })
  $('.reviews-row').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      variableWidth: true,
      prevArrow: $('.reviews-arrows-left'),
      nextArrow: $('.reviews-arrows-right'),
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: false,
            }
          }
        ]
    });
  $('.result-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      variableWidth: true,
      prevArrow: $('.res__l'),
      nextArrow: $('.res__r'),
      swipe: false,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: false,
            }
          }
        ]
    });
  $('.doctors-row').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      variableWidth: true,
      centerMode: true,
      prevArrow: $('.doctors-arrow__l'),
      nextArrow: $('.doctors-arrow__r'),
      swipe: false,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: false,
            }
          }
        ]
    });
  $('.services-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      prevArrow: $('.services-arrow__l'),
      nextArrow: $('.services-arrow__r'),
      swipe: false,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: false,
            }
          }
        ]
    });
  new WOW().init();
});
$(function(){   
    $(".container1").twentytwenty(); 
    $(".container2").twentytwenty(); 
});