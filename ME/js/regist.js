// console.log(getId('agreement'));
var agreement=getId('agreement');
var agree_circle=getId('agree_circle');
var regist_btn=getId('regist_btn');

//微信登录
window.onload=function()
{
	var weChat=getId('weChat');
	weChat.onmouseover=function()
	{
		this.style.backgroundColor='#366224';
	}
	weChat.onmouseout=function()
	{
		this.style.backgroundColor='#49892E';
	}

var number=getId('number');//手机号
var password=getId('password');//密码
var rePass=getId('rePass');//确认密码
var text=getId('registText');//注册内容框
var re2=getId('re2');
var reCode=getId('reCode');
var timer=null;
var arr=[];
//获取各id名下的标签------------------------------
function toStorage(arrRe)
{
	return localStorage.setItem('userInfo',arrRe);
}
function inner()
{
	text.innerHTML='注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册';
}

re2.onclick=function()
{
	reCode.value='你真帅！！！';
}

	var te=localStorage.getItem('userInfo');
	// console.log(te);
	if(te != null)
	{
		var r=te.split(',');
		for (var i = 0; i < r.length; i++) {
			arr.push(r[i]);
		}
	}
console.log(arr);
agree_circle.onclick=function()
{

	if(agreement.style.display=='block')
	{
		agreement.style.display='none';
	 	regist_btn.style.background='0,0';
	 	regist_btn.style.color='#777777';
	 	regist_btn.style.cursor='not-allowed';
	 	regist_btn.onmouseover=null;
	 	regist_btn.onmouseout=null;
	 	regist_btn.onclick=null;
	 }
		else
		{
			agreement.style.display='block';
		 	regist_btn.style.color='#EAEAEA';
		 	regist_btn.style.cursor='pointer';

		 	regist_btn.onmouseover=function()
		 	{
		 		regist_btn.style.background='rgba(0,0,0,.5)';
		 	}
		 	regist_btn.onmouseout=function()
		 	{
		 		regist_btn.style.background='0,0';
		 	}

		 	regist_btn.onclick=function()
		 	{
		 		var phRe=/^1[\d]{10}$/g;
				var psRe=/^[\w]{6,18}$/g;
		 		if (phRe.test(number.value)) {
		 			arr.push(number.value);
		 			if (psRe.test(password.value)) {
		 				arr.push(password.value);
		 				if(rePass.value==password.value)
		 				{

		 					toStorage(arr);
		 					console.log(arr);
		 					var t=confirm('是否跳转到登录页')
		 					if(t)
		 					{
		 						window.open('../view/login.html');
		 					}
		 				}else{
		 					clearTimeout(timer);
			 				text.innerHTML='第二次密码有误';
			 				timer=setTimeout(inner,1000);
		 				}
		 			} else {
		 				clearTimeout(timer);
		 				text.innerHTML='密码格式有误';
		 				timer=setTimeout(inner,1000);
		 			}

		 		} else {
		 			text.innerHTML='手机格式错误';
		 			timer=setTimeout(inner,1000);
		 		}

			}
		}
	}

}

