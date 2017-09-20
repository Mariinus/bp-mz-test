// Detect objectFit support
if('objectFit' in document.documentElement.style === false) {
  
  // assign HTMLCollection with parents of images with objectFit to variable
  var container = document.getElementsByClassName('slideshow');
  
  // Loop through HTMLCollection
  for(var i = 0; i < container.length; i++) {
    
    // Asign image source to variable
    var imageSource = container[i].querySelector('img').src;
    
    // Hide image
    container[i].querySelector('img').style.display = 'none';
    
    // Add background-size: cover
    container[i].style.backgroundSize = 'cover';
    
    // Add background-image: and put image source here
    container[i].style.backgroundImage = 'url(' + imageSource + ')';
    
    // Add background-position: center center
    container[i].style.backgroundPosition = 'center center';
  }
}
else {
  // You don't have to worry
  console.log('No worries, your browser supports objectFit')
}

var duration = 20; // duration in seconds
var fadeAmount = 0.3; // fade duration amount relative to the time the image is visible

$( document )
	.ready( function() {
		var images = $( ".slideshow img" );
		var numImages = images.size();
		var durationMs = duration * 1000;
		var imageTime = durationMs / numImages; // time the image is visible
		var fadeTime = imageTime * fadeAmount; // time for cross fading
		var visibleTime = imageTime - imageTime * fadeAmount * 2; // time the image is visible with opacity == 1
		var animDelay = visibleTime * ( numImages - 1 ) + fadeTime * ( numImages - 2 ); // animation delay/offset for a single image

		images.each( function( index, element ) {
			if ( index != 0 ) {
				$( element )
					.css( "opacity", "0" );
				setTimeout( function() {
					doAnimationLoop( element, fadeTime, visibleTime, fadeTime, animDelay );
				}, visibleTime * index + fadeTime * ( index - 1 ) );
			} else {
				setTimeout( function() {
					$( element )
						.animate( {
							opacity: 0
						}, fadeTime, function() {
							setTimeout( function() {
								doAnimationLoop(
									element
									, fadeTime
									, visibleTime
									, fadeTime
									, animDelay
								);
							}, animDelay );
						} );
				}, visibleTime );
			}
		} );
	} );

// creates a animation loop
function doAnimationLoop(
	element
	, fadeInTime
	, visibleTime
	, fadeOutTime
	, pauseTime
) {
	fadeInOut( element, fadeInTime, visibleTime, fadeOutTime, function() {
		setTimeout( function() {
			doAnimationLoop( element, fadeInTime, visibleTime, fadeOutTime, pauseTime );
		}, pauseTime );
	} );
}

// shorthand for in- and out-fading
function fadeInOut( element, fadeIn, visible, fadeOut, onComplete ) {
	return $( element )
		.animate( {
			opacity: 1
		}, fadeIn )
		.delay( visible )
		.animate( {
			opacity: 0
		}, fadeOut, onComplete );
}