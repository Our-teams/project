$(document).ready(function(){
	$(".tubiao li").children().last().prev().click(function(){
	 $("body,html").animate({scrollTop:0},500);
	  })
})
