$(document).ready(function(){
	//alert("文档已加载完毕");
	/*$("div").click(function(){
		$(this).hide();//点击隐藏方法；
	});*///给对象加click事件；
	$(".hello:eq(0)").css("color","blue");
	$(".hello:not('.hello:eq(0)')").hover(function() {
		$(this).css("color","red");
	}, function() {
		$(this).css("color","");
	});

//垂直菜单：
	$(".main>a,.hmain>a").click(function() {
		$(this).next().slideToggle();
		$(this).parent().siblings().children('ul').slideUp();
	}).hover(function() {
		$(this).css("background","#A1A1A1")
	}, function() {
		$(this).css("background","#CCC")		
	});;
	$(".main li").hover(function() {
		$(this).css("background","#1EBFD3")
	}, function() {
		$(this).css("background","#3BD3B6")
	});
//水平菜单：
	$(".hmain").hover(function() {
		$(".hmain ul").stop(false, true);
		$(this).children('ul').slideDown();
	},function() {
		$(".hmain ul").stop(false, true);
		$(this).children('ul').slideUp();
	});
//选项卡
//原生js：
/*	var oBtn=document.getElementsByClassName("btn")
	var oDiv=document.getElementsByClassName("div")
	for (var i = 0; i < oBtn.length; i++) {
		oBtn[i].onclick=function() {
			for (var i = 0; i < oBtn.length; i++) {
			oBtn[i].style.background="#ccc";
			oDiv[i].style.display="none";
		}
			this.style.background="#947F7F";
			oDiv[$(this).index()].style.display="block";	
		}
	};*/
//jQuery：
	$(".btn").click(function() {
		$("button").css("background","#CCC")
		$(this).css("background","#947F7F")
		$(".div").css("display","none")
		$(".div").eq($(this).index()).css("display","block")
	});
});