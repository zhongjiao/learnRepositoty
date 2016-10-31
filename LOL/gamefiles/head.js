var LW201310_Userinfo = {
	dUserId : 0,
	dArea : 0,
	dPageURI : "http://lol.qq.com/web201310/",
	dAppsAPIURI : "http://apps.game.qq.com/lol/api/v2013/",
	dCookieKey : "LOL_API_W2013_USER_",
	dCookieTime : 3600,
	init : function() {
		var self = LW201310_Userinfo;
		self.userLogininfo();
	},
	userLogininfo : function() {
		var self = LW201310_Userinfo;
		need("biz.login",function(LoginManager){
			LoginManager.checkLogin(function(){
				var cookieKey = self.dCookieKey+LoginManager.getUserUin();
				var tmp = milo.cookie.get(cookieKey);
				if(tmp) {
					var cookieValue = tmp.split(",");
					self.dUserId = cookieValue[0];
					self.dArea = cookieValue[1];
					g("jUserName").innerHTML = decodeURI(cookieValue[2]);
					g("jUserArea").innerHTML = LOLServerSelect.zoneToName(cookieValue[1]);
					g("jUserGames").innerHTML = cookieValue[5];
					g("jUserRP").innerHTML = cookieValue[6];
					g("jUserIP").innerHTML = cookieValue[7];
					g("jUserRS").innerHTML = cookieValue[8];
					g("jUserIcon").innerHTML = '<a href="'+self.dPageURI+'personal.shtml?id='+self.dUserId+'&area='+self.dArea+'"><img width="80" height="80" src="http://ossweb-img.qq.com/images/lol/img/profileicon2/profileicon'+cookieValue[4]+'.jpg" alt=""></a><span class="login-lv"><i>Lv '+cookieValue[3]+'</i></span>';
					g("jUserLoginDiv").style.display = 'none';
					g("jUserLoginedDiv").style.display = '';					
				}else{
					g("jUserLoginP").innerHTML = '您已登陆，请<a href="javascript:LW201310_Userinfo.userLogin();">选择大区</a>，或者<a href="javascript:LW201310_Userinfo.userLogout();">注销</a>';
					//self.userLogin();
				}
			});
		});
	},
	userLogin : function() {
		var self = LW201310_Userinfo;
		need(["biz.login", "biz.roleselector"], function(LoginManager, RoleSelector){
			LoginManager.init({needReloadPage:true});
			LoginManager.checkLogin(function(){
				RoleSelector.init({
					'gameId' : 'lol', 
					'isQueryRole' : true, 
					'isShutdownSubmit' : true,
					'submitEvent' : function(roleObject){
						var p1 = LoginManager.getUserUin();
						var p2 = roleObject.submitData.areaid;
						self.userBaseinfo(p1, p2);						
					}
				});
				RoleSelector.show();
			}, function(){
				LoginManager.login();
			});
		});
	},
	userBaseinfo : function(p1, p2) { 
		var self = LW201310_Userinfo;
		var cookieKey = self.dCookieKey+p1;
		var submitURI = self.dAppsAPIURI+"summoner.php?p2="+p2+"&r="+Math.random();;
		loadScript(submitURI, function(){
			var retHTML = '';
			if(0==retObj.status) {
				var data = retObj.msg;
				var cookieValue = new Array(data.info.id,data.info.area,data.info.name,data.info.level,data.info.icon,data.info.games,data.money.rp,data.money.ip,data.credit);
				milo.cookie.set(cookieKey, cookieValue.join(","), 3600, document.domain, "/", false);
				self.dUserId = cookieValue[0];
				self.dArea = cookieValue[1];
				g("jUserName").innerHTML = decodeURI(cookieValue[2]);
				g("jUserArea").innerHTML = LOLServerSelect.zoneToName(cookieValue[1]);
				g("jUserGames").innerHTML = cookieValue[5];
				g("jUserRP").innerHTML = cookieValue[6];
				g("jUserIP").innerHTML = cookieValue[7];
				g("jUserRS").innerHTML = cookieValue[8];
				g("jUserIcon").innerHTML = '<a href="'+self.dPageURI+'personal.shtml?id='+self.dUserId+'&area='+self.dArea+'"><img width="80" height="80" src="http://ossweb-img.qq.com/images/lol/img/profileicon2/profileicon'+cookieValue[4]+'.jpg" alt=""></a><span class="login-lv"><i>Lv '+cookieValue[3]+'</i></span>';
				g("jUserLoginDiv").style.display = 'none';
				g("jUserLoginedDiv").style.display = '';
				self.reloadBattlePage();
			}
		});
	},
	reloadBattlePage : function() {
		var self = LW201310_Userinfo;
		var currenturl = window.location;
		var personal = self.dPageURI + "personal.shtml";
		if(personal == currenturl.href) {
			location.reload();
		}
		//个人中心页,注销、重新登录、绑定大区后刷新一下页面,保证个人中心显示当前登录绑定的召唤师信息
		var curUrl = currenturl.pathname;
		var perUrl = '/web201310/personal.shtml';
		if(curUrl==perUrl){
			window.location.href = personal;
		}
	},
	userLogout : function() {
		var self = LW201310_Userinfo;
		need(["biz.login"], function(LoginManager){			
			LoginManager.checkLogin(function(){
				var cookieKey = self.dCookieKey+LoginManager.getUserUin();
				milo.cookie.set(cookieKey, '', 1, document.domain, "/", false);
				LoginManager.logout(function(){
					location.reload(); 
				});
			});
		});
	}
}/*  |xGv00|7c10aed6f05028707763378b4fc3d10c */