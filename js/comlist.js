
// banner轮播
$(document).ready(function(){
		var flag=true;
		var n=0;
		var next=0;
		function tu(){
			if(!flag){
				return false;
			}
			flag=false;
			next=n+1;
			if(next>=$('#banner li').length){
				next=0;
			};
			$('.point-box .uls .lis').removeClass("active").eq(next).addClass("active")
			$('#banner li').eq(n).animate({opacity:0},2500).end().eq(next).animate({opacity:1},2500,function(){
				flag=true;
			});
			n=next;
		}
		var t=setInterval(tu,3000);
		$('#banner').mouseover(function(){
			clearInterval(t);
		}).mouseout(function(){
			t=setInterval(tu,3000);
		});
	    $('.point-box .button .right').click(function(){
	    	next=n-1;
	    	if(!flag){
				return false;
			}
			flag=false;
			if(next<0){
				next=$('#banner li').length-1;
			};
	    	$('.point-box .uls .lis').removeClass("active").eq(next).addClass("active")
			$('#banner li').eq(n).animate({opacity:0},2500).end().eq(next).animate({opacity:1},2500,function(){
				flag=true;
			});
			n=next;
	    })
	    $('.point-box .button .left').click(function(){
	    	tu();
	    })
	   var index=$(".point-box .uls .lis").index();
	     $(".point-box .uls .lis").hover(function(){
	     	 var index=$(this).index();
	     	 if(index>n){
             	if(!flag){
			    return;
			 }
			 flag=false;
			 $("#banner li").eq(n).animate({opacity:0},2500);
			 $("#banner li").eq(index).animate({opacity:1},2500,function(){
			 	flag=true;
			 })
          	 }else if(index<n){
             	if(!flag){
			    return;
			 };
			 flag=false;
			 $("#banner li").eq(n).animate({opacity:0},2500);
			 $("#banner li").eq(index).animate({opacity:1},2500,function(){
			 	flag=true;
			 })
         	 };
         	$(".point-box .uls .lis").removeClass("active").eq(index).addClass("active")
        n=index;
        next=index;
	    },function(){
	    	var index=$(this).index();
	     	 if(index>n){
             	if(!flag){
			    return;
			 }
			 flag=false;
			 $("#banner li").eq(n).animate({opacity:0},2500);
			 $("#banner li").eq(index).animate({opacity:1},2500,function(){
			 	flag=true;
			 })
          	 }else if(index<n){
             	if(!flag){
			    return;
			 };
			 flag=false;
			 $("#banner li").eq(n).animate({opacity:0},2500);
			 $("#banner li").eq(index).animate({opacity:1},2500,function(){
			 	flag=true;
			 })
         	 };
         	$(".point-box .uls .lis").removeClass("active").eq(index).addClass("active")
        n=index;
        next=index;
	    })
})


