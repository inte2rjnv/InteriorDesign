
//header固定topbar
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100){
			$(".navList").addClass('navBorder');
			$(".bg1").addClass('nav1');

			$(".contact").css("margin-top","10px");

		}else{
			$(".navList").removeClass("navBorder");
			$(".bg1").removeClass('nav1');

			$(".contact").css("margin-top","");

			
		}
	});
});

//gototop
$(function(){
	$('.gototop').on('click',function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop:0
		},900);
	});

	window.addEventListener('scroll', function(){
		if(document.documentElement.scrollTop < 100){
			document.querySelector('.gototop').style.display = 'none';
		}else{
			document.querySelector('.gototop').style.display = '';
		}

	});
});

//漢堡選單menu open
 // hambager menu open
$(function(){
    $('.hamburg').on('click',function(){
        $('.mobileMenu').addClass('active')
    });
 });
// hambager menu close
$(function(){
	$('.menuClose>i').on('click',function(){
		$('.mobileMenu').removeClass('active')
	});
});
