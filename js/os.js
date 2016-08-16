;(function (window, document, $) {
  'use strict';

  $(document).ready( function () {

    /**
     * Show/hide toggle
     */
     
    $('.os-show-hide').on('click', function (e) {
      var $this    = $(this),
          target   = $this.data('target') || this,
          textShow = $this.data('text-show') || 'Show',
          textHide = $this.data('text-hide') || 'Hide';

      // Slide toggle the target area
      $(target).slideToggle();

      // Toggle text
      $this.text(
        $this.text() == textShow ? textHide : textShow
      );

      e.preventDefault();
    });


    /**
     * Smooth scroll
     */

    // Cache html and body so it isn't called every time
    var $root = $('html, body');

    $('a.os-smooth-scroll').on('click', function () {
      var href = $.attr(this, 'href');
      
      $root.animate(
        { scrollTop: $(href).offset().top }, 
        500, 
        function () {
          window.location.hash = href;
        });

      return false;
    });

  });
}(window, document, window.jQuery));