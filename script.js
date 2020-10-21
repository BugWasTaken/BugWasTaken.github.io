

var wolfarr = [];
var i = 0;

//STATS//
var p1str;
var p1spe;
var p1agi;
var p1wis;
var p1sma;
var p1tot;

var p2str;
var p2spe;
var p2agi;
var p2wis;
var p2sma;
var p2tot;

var ostr;
var ospe;
var oagi;
var owis;
var osma;
var otot;

function lilstat2() {
	//------------WOLF 1--------------//
	p1str = parseInt(document.getElementById('p1str').value);
	p1spe = parseInt(document.getElementById('p1spe').value);
	p1agi = parseInt(document.getElementById('p1agi').value);
	p1wis = parseInt(document.getElementById('p1wis').value);
	p1sma = parseInt(document.getElementById('p1sma').value);
	
	p1tot = p1str + p1spe + p1agi + p1wis + p1sma;
	
	//------------WOLF 2--------------//
	p2str = parseInt(document.getElementById('p2str').value);
	p2spe = parseInt(document.getElementById('p2spe').value);
	p2agi = parseInt(document.getElementById('p2agi').value);
	p2wis = parseInt(document.getElementById('p2wis').value);
	p2sma = parseInt(document.getElementById('p2sma').value);
	
	p2tot = p2str + p2spe + p2agi + p2wis + p2sma;
	
	//------------PUP-----------------//
	ostr = (p1str + p2str)/2;
	ostr = ostr - (0.10 * ostr);
	ospe = (p1spe + p2spe)/2;
	ospe = ospe - (0.10 * ospe);
	oagi = (p1agi + p2agi)/2;
	oagi = oagi - (0.10 * oagi);
	owis = (p1wis + p2wis)/2;
	owis = owis - (0.10 * owis);
	osma = (p1sma + p2sma)/2;
	osma = osma - (0.10 * osma);
	
	otot = (ostr + ospe + oagi + owis + osma) - 100;
	
	document.getElementById('p1tot').innerHTML = p1tot;
	document.getElementById('p2tot').innerHTML = p2tot;
	
	document.getElementById('ostr').innerHTML = Math.floor(ostr);
	document.getElementById('ospe').innerHTML = Math.floor(ospe);
	document.getElementById('oagi').innerHTML = Math.floor(oagi);
	document.getElementById('owis').innerHTML = Math.floor(owis);
	document.getElementById('osma').innerHTML = Math.floor(osma);
	
	document.getElementById('otot').innerHTML = Math.floor(otot);
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
