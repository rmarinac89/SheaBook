// Fade Hero on scroll


$(document).ready(function() {
	$(window).scroll(function(){
    $(".hero").css("opacity", 1 - $(window).scrollTop() / 850);
  });	
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

$(document).ready(function() {

  /* Slide the nav over by 285px over */
  $('.lines-button').click(function() {
    
     var menu = $('.lines-button');
    menu.animate({ opacity: 0 }, 200);
    
    $('.cbp-spmenu').animate({
      right: "0px"
    }, 1400, 'easeOutExpo');


  });

  /* Then slide nav back */
  $('.ion-ios-close-outline, .animated-scroll').click(function() {
   
        var menu = $('.lines-button');
    menu.animate({ opacity: 1 }, 200);
      
    $('.cbp-spmenu').animate({
      right: "-240px"
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


// Smooth Scroll

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);

        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').delay(500).animate({
                 scrollTop: target.offset().top-74
             }, 1000, 'easeInOutCubic');
            return false;
        }
    }
});

