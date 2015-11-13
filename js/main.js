/* jQuery Script Goes Here */
$(document).ready(function() { //if the DOM is ready

	$('#temporary-container').load("tabs.html .tab-design-1"); // load tab-design-1 by default;

	$('body').on('click', '.tab-marker li', function() { //non css3 compliant browser fallback

		var _this = $(this); 

		var id_value = _this.children('input').attr('id'); //id_value

		var tab_content = _this.parents('.tab-menu').siblings('li').find("li." + id_value); 

		_this.css('z-index','50000').siblings('li').removeAttr('style'); //fixes the overlapping bug when using transform
		_this.children('label').addClass('animation-hingeBottom').parent('li').siblings('li').children('label').removeClass(); //add CSS3 animation, and clear all siblings animation

		tab_content.siblings('li').hide(); //change tab-content animation here and hide other siblings li of .tab-menu

		tab_content.show(); //show assigned tab-content that matches the id_value

		// $('.tab-content > div').removeClass().addClass('l-container ' + 'animation-fadeIn');


	});

	$('body').on('mouseover', '.tab-marker li', function() { //on hover animation, this destroys the z-index stacking order (bug, no known solutions for now), you can remove this

		var _this = $(this);
		_this.css('z-index','50000').siblings('li').removeAttr('style'); //fixes the overlapping bug when using transfrom
		

	});

	
	/* tab-settings, for optional - live - preview only */

	$('#tab-design-changer').on('change', function() {

	// $(window).on('load', function() {

		/* tab-design-changer */ 

		var _this = $(this);

		var no_rounded_design = ['tab-design-5']; 

		tab_design_value = $('#tab-design-changer').val();

		// tab_design_value = "tab-design-2";

		$('#temporary-container').load("tabs.html ." + tab_design_value);

		for (var x in no_rounded_design) {

			if (tab_design_value == no_rounded_design[x]) {

				$('#tab-rounding-changer').parent('div').hide();
				break;

			} else {

				$('#tab-rounding-changer').parent('div').show();

			}

		}

		_this.parents('.settings-container').find('select').not('select#tab-design-changer').prop('selectedIndex', 0); //go to closest div, find siblings (div), inside div find select, selectedIndex set to 0
		_this.closest('div').siblings('div').children('#tab-tight-options').prop('disabled', true).parent('div').css('color','gray');
		$('link#responsiveness').attr('href','css/media-stacked.css'); //reset to stacked responsiveness
		
	});

	$('#tab-spacing-changer').on('change', function() {

		/* tab-spacing-changer */
		
		var _this = $(this);
		var tab_marker = $('.tab-marker');
		var spacing_value = $('#tab-spacing-changer').val();

		tab_marker.removeClass('tab-marker-tight')
		tab_marker.addClass(spacing_value);

			if (spacing_value == "tab-marker-tight") {

				_this.parent().next('div').css('color','black').find('select').prop("disabled", false);

			} else {

				_this.parent().next('div').css('color','gray').find('select').prop("disabled", true);

			}

	});

	$('#tab-tight-options').on('change', function() {

		/* tab-spacng-changer */

		var tab_marker = $('.tab-marker');
		var option_value = $('#tab-tight-options').val();

		removeClassRegEx(tab_marker,/^tab-marker-tight-/);

		tab_marker.addClass(option_value);

		if (option_value == 'tab-marker-overlap') {

			tab_marker.removeClass('tab-marker-tight-transparent tab-marker-tight-separator').addClass('tab-marker-tight-overlap');

		}

		if (option_value == 'tab-marker-tight-separator') {

			tab_marker.removeClass('tab-marker-tight-transparent').addClass('tab-marker-tight-overlap tab-marker-tight-separator');

		}

		if (option_value == 'tab-marker-tight-transparent') {

			tab_marker.removeClass('tab-marker-tight-transparent tab-marker-tight-separator').addClass('tab-marker-tight-transparent tab-marker-tight-overlap');

		}


	});

	$('#tab-rounding-changer').on('change', function() {

		/* tab-spacng-changer */

		var _this = $(this);

		var rounding_value = _this.val();

		$('.tab-marker').removeClass('tab-marker-rounded-top')
		$('.tab-marker').addClass(rounding_value);


	});

	$('#tab-position-changer').on('change', function() {

		/* tab-position-changer */

		var _this = $(this);
		var tab_marker = $('.tab-marker');
		var position_value = _this.val();

		removeClassRegEx(tab_marker,/^tab-marker-pos/);
		tab_marker.addClass(position_value);


	});

	$('#tab-theme-changer').on('change', function() {

		var _this = $(this);
		var css_path = "css/";
		var theme_value = _this.val() + '.css';
	
		$('link#themes').attr('href', css_path + theme_value);
		
	});

	$('#tab-animation-changer').on('change', function() {

		var _this = $(this);

		var animation_value = _this.val()
	
		$('.tab-content > div').removeClass().addClass('l-container ' + animation_value);
		
	});

	$('#tab-icon-changer').on('change', function() {

		var _this = $(this);
		var tab_marker = $('.tab-marker');
		var icon_value = _this.val()
	
		removeClassRegEx(tab_marker,/^tab-marker-icon/);
		tab_marker.addClass(icon_value);
		
	});

	$('#tab-responsive-changer').on('change', function() {

		var _this = $(this);
		var css_path = "css/";
		var responsiveness_value = _this.val() + '.css';
	
		$('link#responsiveness').attr('href', css_path + responsiveness_value);
		
	});

});

	/* Custom Functions for removing specific class base from a regular expression */

	function removeClassRegEx(target_element,target_pattern) { //target pattern must be a regular expression

		var target = target_element;

		var classes = target.attr('class').split(" "); //attribute classes to array
		var pattern = target_pattern;

		for (x in classes) { //iterate each array and remove class based on the pattern match

			if (classes[x].match(pattern)) {

				target.removeClass(classes[x]);

			}

		}

	}