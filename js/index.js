function init1(obj,obj1,obj2){
	iw=obj.width();
	ih=$(window).height();
	$("#container,#nei,.page").css("height",ih)
	obj1.each(function(index){
		obj1.eq(index).css({"left":iw/obj1.length*index+"px","top":0})
		obj1.eq(index).css({"background-image":"url(img/bg"+1+".jpg)","background-size":obj.width()+'px ' +ih+'px',"background-position":(0-index*iw/obj1.length)+"px"});
	})
	obj2.each(function(index){
		obj2.eq(index).css({"left":iw/obj1.length*index+"px","top":0})
		obj2.eq(index).css({"background-image":"url(img/bg"+2+".jpg)","background-size":obj.width()+'px ' +ih+'px',"background-position":(0-index*iw/obj1.length)+"px"});
		if(index%2==0){
			obj2.eq(index).css("top",(0-ih)+"px")
		}else{
			obj2.eq(index).css("top",ih+"px")
		}
	})
}
function animationL(obj,obj1,obj2,num){
		obj2.css({"background-image":"url(img/bg"+(num+1)+".jpg)"})
	obj1.each(function(index){
		obj1.eq(index).delay(index*200).animate({"opacity":0},800,function(){
			if(index%2==0){
			obj1.eq(index).css("top",(0-ih)+"px")
			}else{
				obj1.eq(index).css("top",ih+"px")
			}
			obj1.eq(index).animate({"opacity":1});
		})
	})
	obj2.each(function(index){
		obj2.eq(index).delay(index*200).animate({"top":0})
	})
}
function animationR(obj,obj1,obj2,num){
		obj2.css({"background-image":"url(img/bg"+num+".jpg)"})
	obj1.each(function(index){
		obj1.eq(index).delay(index*200).animate({"opacity":0},1000,function(){
			if(index%2==0){
			obj1.eq(index).css("top",(0-ih)+"px")
			}else{
				obj1.eq(index).css("top",ih+"px")
			}
			obj1.eq(index).css("opacity",1)
		})
	})
	obj2.each(function(index){
		obj2.eq(index).delay(index*200).animate({"top":0},1000)
	})
	
}

//线条
function liners(obj1,obj2){
	//obj1改变宽度
	//obj2改变高度
	obj1.addClass("Animater")
	addEventListener("animationend",function(){
			$(".lines span").removeClass("Animater")
		},false)
}
function autoAnimate(){
		timer=setTimeout(function(){
					liners($(".lines span"),$(".vertical"))
					dang++;
					//有 bug
					if(dang==8||dang==6){
						dang=0
					}
					if(iKey){
						iKey=0;
						animationL(oBg,oBox,oBox1,dang)
					}else{
						iKey=1;
						animationL(oBg,oBox1,oBox,dang)
					}
				if(iKey2){
					autoAnimate()
				}
			},3000)
		}		
				

