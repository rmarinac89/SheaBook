// Fade Hero

$(window).scroll(function(){
    $(".hero").css("opacity", 1 - $(window).scrollTop() / 850);
  });


// Push Menu

var menuRight = document.getElementById( 'cbp-spmenu-s2' ),
		showRightPush = document.getElementById( 'showRightPush' ),
		body = document.body;

showRightPush.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( body, 'cbp-spmenu-push-toleft' );
	classie.toggle( menuRight, 'cbp-spmenu-open' );
	disableOther( 'showRightPush' );
};

function disableOther( button ) {
	if( button !== 'showRightPush' ) {
		classie.toggle( showRightPush, 'disabled' );
	}
	else if (button == 'showRightPush') {
		
	}
}

// Slick Slider

$(document).ready(function(){
		$('.slick-slider').slick({
	  dots: true,
	  arrows:false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  pauseOnHover:false,
	  autoplaySpeed: 5000
	});

});

// Click on icon menu and have it transition after into an x icon.





