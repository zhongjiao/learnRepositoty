window.onload=function()
{
	//申请注册师
	var apply=getId('apply');
	
	apply.onmouseover=function()
	{
		// console.log(this);
		css(this,'transition','all 0.5s')
		css(this,'backgroundColor','rgba(0,0,0,.9)')
	}		
	apply.onmouseout=function()
	{
		css(this,'transition','all 0.5s')
		css(this,'backgroundColor','rgba(0,0,0,.5)')
	}

// 搜索框------------------------------------------

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

//下拉图片列表---------------------------------------------
//获取class 兼容
function getClass(classname)
{
	var arr=[];
	var tag=document.getElementsByTagName('*');
	for (var i = 0; i < tag.length; i++) 
	{

		var clName=tag[i].className;
		var a=clName.split(' ');
		for (var l = 0; l < a.length; l++) {

			if (a[l]==classname) 
			{
				arr.push(tag[i]);
			}
		}

	}
	return arr;
}

var downRow=getClass('downRow');//获取下拉图片箭头标签
var inban=getClass('info_banner');//获取下拉图片祖父元素标签
var inbanLi=getClass('spLi');//获取祖父元素下的li
var inImgs=getClass('info_imgs');//获取父元素标签
var info=getClass('info');
var inImgsaA=[];//创建空数组，以存取点击消失的a标签中的img
var content=getClass('content')[0];
var info_banner=getClass('info_banner')[0];
for (var i = 0; i < inImgs.length; i++) 
{
	inImgsaA[i]=inImgs[i].getElementsByTagName('a');//获得所有a标签
}

(function(){
for (var j = 0; j < inbanLi.length; j++) 
{
	inbanLi[j].index=j;//添加属性索引值
	inbanLi[j].onclick=function()
	{
		if (inbanLi[this.index].style.height=='266px') 
		{
			downRow[this.index].src='../images/tribe/downRow.png'
			startMove(inbanLi[this.index],{height:96})
			var aaa=inImgsaA[this.index];

			for (var k = 0; k < aaa.length; k++) 
				{
					aaa[k].style.visibility='visible';
				}

			content.style.height=content.offsetHeight-170+'px';
			info_banner.style.height=info_banner.offsetHeight-170+'px';
		}
		else
		{
			downRow[this.index].src='../images/tribe/upRow.png'
			startMove(inbanLi[this.index],{height:266})
			var aaa=inImgsaA[this.index];
			for (var k = 0; k < aaa.length; k++) 
				{
					aaa[k].style.visibility='hidden';
				}
			content.style.height=content.offsetHeight+170+'px';
			info_banner.style.height=info_banner.offsetHeight+170+'px';
		}
	}
}
})()

//固定窗口-------------------------------------------------

// window.onscroll=function()
// 	{
		
// 		// var fixedBar=getId('fixedBar');
// 		// // var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
// 		// // console.log(scrollTop)
// 		// 	// var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
// 		// // 侧边栏显示
// 		// if(scrollTop>200)
// 		// {
// 		// 	fixedBar.style.position='fixed';
// 		// 	fixedBar.style.right='0';
// 		// 	fixedBar.style.top='55px';
// 		// }
		
// 	}
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