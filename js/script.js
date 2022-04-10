$(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('.header').addClass('active__header');
    } else {
      $('.header').removeClass('active__header');
    }
  });
});
