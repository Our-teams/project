$(document).ready(function(){
	$(".tubiao li").last().prev().click(function(){
	 $("body,html").animate({scrollTop:0},500);
	  })
})
