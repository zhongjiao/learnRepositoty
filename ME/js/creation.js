window.onload=function()
{
	var mag=getId('magnifier');
	var mag_input=getId('mag_input');
	var img=getId('img');
	mag_input.onfocus=function()
	{	
		img.src='../images/mag.png';
		css(mag_input,'width','110px')
		startMove(mag,{width:140});
		mag_input.placeholder='搜索作品、模板';
		css(mag,'background','#fff');
		css(mag_input,'color','#212122');
		css(mag_input,'background','#fff');
	}
	mag_input.onblur=function()
	{	
		img.src='../images/magnifier.png';
		startMove(mag,{width:90});
		mag_input.placeholder='搜索';
		css(mag_input,'width','55px');
		css(mag,'background','#333333');
		css(mag_input,'color','#fff');
		css(mag_input,'background','#333333');
	}
// 头部悬浮箭头------------------------------------------
		var sRow=getId('suspendRow');
		var t=-20;
		var time=null;
		var sStyle=parseInt(getStyle(sRow,'top'));

	(function suspend()
		{
			if (t==-20) 
			{
				time=setInterval(function(){
					t++;
					sRow.style.top=sStyle+t+'px';
				if(t==0)
				{
					clearInterval(time);
					time=setInterval(function(){
						t--;
					sRow.style.top=sStyle+t+'px';
						if (t==-20) {
							clearInterval(time);
							suspend();
						}
					},30)
				}
			},30)
			}
		})()

//free  触摸变色----------------------------------------

	var free=getId('free');
	var aFree=free.getElementsByTagName('a');
	for (var i = 0; i < aFree.length; i++) {
		aFree[i].onmouseover=function()
		{
			css(this,'transition','all 0.5s')
			css(this,'backgroundColor','rgba(0,0,0,.9)')
		}		
		aFree[i].onmouseout=function()
		{
			css(this,'transition','all 0.5s')
			css(this,'backgroundColor','rgba(0,0,0,.5)')
		}
	}
	
	// top 中的 缩放------------------------------------

	var imgs_hov=getId('hover');
	var hov_li=imgs_hov.getElementsByTagName('li');
	for (var i = 0; i < hov_li.length; i++) {
		hov_li[i].onmouseover=function()
		{
			css(this,'transition','all 0.4s')
			css(this,'transform','scale(1.26)')
		}		
		hov_li[i].onmouseout=function()
		{
			css(this,'transition','all 0.4s')
			css(this,'transform','scale(1)')
		}
	}

//content  栏 hover  信息------------------------------

var cont=getId('cont');
var aA=cont.getElementsByTagName('a');

for (var i = 0; i < aA.length; i++) 
{
	var aImg=document.createElement('div');
		css(aImg,'position','absolute')
		css(aImg,'width','200px')
		css(aImg,'height','200px')
		css(aImg,'top','0')
		css(aImg,'left','0')
		css(aImg,'opacity','0')
		css(aImg,'transition','all 1s')
		css(aImg,'filter','alpha(opacity:0)')

		aImg.style.background='url(../images/contactUs/4.png) rgba(0,0,0,.8) no-repeat 25px 25px';

		aA[i].onmouseover=function()
	{
		css(aImg,'opacity','100')
		css(aImg,'filter','alpha(opacity:100)')
		this.appendChild(aImg);
	}
		aA[i].onmouseout=function()
	{
		aImg.style.opacity='0';
		aImg.style.filter='alpha(opacity:0)';
	}
}

// 固定悬浮框运动JS--------------------------------------

		window.onscroll=function()
	{
		var susBar=getId('susBar');
		var header=getId('header');
		var scRoll=getId('scRoll');
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		// console.log(scrollTop)
			// var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		// 侧边栏显示
		if(scrollTop>100)
		{
			startMove(susBar,{opacity:100});
		}
		else
		{
			startMove(susBar,{opacity:0});
		}
		// 导航栏变背景色
		if (scrollTop>680) 
		{
			css(header,'backgroundColor','rgba(0,0,0,1');
		}
		else
		{
			css(header,'backgroundColor','rgba(0,0,0,.5');
		}
		
	}

		
// 悬浮框点击回到顶部-------------------------------

	scRoll.onclick=function()
	{
		jump();
	}
	function jump()
	{
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			if (scrollTop<=0) 
			{
				return;
			}
			 window.scrollBy(0,-100);
			 setTimeout(jump,10);
	}
}//window.onload