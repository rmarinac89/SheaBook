// Fade Hero

$(window).scroll(function(){
    $(".hero").css("opacity", 1 - $(window).scrollTop() / 850);
  });



// Change Fixed Navbar Background on Scroll
// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable.

var mainbottom = $('#main').offset().top + $('#main').height();

// on scroll 
$(window).on('scroll',function(){
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('.navbar-fixed-top').addClass('past-hero');
    } else {
        $('.navbar-fixed-top').removeClass('past-hero');
   }

});


// Push Menu

// var menuRight = document.getElementById( 'cbp-spmenu-s2' ),
// 		showRightPush = document.getElementById( 'showRightPush' ),
// 		body = document.body;

// showRightPush.onclick = function() {
// 	classie.toggle( this, 'active' );
// 	classie.toggle( body, 'cbp-spmenu-push-toleft' );
// 	classie.toggle( menuRight, 'cbp-spmenu-open' );
// 	disableOther( 'showRightPush' );
// };

// function disableOther( button ) {
// 	if( button !== 'showRightPush' ) {
// 		classie.toggle( showRightPush, 'disabled' );
// 	}
// 	else if (button == 'showRightPush') {

// 	}
// }



// Toggle between menu icon and 'x' to close menu

// $(document).ready(function(e) {
// 	$('#showRightPush').click(function() {
//     	$(this).toggleClass('ion-navicon ion-ios-close-empty');

// 	});
// });


// $(document).ready(function() {
// 	$('#showRightPush').click(function() {
//     	// $(this).toggleClass('lines-button, escape');

//    			 var menu = $('.icon-menu');
//     		menu.animate({ opacity: 0 }, 200);

//    			$('.cbp-spmenu').animate({
//       		right: "0px"
//     		}, 200);

// 	    	$('body').animate({
// 	      	left: "-285px"
// 	    	}, 200);

// 	    	$('.menu').animate({
// 		      left: "-285px"
// 		    }, 200);

// 		    $('body').animate({
// 		      left: "0px"
// 		    }, 200);

//   });
// });

$(document).ready(function() {

  /* Push the body and the nav over by 285px over */
  $('.lines-button').click(function() {
    
     var menu = $('.lines-button');
    menu.animate({ opacity: 0 }, 200);
    
    $('.cbp-spmenu').animate({
      right: "0px"
    }, 200);

    $('.cbp-spmenu-push').animate({
      left: "-240px"
    }, 200);
  });

  /* Then push them back */
  $('.ion-ios-close-outline, .animated-scroll').click(function() {
      
        var menu = $('.lines-button');
    menu.animate({ opacity: 1 }, 200);
      
    $('.cbp-spmenu').animate({
      right: "-240px"
    }, 200);

    $('.cbp-spmenu-push').animate({
      left: "0px"
    }, 200);
  });


});



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








