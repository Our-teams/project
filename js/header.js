$(function(){

	var that;
	$(".type").click(function(){
		var index=$(this).index();
		$(".act").removeClass("headermove").eq(index-1).addClass("headermove");
		that=index;
	});
	
	
//		$(".type").hover(function(){
//		var index=$(this).index();
//		$(".act").removeClass("headermove").eq(index-1).addClass("headermove");
//	},function(){
//		var index=$(this).index();
//		if(index-1==that){
//			return;
//		}
//		$(".act").removeClass("headermove").eq(that-1).addClass("headermove");
//	});
})
