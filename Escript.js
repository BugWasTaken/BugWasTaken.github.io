var CurLVL; 	//Wolf's current level
var CurEXP; 	//Wolf's current exp count
var NextLVL;	//Level Wolf is working towards
var EmptyBar;	//Full EXP requirement for levelup
var ReqEXP; 	//Required EXP to level(EmptyBar - CurEXP)
var EnemyLVL;	//EXP of Enemy
var ReqKill;	//Required number to kill for level(ReqEXP / EnemyLVL [rounded up])

function FilltheBar() {
	CurLVL = document.getElementById("wolfLVL").value;
	CurEXP = document.getElementById("wolfEXP").value;
	
	if (CurLVL < 20 && CurLVL > 0) {
		document.getElementById("DisplayText").innerHTML = "ayy";
	} else {
		document.getElementById("DisplayText").innerHTML = "Fuck Off";
	}
	
	if (CurLVL == 1) {
		EmptyBar = 100;
	}else if (CurLVL == 2) {
		EmptyBar = 156;
	}else if (CurLVL == 3) {
		EmptyBar = 289;
	}else if (CurLVL == 4) {
		EmptyBar = 548;
	}else if (CurLVL == 5) {
		EmptyBar = 975;
	}else if (CurLVL == 6) {
		EmptyBar = 1612;
	}else if (CurLVL == 7) {
		EmptyBar = 2501;
	}else if (CurLVL == 8) {
		EmptyBar = 3684;
	}else if (CurLVL == 9) {
		EmptyBar = 5203;
	}else if (CurLVL == 10) {
		EmptyBar = 7100;
	}else if (CurLVL == 11) {
		EmptyBar = 9417;
	}else if (CurLVL == 12) {
		EmptyBar = 12196;
	}else if (CurLVL == 13) {
		EmptyBar = 15479;
	}else if (CurLVL == 14) {
		EmptyBar = 19308;
	}else if (CurLVL == 15) {
		EmptyBar = 23725;
	}else if (CurLVL == 16) {
		EmptyBar = 28772;
	}else if (CurLVL == 17) {
		EmptyBar = 34491;
	}else if (CurLVL == 18) {
		EmptyBar = 40924;
	}else if (CurLVL == 19) {
		EmptyBar = 48113;
	}
	
	NextLVL = CurLVL + 1;
	console.log(EmptyBar);
	ReqEXP = EmptyBar - CurEXP;
	console.log(ReqEXP);
	
	document.getElementById("DisplayText").innerHTML = "To reach the next level:<br/>";
	
	EnemyLVL = 13;
	ReqKill = Math.ceil(ReqEXP / EnemyLVL);
	document.getElementById("DisplayText").innerHTML += "LVL 1: x" + ReqKill + "<br/>OR<br/>";
	EnemyLVL = 17;
	ReqKill = Math.ceil(ReqEXP / EnemyLVL);
	document.getElementById("DisplayText").innerHTML += "LVL 2: x" + ReqKill + "<br/>OR<br/>";
	EnemyLVL = 73;
	ReqKill = Math.ceil(ReqEXP / EnemyLVL);
	document.getElementById("DisplayText").innerHTML += "LVL 3: x" + ReqKill + "<br/>OR<br/>";
	EnemyLVL = 105;
	ReqKill = Math.ceil(ReqEXP / EnemyLVL);
	document.getElementById("DisplayText").innerHTML += "LVL 4|5: x" + ReqKill + "<br/>OR<br/>";
	EnemyLVL = 148;
	ReqKill = Math.ceil(ReqEXP / EnemyLVL);
	document.getElementById("DisplayText").innerHTML += "LVL 6: x" + ReqKill + "<br/>OR<br/>";
	EnemyLVL = 188;
	ReqKill = Math.ceil(ReqEXP / EnemyLVL);
	document.getElementById("DisplayText").innerHTML += "LVL 7: x" + ReqKill + "<br/>OR<br/>";
	EnemyLVL = 225;
	ReqKill = Math.ceil(ReqEXP / EnemyLVL);
	document.getElementById("DisplayText").innerHTML += "LVL 8: x" + ReqKill + "<br/>OR<br/>";
	EnemyLVL = 242;
	ReqKill = Math.ceil(ReqEXP / EnemyLVL);
	document.getElementById("DisplayText").innerHTML += "LVL 9: x" + ReqKill + "<br/>OR<br/>";
	EnemyLVL = 254;
	ReqKill = Math.ceil(ReqEXP / EnemyLVL);
	document.getElementById("DisplayText").innerHTML += "LVL 10: x" + ReqKill + "<br/>OR<br/>";
	EnemyLVL = 300;
	ReqKill = Math.ceil(ReqEXP / EnemyLVL);
	document.getElementById("DisplayText").innerHTML += "LVL 11|12: x" + ReqKill + "<br/>OR<br/>";
	EnemyLVL = 333;
	ReqKill = Math.ceil(ReqEXP / EnemyLVL);
	document.getElementById("DisplayText").innerHTML += "LVL 13: x" + ReqKill + "<br/>OR<br/>";
	EnemyLVL = 490;
	ReqKill = Math.ceil(ReqEXP / EnemyLVL);
	document.getElementById("DisplayText").innerHTML += "LVL 14|15: x" + ReqKill + "<br/>OR<br/>";
	EnemyLVL = 570;
	ReqKill = Math.ceil(ReqEXP / EnemyLVL);
	document.getElementById("DisplayText").innerHTML += "LVL 16|17|18: x" + ReqKill + "<br/>OR<br/>";
	EnemyLVL = 652;
	ReqKill = Math.ceil(ReqEXP / EnemyLVL);
	document.getElementById("DisplayText").innerHTML += "LVL 19: x" + ReqKill + "<br/>OR<br/>";
	EnemyLVL = 700;
	ReqKill = Math.ceil(ReqEXP / EnemyLVL);
	document.getElementById("DisplayText").innerHTML += "LVL 20: x" + ReqKill;
	
}