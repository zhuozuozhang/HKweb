var gsjj = document.getElementById("gsjj");
var gsdt = document.getElementById("gsdt");
var gscp = document.getElementById("gscp");
var gcfw = document.getElementById("gcfw");

//公司简介
$("#fun").click(function(){
		fun();
});
function fun(){
	gsjj.className="";
	gsdt.className="hide";
	gscp.className="hide";
	gcfw.className="hide";
	}
//公司动态	
$("#fun1").click(function(){
		fun1();
	});
function fun1(){
	gsjj.className="hide";
	gsdt.className="";
	gscp.className="hide";
	gcfw.className="hide";
	}
	//公司产品
$("#fun2").click(function(){
		fun2();
	});
function fun2(){
	gsjj.className="hide";
	gsdt.className="hide";
	gscp.className="";
	gcfw.className="hide";
	}
	//工程技术服务
$("#fun4").click(function(){
		fun4();		
});
function fun4(){
	gsjj.className="hide";
	gsdt.className="hide";
	gscp.className="hide";
	gcfw.className="";
	}