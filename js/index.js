/*

*/
// Switch Z-index Sidebar
$(function(){
  $("nav#offcanvas-menuleft").click(function(){
     $(this).toggleClass("foo");
  });
});

{
    const DOM = {};
    DOM.intro = document.querySelector('.content--intro');
    DOM.shape = DOM.intro.querySelector('svg.shape');
    DOM.path = DOM.shape.querySelector('path');
    DOM.enter = document.querySelector('.enter');
    charming(DOM.enter);

    // Set the SVG transform origin.
    DOM.shape.style.transformOrigin = '50% 0%';



// Contact page
$(function () {
    var $overlay = $('.overlay'),
        $overlayTrigger = $('.overlay-trigger button'),
        $overlayClose = $('.overlay-close'),
        openClass = 'is-open';

    $overlayTrigger.on('click', function () {
        var num = ('0' + ($(this)
                .index() + 1))
            .slice(-2);
        $('.overlay' + num)
            .addClass(openClass);
        $overlayClose.addClass(openClass);
    });

    $overlayClose.on('click', function () {
        $overlayClose.removeClass(openClass);
        $overlay.removeClass(openClass);
    });
});