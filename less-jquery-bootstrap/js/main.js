//scroll function
$(function(){
	$('.page-scroll a').bind('click', function(){
		var pointOnPage = $(this);
		$('html, body').stop().animate({
			scrollTop: $(pointOnPage.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	})
});

$(window).scroll(function(){
	if($('.navbar').offset().top > 50){
		$('.navbar-fixed-top').addClass('top-nav-collapse');
	}

	else{

		$('.navbar-fixed-top').removeClass('top-nav-collapse');}
});

