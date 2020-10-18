<html>
<head>
	<title>level calculator</title>
	<script type="text/javascript" src="script.js"></script>
	
	<style>
		table, tr, td {
			border: 1px solid black;
		}
	</style>
	
</head>
<body align="center">

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
	
</body>
</html>
