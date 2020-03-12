$(window).ready(function() {
  $('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 7500,
    autoplayHoverPause: true,
    center: true,
    loop: true,
    margin: 10,
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
});
