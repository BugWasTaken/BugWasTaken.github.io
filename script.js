

var wolfarr = [];
var i = 0;

var p1 = 0;
var p2 = 0;

function lilstat() {
	p1 = parseInt(document.getElementById('p1').value);
	p2 = parseInt(document.getElementById('p2').value);
	
	var p3 = Math.floor(((p1 + p2)/2) - ((p1 - p2)/1.45));
	
	document.getElementById('genbox').innerHTML = "<b>Approximate Offspring Stats: " + p3 + " Stats.</b>";
}


function addwolf() {
	var wolfinf = [];
	var WN = document.getElementById('Wname').value;
	wolfinf[0] = WN;
	var WL = document.getElementById('Wlvl').value;
	wolfinf[1] = WL;
	var WS = document.getElementById('Wstat').value;
	wolfinf[2] = WS;
	
	wolfarr.push(wolfinf);
	document.getElementById('resbox').innerHTML += "<p id='w" + i + "'>Wolf " + [i] + ": " + wolfarr[i][0] + " | Level<span id='wl" + i + "'>" + wolfarr[i][1] + "</span> | <span id='ws" + i + "'>" + wolfarr[i][2] + "</span> Stats.</p>";
	
	document.getElementById('Wname').value = null;
	document.getElementById('Wlvl').value = null;
	document.getElementById('Wstat').value = null;
	
	
	
	i++
	
	/*if (i >= 2) {
		document.getElementById("cal").disabled = false;
	}*/
}

function calcwolf() {
	for (i = 0; i < wolfarr.length; i++) {
		
		var looplvl = (20 - wolfarr[i][1]) + 1;
		
		for (var z = 1; z < looplvl; z++) {
			var OLV = parseInt(wolfarr[i][1]);
			var OSTAT = parseInt(wolfarr[i][2]);
			var wolflvl = OLV + 1;
			var statgain = wolflvl * 2;
			var nustat = OSTAT + statgain;
			
			wolfarr[i][1] = wolflvl;
			wolfarr[i][2] = nustat;
			console.log("lvl: " + wolfarr[i][1] + " | Stats: " + wolfarr[i][2]);
			document.getElementById("wl" + i).innerHTML = wolfarr[i][1];
			document.getElementById("ws" + i).innerHTML = wolfarr[i][2];
		}
	}
}