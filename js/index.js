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

    const init = () => {
        // imagesLoaded(document.body, {
        //    background: true
        // }, () => document.body.classList.remove('loading'));
        DOM.enter.addEventListener('click', navigate);
        DOM.enter.addEventListener('touchenter', navigate);
        DOM.enter.addEventListener('mouseenter', enterHoverInFn);
        DOM.enter.addEventListener('mouseleave', enterHoverOutFn);
    };

    let loaded;
    const navigate = () => {
        if (loaded) return;
        loaded = true;

        anime({
            targets: DOM.intro,
            duration: 1100,
            easing: 'easeInOutSine',
            translateY: '-200vh'
        });

        anime({
            targets: DOM.shape,
            scaleY: [
                {
                    value: [0.8, 1.8],
                    duration: 550,
                    easing: 'easeInQuad'
				}
				, {
                    value: 1,
                    duration: 550,
                    easing: 'easeOutQuad'
				}
			]
        });

        anime({
            targets: DOM.path,
            duration: 1100,
            easing: 'easeOutQuad',
            d: DOM.path.getAttribute('pathdata:id')
        });
    };

    let isActive;
    let enterTimeout;


    init();
};

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