$(document).ready(function(){
	var t=setTimeout(function(){
		$(".black").slideDown(1000).delay(200).queue(function(){
			$(".all").slideDown(1000).dequeue;
			
		});
		
	},1500)

	
	$(".close-first").on("click",function(){
		$(".black").css("display","none");
		$(".all").css("display","none");
	})
})
