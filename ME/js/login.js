	window.onload=function()
	{
		//微信登录----------------------------------------

		var weChat=getId('weChat');
		weChat.onmouseover=function()
		{
			this.style.backgroundColor='#366224';
		}
		weChat.onmouseout=function()
		{
			this.style.backgroundColor='#49892E';
		}

// 创造本地存储获取函数---------------------------------

		//验证登陆----------------------------------------

function inner()
{
	text.innerHTML='登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录';
}

		var number=getId('number');
		var password=getId('password');
		var btn=getId('btn');
		var text=getId('text');
		var timer=null;
 		var phRe=/^1[\d]{10}$/g;
		var psRe=/^[\w]{6,18}$/g;
		var att=[];
		var str=localStorage.getItem("userInfo");
		if(str==null)
		{
			att.unshift('15921408014');
			att.unshift('zhongjiao');

		}else{
			var toInfo=str.split(',');
			att.unshift('15921408014');
			att.unshift('zhongjiao');
		for (var e = 0; e < toInfo.length; e++) {
			att.push(toInfo[e]);
		}
	}

		console.log(att);
	btn.onclick=function()
	{
		if(phRe.test(number.value))
		{
			for (var i = 0; i < att.length; i++) {
				if(att[i]==number.value)
				{
					if(psRe.test(password.value))
					{
						for (var j = 0; j < att.length; j++) {
							if(att[j]==password.value)
							{
			 						window.open('../index.html');
							}else{
								clearInterval(timer);
								text.innerHTML='对不起，请重新输入密码。。';
								timer=setTimeout(inner,1000);
							}
						}
					}else{
						clearInterval(timer);
						text.innerHTML='密码有误';
	 					timer=setTimeout(inner,1000);
					}
				}else{
					clearInterval(timer);
					text.innerHTML='对不起，手机号不存在。。';
 					timer=setTimeout(inner,1000);
				}
			}
		}else{
 			text.innerHTML='手机格式错误';
 			timer=setTimeout(inner,1000);
		}

	}
	}