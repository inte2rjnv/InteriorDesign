
//header固定topbar
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100){
			$(".navList").addClass('navBorder');
			$(".bg1").addClass('nav1');
			$(".logo img").css({
				width:'100px',
				height:'auto',
				marginTop:'3px'
			});
			$(".contact").css("margin-top","10px");
			$(".hamburg").css("margin-top","-40px")
		}else{
			$(".navList").removeClass("navBorder");
			$(".bg1").removeClass('nav1');
			$(".logo img").css({
				width:'',
				height:'',
				marginTop:''
			});
			$(".contact").css("margin-top","");
			$(".hamburg").css("margin-top","")
			
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
