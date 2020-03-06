$(window).ready(function() {
  if ($(window).scrollTop() === 0) {
    $('nav .brand-logo .logo').css({ height: '100px' });
  }
});
$(window).scroll(function() {
  if ($(window).scrollTop()) {
    $('nav .brand-logo .logo').stop();
    if (window.innerWidth < 600) {
      $('nav .brand-logo .logo').animate({ height: '57px' }, 'fast');
    } else {
      $('nav .brand-logo .logo').animate({ height: '64px' }, 'fast');
    }
  } else {
    $('nav .brand-logo .logo').stop();
    $('nav .brand-logo .logo').animate({ height: '100px' }, 'fast');
  }
});
