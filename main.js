$(document).ready(function() {
	var classList = ["spiderman", "ironman", "captain", "thor", "panther"];
	var swiper = new Swiper('.wrapper .swiper-container', {
	      slidesPerView: 1,
	      autoplay: true,      
	      loop: false,
	      pagination: {
	        el: '.wrapper .swiper-pagination',
	        type: 'bullets',
	        clickable: true,
	      },
	      on: {
	        init: function() {
	        	var index = this.activeIndex; //current_slide_index
	        	$(".wrapper")
	        	.removeClass(classList)
	        	.addClass(classList[index]);
	        }
	      }
	}).on('slideChange', function() {
		var index = this.activeIndex; 
    	$(".wrapper")
    	.removeClass(classList)
    	.addClass(classList[index]);

    	$(".wrapper .img-wrapper")
    	.removeClass('active')
    	.eq(index)
    	.addClass('active');
	});
	  $(window).on('resize', function() {
	    marvelHeroSlider.update();
	  });
});
  