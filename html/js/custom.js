$(function() {
	$.fn.strech_text = function(){
    var elmt          = $(this),
        cont_width    = elmt.width(),
        txt           = elmt.html(),
        one_line      = $('<span class="stretch_it">' + txt + '</span>'),
        nb_char       = elmt.text().length,
        spacing       = cont_width/nb_char,
        txt_width;
    
    elmt.html(one_line);
    txt_width = one_line.width();
    
    if (txt_width < cont_width){
        var  char_width     = txt_width/nb_char,
             ltr_spacing    = spacing - char_width + (spacing - char_width)/nb_char ; 
  
        one_line.css({'letter-spacing': ltr_spacing});
    } else {
        one_line.contents().unwrap();
        elmt.addClass('justify');
      }
	};


	$(document).ready(function () {
	    $('.header_txt').each(function(){
	        $(this).strech_text();
	    });
	});//end stretch


	/*slider*/

	var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}	

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("slider__container");
		var dots = document.getElementsByClassName("dot");

		if (n > slides.length) {
			slideIndex = 1
		}
		if (n < 1) {
			slideIndex = slides.length
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}

		slides[slideIndex-1].style.display = "block";
		dots[slideIndex-1].className+= " active";
	 }//end slider
	/*slider autotimer*/ 
	autoSlide();
	function autoSlide() {
		var i;
		var slides = document.getElementsByClassName("slider__container");
		var dots = document.getElementsByClassName("dot");
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		if (slideIndex > slides.length) { slideIndex = 1}
		slides[slideIndex-1].style.display = "block";
		dots[slideIndex-1].className+= " active";
		slideIndex++;
		setTimeout(autoSlide, 8000);	
	}//end slider autotimer

	$('.menu-toggle').click(function(){
		$(this).toggleClass('active');
		$('.menu__list').fadeToggle(400);
	});//end adaptive menu



});//end ready

 