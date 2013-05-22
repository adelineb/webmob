<html>
<head>
<link rel="stylesheet" href="jss/style.css" type="text/css">
<link rel="shortcut icon" href="img/favicon.ico">
<title></title>
</head>
<body>
	<div class="wrapper">
		<a href="index.php" id="header"> <img src="img/logo-72.png">
			<div class="titre">
				<h1>MyBd.fr</h1>
				<h2>plein d'infos sur les BD</h2>
			</div>
		</a>
	</div>
	<br class="clear" />

	<div class="wrapper">
		<div id="menu">
			<ul>
				<li><a href="search.php">Recherche de BD</a>
				<li><a href="last.php">Les derni&egrave;res BD</a>
				<li><a href="random.php">Au hasard</a>
				<li><a href="legal.php">Info l&eacute;gal</a>
			</ul>
		</div>
	</div>
	<br class="clear" />


	<div id="toto" class="wrapper">
		<form method="POST" action="index.php">
			Auteur : <input type="text" name="auteur"><br>
			Nationalit&eacute; : <input type="text" name="nationalite"><br>
			Titre : <input type="text" name="titre"><br>
			Ann&eacute;e : <input type="text" name="annee"><br>
			Prix : <input type="text" name="prix"><br>
			Disponibilit&eacute; : <input type="text" name="disponibilite"><br>
			<br>
			<input type="submit" value="Recherche">
		</form>
	</div>
	
		
	<div class="wrapperf">
		<div id="footer">
			<ul>
				<li><a href="search.php">Recherche de BD</a>
				<li><a href="last.php">Les derni&egrave;res BD</a>
				<li><a href="random.php">Au hasard</a>
				<li><a href="legal.php">Info l&eacute;gal</a>
			</ul>
		</div>
	</div>
</body>
</html>
