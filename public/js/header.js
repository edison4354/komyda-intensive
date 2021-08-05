$(function () {
  $('.navbar-nav li a.pick-up').on("click", function(e) {
    $('.navbar-nav li a.delivery').removeClass('active');
    $('.navbar-nav li a.pick-up').addClass('active')
    e.preventDefault();
  });
  $('.navbar-nav li a.delivery').on("click", function(e) {
    $('.navbar-nav li a.pick-up').removeClass('active');
    $('.navbar-nav li a.delivery').addClass('active');
    e.preventDefault();
  });
});
