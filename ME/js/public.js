
	function getId(id)
	{
		return document.getElementById(id);
	}

	//获取class--------------------------------------------

	function getIdClass(ID,classname)
	{
		if(document.getElementsByClassName)
		{
			return document.getElementsByClassName(classname);
		}
		//不支持的情况下
		var arr = [];

		if (document.getElementById(ID)) {
			var dom = document.getElementById(ID).document.getElementsByTagName('*');
			for(var i = 0;i<dom.length;i++)
			{
				var arrs=dom[i].className.split(' ');
					for (var j = 0; j < arrs.length; j++) {
						if(arrs[j]==classname)
						{
							arr.push(dom[i]);
						}
					}
			}
			return arr;
		}else{
			var dom = document.getElementsByTagName('*');
			for(var i = 0;i<dom.length;i++)
			{
				var ars=dom[i].className.split(' ');
					for (var j = 0; j < ars.length; j++) {
						if(ars[j]==classname)
						{
							arr.push(dom[i]);
						}
					}
			}
			return arr;
		}
	}

	var timer=null;
	var aD=null;
	var header=getId('header');
	if (header.currentStyle) 
	{
		header.style.backgroundColor='black';
	}
	else
	{
		 header.style.backgroundColor='rgba(0,0,0,.4)';
	}

//导航栏下线------------------------------------------

	var aLi=getId('list').getElementsByTagName('li');
	var aDiv=getId('list').getElementsByTagName('div');

	for (var i = 0; i < aLi.length; i++) 
	{
		aLi[i].index=i;
		aDiv[i].timer=null;
		aLi[i].onmouseover=function()
		{
				aD=aDiv[this.index];
				startMove(aD,{left:0})
		}

		aLi[i].onmouseout=function()
		{
				var aD=aDiv[this.index];
				startMove(aD,{left:-84})	
		}
	}
	
	function css(obj,name,value)
	{
		if(arguments.length==2)
		{
			return obj.style[name];
		}else{
			return obj.style[name]=value;
		}
	}

//获取元素非行间样式----------------------------

	function getStyle(obj,attr)
	{
		if(obj.currentStyle)
		{
			return obj.currentStyle[attr];
		}
		else
		{
			return getComputedStyle(obj,false)[attr];
		}
	}

// 运动函数-------------------------------

	function startMove(obj,json,fn)
	{		
		clearInterval(obj.timer)
		obj.timer=setInterval(function()
		{
			for(var arr in json)
			{
				var cur=0;
				if(arr=='opacity')
				{
					cur=Math.round(parseFloat(getStyle(obj,arr))*100);
				}
				else
				{
					cur=parseInt(getStyle(obj,arr));
				}
				// console.log(cur);
				var speed=(json[arr]-cur)/6;
				// console.log(cur);
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				// console.log(speed);
				if(cur==json[arr])
				{
					// console.log(speed);
					clearInterval(timer);
					if(fn)fn();
					// obj.style.width=iTarget+'px';
				}
				else
				{
					if(arr=='opacity')
					{
						obj.style.filter='alpha(opacity:'+(cur+speed)+')';
						obj.style.opacity=(cur+speed)/100;
					}
					// console.log(cur);
					else
					{
					obj.style[arr]=cur+speed+'px';
					}
				}
			}
		},30);
	}

//替换全局a标签中为#号的href---------------------------------------

	var aRe=/#/;
	var aGlobe=document.getElementsByTagName('a');
	for (var z = 0; z < aGlobe.length; z++) 
	{
		if(aRe.test(aGlobe[z]))
		{
			aGlobe[z].href="##";
		}
	}







