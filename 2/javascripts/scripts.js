$(document).ready(function(){
	jQuery.fn.exists = function(){return this.length>0;}
	if ($('#carousel').exists()) {
		$('#carousel').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			itemWidth: 65,
			touch: true,
			asNavFor: '#slider'
		});
	}
	if ($('#slider').exists()) {
		$('#slider').flexslider({
			animation: "slide",
			controlNav: false,
			directionNav: false,
			animationLoop: false,
			slideshow: false,
			touch: true,
			sync: "#carousel"
		});
	}
	if ($('.slideshow').exists()) {
		 $('.slideshow').flexslider({
			animation: "slide",
			controlNav: true,
			directionNav: false,
			touch: true,
			slideshow: true,
slideshowSpeed: 5000
		});
	}
	if ($('.accordion').exists()) {
		$(".accordion").accordion({
			heightStyle: "content"
		});
	}
	if ($('.sel').exists()) {
		customForm.lib.domReady(function(){
			customForm.customForms.replaceAll();
		});
	}
	if ($('.chk').exists()) {
		customForm.lib.domReady(function(){
			customForm.customForms.replaceAll();
		});
	}
	if ($('#bottom-slider').exists()) {
		$('#bottom-slider').flexslider({
			animation: "slide",
			controlNav: false,
			directionNav: false,
			animationLoop: false,
			slideshow: false,
			itemWidth: 65,
			touch: true,
			asNavFor: '#top-slider'
		});
	}
	if ($('#top-slider').exists()) {
		$('#top-slider').flexslider({
			animation: "slide",
			controlNav: false,
			directionNav: false,
			animationLoop: false,
			slideshow: false,
			touch: true,
			sync: "#bottom-slider"
		});
	}
	if ($('.tabset').exists()) {
		$(".tabset").tabs();
	}
	if ($('.fancybox').exists()) {
		$(".fancybox").fancybox();
	}
	if ($('.pop-box').exists()) {
		$('header .block .login li.cart a').click(function(){
			$('.pop-box').fadeToggle()
		})
		$('.pop-box .close').click(function(){
			$('.pop-box').fadeOut()
		})
	}
	if ($('.img-zoom').exists()) {
		//$('.img-zoom').zoome();
		$('.img-zoom').jqzoom({
            zoomType: 'standard',
            lens:true,
            preloadImages: false,
			title: false
        });
	}
	if ($('.mobile-nav .open-close').exists()) {
		$('.mobile-nav .open-close').click(function(){
			$(this).parents('.mobile-nav').toggleClass("active");
			$('.drop').slideToggle();
		});
	}
  $('mobile-nav-wrap a, .mobile-nav .open-close').click(function(e){
     e.stopPropagation();
  });
	if ($('#lbl-01').exists() && $('#shipping-information').exists()) {
		if ($('#lbl-01').is(':checked')) {
			$('#shipping-information').find('.shipping-col').fadeOut(function(){
				$('#shipping-information').find('strong.text').fadeIn()
			});
		} else {
			$('#shipping-information').find('strong.text').fadeOut(function(){
				$('#shipping-information').find('.shipping-col').fadeIn();
			});
		}
		$('#lbl-01').change(function(){
			if ($('#lbl-01').is(':checked')) {
				$('#shipping-information').find('.shipping-col').fadeOut(function(){
					$('#shipping-information').find('strong.text').fadeIn()
				});
			} else {
				$('#shipping-information').find('strong.text').fadeOut(function(){
					$('#shipping-information').find('.shipping-col').fadeIn();
				});
			}
		});
	}
	if ($('#save-details').exists()) {
		if ($('#save-details').is(':checked')) {
			$('.login-row').fadeIn();
		} else {
			$('.login-row').fadeOut();
		}
		$('#save-details').change(function(){
			if ($(this).is(':checked')) {
				$('.login-row').fadeIn();
			} else {
				$('.login-row').fadeOut();
			}
		});
	}
	if ($('#etalage').exists()) {
		$('#etalage').etalage();
	}
});