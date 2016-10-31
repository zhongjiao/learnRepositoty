window.onload=function()
{
	var mag=getId('magnifier');
	var mag_input=getId('mag_input');
	var img=getId('img');
	mag_input.onfocus=function()
	{	
		img.src='./images/mag.png';
		css(mag_input,'width','110px')
		startMove(mag,{width:140});
		mag_input.placeholder='搜索作品、模板';
		css(mag,'background','#fff');
		css(mag_input,'color','#212122');
		css(mag_input,'background','#fff');
	}
	mag_input.onblur=function()
	{	
		img.src='./images/magnifier.png';
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

// 案例微信覆盖图-------------------------------------

var caseBar=getId('case_bar');
var caseLi=caseBar.getElementsByTagName('li');

for (var i = 0; i < caseLi.length; i++) 
{
	var caseDiv=document.createElement('div');
		css(caseDiv,'position','absolute')
		css(caseDiv,'width','195px')
		css(caseDiv,'height','195px')
		css(caseDiv,'top','0')
		css(caseDiv,'left','0')
		css(caseDiv,'opacity','0')
		css(caseDiv,'transition','all 1s')
		css(caseDiv,'filter','alpha(opacity:0)')

		caseDiv.style.background='url(./images/index/weChat.png) rgba(0,0,0,.5) no-repeat 25px 25px';

		caseLi[i].onmouseover=function()
	{
		css(caseDiv,'opacity','100')
		css(caseDiv,'filter','alpha(opacity:100)')
		this.appendChild(caseDiv);
	}
		caseLi[i].onmouseout=function()
	{
		caseDiv.style.opacity='0';
		caseDiv.style.filter='alpha(opacity:0)';
	}
}

//无缝滚动图---------------------------------------------

(function(){
	var carImg=document.getElementById('carImg');
	// console.log(carImg);
	var timer=null;
	var n=-(carImg.offsetHeight/2);
	// timer=setInterval(carousel,30)
	carImg.onmouseover=function()
	{
		clearInterval(timer);
	}
	carImg.onmouseout=function()
	{
		carousel();
	}

	carousel();

	function carousel()
	{
		clearInterval(timer);
		timer=setInterval(function(){
			if(carImg.offsetTop<=n)
		{
			carImg.style.top=0;
		}
		else
		{
			carImg.style.top=carImg.offsetTop-1+'px';
		}
		},50)
		
	}
})()

//footer  图片链接透明度----------------------------

var imgLink=document.getElementById('imgLink');
var imgoLi=imgLink.getElementsByTagName('li');
for (var i = 0; i < imgoLi.length; i++) {
	imgoLi[i].onmouseover=function()
	{
 		startMove(this,{opacity:50});
	}
	imgoLi[i].onmouseout=function()
	{
 		startMove(this,{opacity:100});
	}
}

//footer  文字链接“狼牙创意网”------------------------

var wordLink=document.getElementById('wordLink');
var wordA=wordLink.getElementsByTagName('a');
for (var i = 0; i < wordA.length; i++) {
	wordA[i].onmouseover=function()
	{
 		startMove(this,{opacity:50});
	}
	wordA[i].onmouseout=function()
	{
 		startMove(this,{opacity:100});
	}
}


// index  footer上部触摸变色------------------------------
	
	var sfree=getId('ff');
	var fFree=sfree.getElementsByTagName('a');

	for (var i = 0; i < fFree.length; i++) {
		fFree[i].onmouseover=function()
		{
			// console.log(this);
			css(this,'transition','all 0.5s')
			css(this,'backgroundColor','rgba(0,0,0,.9)')
		}		
		fFree[i].onmouseout=function()
		{
			css(this,'transition','all 0.5s')
			css(this,'backgroundColor','rgba(0,0,0,.4)')
		}
	}	

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
}////window.onload