<html>
<head>
	<title>level calculator</title>
	<script type="text/javascript" src="script.js"></script>
	
	<style>
	
		@import url('//fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');
	
		body {
			background: url(https://static.wolvden.com/images/backgrounds/tundra_Canada_Manitoba_LaplandRosebay.png);
    			background-size: cover;
			font-family: 'Amatic SC', cursive;
    		}
		
		h1 {
			color: #553b09;
		}
		
		table, tr, td {
			border: 1px solid black;
		}
		
		table {
			width: 80%;
		}
		
		.contbox {
			align: center;
			background: #f1ebe0ba;
			border-radius: 10px;
			padding: 15px;
		}
	</style>
	
</head>
<body align="center">

	<div class="contbox">
		<h1><u>Level Stat Calculator</u></h1>

		<table align="center">
			<tr>
				<td><span>Wolf Name</span></td>
				<td><span>Current Level</span></td>
				<td><span>Current Stats</span></td>
			</tr>
			<tr>
				<td>
					<input type="text" id="Wname">
				</td>
				<td>
					<input type="number" id="Wlvl">
				</td>
				<td>
					<input type="number" id="Wstat">
				</td>
			</tr>
		</table>
		<button style="margin-top:10px;" type="button" onclick="addwolf()">Add Wolf</button>
		<button id="cal" style="margin-top:10px;" type="button" onclick="calcwolf()">Calculate Level 20</button>

		<hr/>
		<div id="resbox" align="center">

		</div>

		<hr/>
		<h1><u>Breeding Stat Calculator</u></h1>
		It's not very accurate yet but it's here anyway so fuck it.
		literally, HAAAH.

		<table align="center">
			<tr>
				<td><span>HIGHEST STATS</span></td>
				<td><span>LOWEST STATS</span></td>
			</tr>
			<tr>
				<td>
					<input type="number" id="p1">
				</td>
				<td>
					<input type="number" id="p2">
				</td>
			</tr>
		</table>
		<button style="margin-top:10px;" type="button" onclick="lilstat()">CALCULATE THE STRENGTH OF THE CHILD</button>

		<hr/>
		<div id="genbox" align="center">

		</div>
	</div>
	
</body>
</html>
