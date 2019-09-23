var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
setInterval(nextSlide, 3000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

$(document).ready(function () {
      $('.menu-toggler').on('click', function (){
      $(this).toggleClass('open');
      $('.top-nav').toggleClass('open');
    });

    $('.top-nav .top-nav__link').on('click', function (){
      $('.menu-toggler').removeClass('open');
      $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function (){
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
      }, 2000);
    });

    $('#up').on('click', function() {
      $('html, body').animate({
        scrollTop: 0
      }, 2000);
    });

    AOS.init({
      easing: 'ease',
      duration: 1800,
      once: true
    });
  });
