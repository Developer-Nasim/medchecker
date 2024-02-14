(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');
    $('.manu-overlay').toggleClass('show');
  }); 

   


  // owlCarousel
  $(".categories-items").owlCarousel({
    loop: true,
    margin: 30,
    items: 4,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });

 
  
 
})(jQuery);
