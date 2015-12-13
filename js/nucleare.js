var isTouch = window.DocumentTouch && document instanceof DocumentTouch;

function scrollHeader() {
    // Has scrolled class on header
    var zvalue = $(document).scrollTop();
    if ( zvalue > 75 )
        $("#header").addClass("scrolled");
    else
        $("#header").removeClass("scrolled");
}

jQuery(document).ready(function($){

    // ON SCROLL EVENTS
    if (!isTouch){
        $(document).scroll(function() {
            scrollHeader();
        });
    };

    // TOUCH SCROLL
    $(document).on({
        'touchmove': function(e) {
            scrollHeader(); // Replace this with your code.
        }
    });

    //Smooth scroll to top
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
    // Responsive Menu

});

(function($) {
	"use strict";
	
		$(document).ready(function() {
		
		/*-----------------------------------------------------------------------------------*/
		/*  Home icon in main menu
		/*-----------------------------------------------------------------------------------*/
			var items = $( '.main-navigation li:first-of-type a' );
			
			items.each( function() {
				if ( "Home" === $( this ).text() ) {
					$( this ).prepend( '<i class="fa fa-home space-right"></i>' );
				}
			} );
			
		/*-----------------------------------------------------------------------------------*/
		/*  If the Tagcloud widget exist or Edit Comments Link exist
		/*-----------------------------------------------------------------------------------*/ 
			if ( $( '.comment-metadata' ).length ) {
				$('.comment-metadata').addClass('small-part');
			}
			if ( $( '.reply' ).length ) {
				$('.reply').addClass('small-part');
			}

			
		/*-----------------------------------------------------------------------------------*/
		/*  Detect Small Browser Window
		/*-----------------------------------------------------------------------------------*/ 
			if ( $( window ).width() > 579 ) {
				
				/* Scroll To Top */ 
				
				$(window).scroll(function(){
					if ($(this).scrollTop() > 700) {
						$( '.to-top' ).fadeIn();
					} 
					else {
						$( '.to-top' ).fadeOut();
					}
				}); 
				$( '.to-top' ).click(function(){
					$( "html, body" ).animate({ scrollTop: 0 }, 1000);
					return false;
				});

			}
			/** comments */
			$('body').on('click', '.comment-link a', function(e) {
				e.preventDefault();
				if ($('#jscomments').length > 0) {
				    $('html, body').animate({
				        scrollTop: $("#jscomments").offset().top
				    }, 1000);
				}
				return false;
			});
		});
})(jQuery);
/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
( function($) {
	"use strict";
	$(document).ready(function() {
		var container, button, menu;

		container = document.getElementById( 'site-navigation' );
		if ( ! container ) {
			return;
		}

		button = container.getElementsByTagName( 'button' )[0];
		if ( 'undefined' === typeof button ) {
			return;
		}

		menu = container.getElementsByTagName( 'ul' )[0];

		// Hide menu toggle button if menu is empty and return early.
		if ( 'undefined' === typeof menu ) {
			button.style.display = 'none';
			return;
		}

		menu.setAttribute( 'aria-expanded', 'false' );

		if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
			menu.className += ' nav-menu';
		}

		button.onclick = function() {
			if ( -1 !== container.className.indexOf( 'toggled' ) ) {
				container.className = container.className.replace( ' toggled', '' );
				button.setAttribute( 'aria-expanded', 'false' );
				menu.setAttribute( 'aria-expanded', 'false' );
			} else {
				container.className += ' toggled';
				button.setAttribute( 'aria-expanded', 'true' );
				menu.setAttribute( 'aria-expanded', 'true' );
			}
		};
	});
} )(jQuery);


