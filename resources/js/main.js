$(document).ready(function (){
	/* mobile_menu */
	$('#mobile_menu').meanmenu({
		
		meanScreenWidth: "767",
		meanMenuContainer: 'body',
		
		
	});
	
	/* owl-carousel for slider*/
	$('.slider_active').owlCarousel({
    loop:true,
   
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

	/* owl-carousel for project*/
	$('.project-active').owlCarousel({
    loop:true,
   
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

/* owl-carousel for blog*/
	$('.blog_active').owlCarousel({
    loop:true,
   
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

/* owl-carousel for testimonial*/
	$('.testimonial_active').owlCarousel({
    loop:true,
   
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

/* owl-carousel for sponsor*/
	$('.sponsor_active').owlCarousel({
    loop:true,

    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})


 /* video_popup */
$('.video-popup').magnificPopup({
 type: 'iframe'

}); 


});