

    $('document').ready(function() {

      $('.fa-bars').click(function() {
        $('.mobile-slide-out').addClass('mobile-menu-active')
      });

      $('.closeMobileMenu').click(function() {
        $('.mobile-slide-out').removeClass('mobile-menu-active')
      });


        AOS.init();


    });
