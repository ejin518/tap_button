$(document).ready(function(){
	var cnt = 0;
		$('.tab_con').hide().eq(0).show();
		$('.tab_menu li').click(function() {
			cnt = $(this).index();
			var select = $(this).text();
			$('.tab_menu li').removeClass('on').eq(cnt).addClass('on');
			$('.tab_con').hide().eq(cnt).fadeIn();
			$('.tab_menu').removeClass('on');
		});

		$('.tab_tit').click(function(){
			$('.tab_menu').toggleClass('on');
		});
});
