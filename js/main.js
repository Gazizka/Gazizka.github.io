

/*/АНИМАЦИЯ ЛОГОТИПА///////////////////////////////////*/
let typed = new Typed('#typed', { 
		    			stringsElement: '#typed-strings',
		    			typeSpeed: 200, 
		   			 	startDelay: 500, 
		    			backSpeed: 100, 
		    			loop: true 
						});

/*//////АНИМАЦИЯ ШАПКИ///////////////*/
window.onscroll = function showHeader() {
	var header = document.querySelector('.header');
	if (window.pageYOffset > 170) {
		header.classList.add('header_fixed');
	}else {
		header.classList.remove('header_fixed');
	}
}
/*СЛАЙДЕР............................................*/
$(document).ready(function(){
  $('.slider').slick({
  	dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000, 
  });
});


      



