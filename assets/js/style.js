$(window).ready(function() {
  $('.owl-carousel').owlCarousel({
    autoplay: true,
    center: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      601: {
        items: 2
      },
      993: {
        items: 3
      }
    }
  });
  //   if ($(window).scrollTop() === 0) {
  //     $('nav .brand-logo .logo').css({ height: '100px' });
  //   }
  // });
  // $(window).scroll(function() {
  //   if ($(window).scrollTop()) {
  //     $('nav .brand-logo .logo').stop();
  //     if (window.innerWidth < 600) {
  //       $('nav .brand-logo .logo').animate({ height: '57px' }, 'fast');
  //     } else {
  //       $('nav .brand-logo .logo').animate({ height: '64px' }, 'fast');
  //     }
  //   } else {
  //     $('nav .brand-logo .logo').stop();
  //     $('nav .brand-logo .logo').animate({ height: '100px' }, 'fast');
  //   }
});
