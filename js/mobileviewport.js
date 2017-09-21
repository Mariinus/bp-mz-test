// On document ready set the div height to window
$(document).ready(function(){ 
 
	// Assign a variable for the application being used
	var nVer = navigator.appVersion;
	// Assign a variable for the device being used
	var nAgt = navigator.userAgent;
	var nameOffset,verOffset,ix;
 
 
	// First check to see if the platform is an iPhone or iPod
	if(navigator.platform == 'iPhone' || navigator.platform == 'iPod'){
		// In Safari, the true version is after "Safari" 
		if ((verOffset=nAgt.indexOf('Safari'))!=-1) {
		  // Set a variable to use later
		  var mobileSafari = 'Safari';
		}
	}
 
	// If is mobile Safari set window height +60
	if (mobileSafari == 'Safari') { 
		// Height + 60px
		$('#right-sidebar').css('height',(($(window).height()) + 60)+'px');
	} else {
		// Else use the default window height
		$('#right-sidebar, .profile').css({'height':(($(window).height()))+'px'});	
	};
 
 
});
 
// On window resize run through the sizing again
$(window).resize(function(){
	// If is mobile Safari set window height +60
	if (mobileSafari == 'Safari') { 
		// Height + 60px
		$('#right-sidebar').css('height',(($(window).height()) + 60)+'px');
	} else {
		// Else use the default window height
		$('#right-sidebar, .profile').css({'height':(($(window).height()))+'px'});	
	};
});