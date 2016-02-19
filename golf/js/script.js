$(document).ready(function () {

"use strict";

/*-----------------------------------------------------------------------------------*/
/*	TEAM SLIDER
/*-----------------------------------------------------------------------------------*/
$('#team-slider').flexslider({
      animation: 'slide',
      controlNav: false,
      directionNav: false,
      keyboard: false,
      slideshow: false,
      start: function (slider) {
        $('#team-slider .flex-next').click(function() {
          $('.intro li').removeClass('active');
          $('#team-slider').flexslider('next');
          $('.intro li').eq(slider.animatingTo).addClass('active');
          return false;
        });
        $('#team-slider .flex-prev').click(function() {
          $('.intro li').removeClass('active');
          $('#team-slider').flexslider('prev');
          $('.intro li').eq(slider.animatingTo).addClass('active');
          return false;
        });
        $('.intro li').eq(slider.currentSlide).addClass('active');
      },
      touch: false
    });

/*-----------------------------------------------------------------------------------*/
/*	ABOUT INTRO SLIDER
/*-----------------------------------------------------------------------------------*/
	
$('#desc-slider').flexslider({
      animation: 'slide',
      controlNav: false,
      directionNav: false,
      keyboard: false,
      slideshow: false,
      start: function (slider) {
        $('#desc-slider .flex-next').click(function() {
          $('.intro li').removeClass('active');
          $('#desc-slider').flexslider('next');
          $('.intro li').eq(slider.animatingTo).addClass('active');
          return false;
        });
        $('#desc-slider .flex-prev').click(function() {
          $('.intro li').removeClass('active');
          $('#desc-slider').flexslider('prev');
          $('.intro li').eq(slider.animatingTo).addClass('active');
          return false;
        });
        $('.intro li').eq(slider.currentSlide).addClass('active');
      },
      touch: false
    });
	$('.member-node').click(function() {
      var self = $(this);
      var index = self.parent().index();
      $('.member-node').parent().removeClass('active');
      $('#desc-slider').flexslider(index);
      self.parent().addClass('active');
	  $('html, body').delay(600).animate({ scrollTop: $(".flex-viewport").offset().top -80}, 700);
      return false;
    });
	
/*-----------------------------------------------------------------------------------*/
/*	00. PARALLAX SETTING
/*-----------------------------------------------------------------------------------*/

  
  mediaCheck({
    media: '(max-width: 768px)',
    entry: function() {
    
      // NONE FOR DISABLE PARALLAX SCROLLING IN SMARTHPHONES & TABLET
      
    },
    exit: function() {
        //.parallax(xPosition, speedFactor, outerHeight) options:
        //xPosition - Horizontal position of the element
        //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
        //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
        $('#cbp-bislideshow li').parallax("center", 0.1, true);
        $('#intersection').parallax("center", 0.3, true);
        $('#client').parallax("center",0.6, true);
    }
  });

/*-----------------------------------------------------------------------------------*/
/*	HEADER TEXT ROTATE
/*-----------------------------------------------------------------------------------*/
	
	$(".rw-words-1 .rotate").textrotator({
        //animation: "flip",
        //speed: 2000
		animation: "spin",
        speed: 3000
      });
	
/*-----------------------------------------------------------------------------------*/
/*	FitVids v1.0 - Fluid Width Video Embeds
/*-----------------------------------------------------------------------------------*/

	jQuery('.video-full-width').fitVids();
	jQuery('.fluid-width-video-wrapper').css('padding-top','56.25%'); // Always display videos 16:9 (100/16*9=56.25)


/*-----------------------------------------------------------------------------------*/
/*	NAVBAR STICKY AND SELECTED
/*-----------------------------------------------------------------------------------*/

var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.cbp-af-header' ),
		didScroll = false,
		changeHeaderOn = 250;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 100 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'cbp-af-header-shrink' );
		}
		else {
			classie.remove( header, 'cbp-af-header-shrink' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();

	var sections = $("section");
	var navigation_links = $("nav a");
	
	sections.waypoint({
		handler: function(event, direction) {
		
			var active_section;
			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
			navigation_links.removeClass("selected");
			active_link.addClass("selected");

		},
		offset: '30%'
	});
	
/*-----------------------------------------------------------------------------------*/
/*	SKILL CHART
/*-----------------------------------------------------------------------------------*/
$('#skillround').waypoint(function() {
	$('#skill1').circliful();
	$('#skill2').circliful();
	$('#skill3').circliful();
	$('#skill4').circliful();

}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
});
	
/*-----------------------------------------------------------------------------------*/
/*	SMOOTH SCROLLING OF NAV BAR
/*-----------------------------------------------------------------------------------*/
	

$('.goto').click(function(e){
    $('html,body').scrollTo(this.hash,this.hash);
    e.preventDefault();
});

/*-----------------------------------------------------------------------------------*/
/*	HEADER SLIDER
/*-----------------------------------------------------------------------------------*/

$(function () {
    cbpBGSlideshow.init();
});


/*-----------------------------------------------------------------------------------*/
/*	 TESTIMONIAL 
/*-----------------------------------------------------------------------------------*/

    $("#testimonial").owlCarousel({
        autoPlay: true,
        stopOnHover: true,
        navigation: false,
        paginationSpeed: 1000,
        goToFirstSpeed: 2000,
        singleItem: true,
        autoHeight: true,
        transitionStyle: "fade"
    });

/*-----------------------------------------------------------------------------------*/
/*	WORKS SLIDER EXEMPLE 
/*-----------------------------------------------------------------------------------*/
    $(".exemple_slider").owlCarousel({
        autoPlay: true,
        stopOnHover: true,
        navigation: false,
        paginationSpeed: 1000,
        goToFirstSpeed: 2000,
        singleItem: true,
        autoHeight: true,
        transitionStyle: "fade"
    });

/*-----------------------------------------------------------------------------------*/
/*	CLIENTS SLIDER
/*-----------------------------------------------------------------------------------*/
    $("#clients").owlCarousel({
        autoPlay: true,
        stopOnHover: true,
        navigation: false,
        paginationSpeed: 1000,
        goToFirstSpeed: 2000,
        singleItem: false,
        autoHeight: true,
        transitionStyle: "fade"
    });
/*-----------------------------------------------------------------------------------*/
/*	RESPONSIVE MENU
/*-----------------------------------------------------------------------------------*/

jQuery("#collapse").hide();
jQuery("#collapse-menu").on("click", function () {

    jQuery("#collapse").slideToggle(300);
    return false;

}, function () {

    jQuery("#collapse").slideToggle(300);
    return false;
});

/*-----------------------------------------------------------------------------------*/
/*	CONTACT FORM
/*-----------------------------------------------------------------------------------*/
  $('.contactForm').submit(function(){
		//send the ajax request
		var name = $('#cname').val();
		$.post('email.php',{name:$('#cname').val(),
						  email:$('#cemail').val(),
						  subject:$('#csubject').val(),
						  message:$('#cmessage').val()},
	
		//return the data
		function(data){alert('hh');
		  //hide the graphic$('.loader').append(data).fadeIn(400);
		  $("#sendmessage").addClass("show");	
		  $(".contactForm").addClass("js-hidden");
		});
		//stay on the page
		return false;
	}); 

/*-----------------------------------------------------------------------------------*/
/*	CONTACT SECTION MOVE BACKGROUND IMAGE 
/*-----------------------------------------------------------------------------------*/

	var bg = $(".info-container");
    bg.mousemove(function(event) {
		var xPos = event.pageX;
		TweenLite.to(bg, .5, {css:{backgroundPosition:xPos + "px"}});
	});

/*-----------------------------------------------------------------------------------*/
/*	GOOGLE MAP
/*-----------------------------------------------------------------------------------*/

// Google Maps
	// Creating a LatLng object containing the coordinate for the center of the map
	var posLatitude = $('#googlemap').data('position-latitude'),
		posLongitude = $('#googlemap').data('position-longitude'),
		latlng = new google.maps.LatLng(posLatitude,posLongitude);
	var mapstyles = [ { "stylers": [ { "invert_lightness": true }, { "weight": 0.1 }, {"featureType":"road.highway"},{ "hue": "#000000" }, { "visibility": "on" }, { "saturation": -100 }, { "lightness": -15 }, { "gamma": 1.18 } ] } ];

	// Creating an object literal containing the properties we want to pass to the map
	var options = {
		zoom: 15, // This number can be set to define the initial zoom level of the map
		center: latlng,
		mapTypeControlOptions: {  
        	mapTypeIds: ['Styled']  
		},
		mapTypeId: 'Styled',
		mapTypeControl: false,
	  	scaleControl: false,
	  	streetViewControl: false,
		panControl: true,
	  	disableDefaultUI: true,
	};
	var map = new google.maps.Map(document.getElementById('googlemap'), options),
		styledMapType = new google.maps.StyledMapType(mapstyles, { name: 'Styled' }),
		markerImage = $('#googlemap').data('marker-img'),
		markerWidth = $('#googlemap').data('marker-width'),
		markerHeight = $('#googlemap').data('marker-height');
	map.mapTypes.set('Styled', styledMapType); 
	// Define Marker properties
	var image = new google.maps.MarkerImage(markerImage,
		// This marker is 64 pixels wide by 58 pixels tall.
		new google.maps.Size(markerWidth, markerHeight),
		new google.maps.Point(0,0),
		new google.maps.Point(18, 18)
	);
	// Add Marker
	var marker1 = new google.maps.Marker({
		position: latlng,
		map: map,
		icon: image,
		title:"Drag me!",
		animation: google.maps.Animation.DROP,
		draggable:true
	});

});



/*-----------------------------------------------------------------------------------*/
/*	PRELOADER
/*-----------------------------------------------------------------------------------*/

$(window).load(function() {
        // will first fade out the loading animation
    jQuery("#loading-animation").fadeOut();
	        // will fade out the whole DIV that covers the website.
    jQuery("#preloader").delay(600).fadeOut("slow");
  
    
});

/*-----------------------------------------------------------------------------------*/
/*	PLACEHOLDER SUPPORT IN IE
/*-----------------------------------------------------------------------------------*/
( function ($) {
'use strict';
 //placeholder support
 $(function() {
	// Invoke the plugin
	$('input, textarea').placeholder();
});
			
}( jQuery ));

/*-----------------------------------------------------------------------------------*/
/*	SEERVICE SECTION SVG LINE IE FIX
/*-----------------------------------------------------------------------------------*/
if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
   		$(".box svg line").css('stroke','none');
		$(".no-csstransforms3d .tiltview.row").css('top','20px');
		$(".no-csstransforms3d .tiltview.col").css('top','-50%');	
}
   