var best=angular.module("best",[]);
best.controller('controller',function($scope)
{
	$scope.password={
		fullname:function(){
			var colorchanger;
			var obj;
			obj=$scope.password;
			if ((/^[a-zA-Z]+$/i.test(obj.user))) {
				var str=obj.user;
				if(str.length==1){
					document.getElementById('h1').style.display='block';
					obj.colorchanger="#ff5454";
					return "10 seconds to hack";
				}if(str.length<3){
					obj.colorchanger="#ff5454";
					return "20 seconds to hack";
				}if(str.length<5){
					obj.colorchanger="#ff5454";
					return "30 seconds to hack";
				}if(str.length<7){
					obj.colorchanger="#ff5454";
					return "40 seconds to hack";
				}if(str.length<9){
					obj.colorchanger="#5eb8d6";
					return "50 seconds to hack";
				}if(str.length<11){
					obj.colorchanger="#5eb8d6";
					return "1 minute to hack";
				}if(str.length<13){
					obj.colorchanger="#5eb8d6";return "2 minutes to hack";
				}if(str.length<15){
					obj.colorchanger="#5eb8d6";return "5 minutes to hack";
				}if(str.length<17){
					obj.colorchanger="#ffaa0e";return "10 minutes to hack";
				}if(str.length<19){
					obj.colorchanger="#ffaa0e";return "1 day to hack";
				}if(str.length<21){
					obj.colorchanger="#ffaa0e";return "10 days to hack";
				}if(str.length>21){
					obj.colorchanger="#5ce85c";return "forever";
				}
			}if (/^[0-9]+$/i.test(obj.user)) {
				var str=obj.user;if(str.length==1){
					obj.colorchanger="#ff5454";return "5 seconds to hack";
				}if(str.length<3){
					obj.colorchanger="#ff5454";return "15 seconds to hack";
				}if(str.length<5){
					obj.colorchanger="#ff5454";return "25 seconds to hack";
				}if(str.length<7){
					obj.colorchanger="#ff5454";return "35 seconds to hack";
				}if(str.length<9){
					obj.colorchanger="#5eb8d6";return "45 seconds to hack";
				}if(str.length<11){
					obj.colorchanger="#5eb8d6";return "2 minute to hack";
				}if(str.length<13){
					obj.colorchanger="#5eb8d6";return "5 minutes to hack";
				}if(str.length<15){
					obj.colorchanger="#5eb8d6";return "7 minutes to hack";
				}if(str.length<17){
					obj.colorchanger="#ffaa0e";return "10 minutes to hack";
				}if(str.length<19){
					obj.colorchanger="#ffaa0e";return "1 day to hack";
				}if(str.length<21){
					obj.colorchanger="#ffaa0e";return "10 days to hack";
				}if(str.length>21){
					obj.colorchanger="#5ce85c";return "forever";
				}
			}if (/^[a-zA-Z0-9]+$/i.test(obj.user)) {
				var str=obj.user;if(str.length==1){
					obj.colorchanger="#ff5454";return "15 seconds to hack";
				}if(str.length<3){
					obj.colorchanger="#ff5454";return "35 seconds to hack";
				}if(str.length<5){
					obj.colorchanger="#ff5454";return "55 seconds to hack";
				}if(str.length<7){
					obj.colorchanger="#ff5454";return "2 minutes to hack";
				}if(str.length<9){
					obj.colorchanger="#5eb8d6";return "5 minutes to hack";
				}if(str.length<11){
					obj.colorchanger="#5eb8d6";return "10 minute to hack";
				}if(str.length<13){
					obj.colorchanger="#5eb8d6";return "1 hour to hack";
				}if(str.length<15){
					obj.colorchanger="#5eb8d6";return "1 day to hack";
				}if(str.length<17){
					obj.colorchanger="#ffaa0e";return "5 days to hack";
				}if(str.length<19){
					obj.colorchanger="#ffaa0e";return "1 week to hack";
				}if(str.length<21){
					obj.colorchanger="#ffaa0e";return "1 year to hack";
				}if(str.length>21){
					obj.colorchanger="#5ce85c";return "forever";
				}
			}
			else{
				var str=obj.user;
				if(str.length==0){
					obj.colorchanger="#3CC8B1";
				}
			}
		}
	};
});