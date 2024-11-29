window.onload = function() {
  $('#js-header-hamburger-menu-btn').on('click', hamburgerMenuBtnHandler);
  $(window).on('resize', hamburgerMenuReset);
}

function hamburgerMenuBtnHandler() {
  $('#js-hamburger-menu').toggleClass('active');
  $('#js-header-hamburger-menu-btn').toggleClass('fa-times');
  $('#js-header-hamburger-menu-btn').toggleClass('fa-navicon fa-lg');
}

/* Close hamburger menu on window resize */
function hamburgerMenuReset() {
  if ($(window).width() > 601 && $('#js-hamburger-menu').hasClass('active')) {
      hamburgerMenuBtnHandler();
  }
}