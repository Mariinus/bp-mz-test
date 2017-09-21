import * as viewportUnitsBuggyfill from 'viewport-units-buggyfill';

// …

// Initialize viewportUnitsBuggyfill
viewportUnitsBuggyfill.init();

// Also hook viewportUnitsBuggyfill to resize event (if it was initialized)
if (document.getElementById('patched-viewport')) {
    window.addEventListener('resize', viewportUnitsBuggyfill.refresh, true);
}

// Contact page
$(function() {
  var $overlay = $('.overlay'),
      $overlayTrigger = $('.overlay-trigger button'),
      $overlayClose = $('.overlay-close'),
      openClass = 'is-open';

  $overlayTrigger.on('click', function() {
    var num = ('0' + ($(this).index() + 1)).slice(-2);
    $('.overlay' + num).addClass(openClass);
    $overlayClose.addClass(openClass);
  });

  $overlayClose.on('click', function() {
    $overlayClose.removeClass(openClass);
    $overlay.removeClass(openClass);
  });
});