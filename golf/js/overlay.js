(function() {
	var triggerBttn = document.getElementById( 'trigger-overlaycontact' ),
		overlaycontact = document.querySelector( 'div.overlaycontact' ),
		closeBttn = overlaycontact.querySelector( 'button.overlaycontact-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has( overlaycontact, 'open' ) ) {
			$('#contact .info-container .info').css('display','table-cell');
			classie.remove( overlaycontact, 'open' );
			classie.add( overlaycontact, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlaycontact, 'close' );
			};
			if( support.transitions ) {
				overlaycontact.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlaycontact, 'close' ) ) {
			classie.add( overlaycontact, 'open' );
			$('#contact .info-container .info').css('display','none');
		}
	}

	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );
})();