<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta charset="utf-8" />
	<meta name="author" content="Adeline BARRÉ" lang="fr" xml:lang="fr" />
	<link href="jss/style.css" rel="stylesheet" type="text/css" />
	<link rel="shortcut icon" href="img/favicon.ico" />  
	<title>Bienvenue sur MyBd.fr</title>
    <script lang="javascript" type="text/javascript" src="jss/stockage.js"> </script>
</head>
<body>
	<header>
		<a href="index.php"> <img src="img/logo-72.png">
			<hgroup>
				<h1>MyBd.fr</h1>
				<h2>plein d'infos sur les BD</h2>
			</hgroup>
		</a>
	</header>
	<br class="clear" />

	<div class="wrapper">
		<nav id="menu">
			<ul>
				<li><a href="search.php">Recherche de BD</a>
				<li><a href="last.php">Les derni&egrave;res BD</a>
				<li><a href="random.php">Au hasard</a>
				<li><a href="legal.php">Info l&eacute;gal</a>
			</ul>
		</nav>
	</div>
	<br class="clear"/>


	<section>
	<br class="clear"/>
		<form method="get" class="form" action="index.php">
			<label for="auteur">Auteur </label><input type="text" name="auteur"><br>
			<label for="nationalite">Nationalit&eacute; </label><input type="text" name="nationalite"><br>
			<label for="titre">Titre </label><input type="text" name="titre"><br>
			<label for="annee">Ann&eacute;e </label><input type="range" name="annee" min="1900" max="2013"><br>
			<label for="prix">Prix </label><input type="text" name="prix"><br>
			<label for="disponibilite">Disponibilit&eacute; </label><input type="text" name="disponibilite"><br>
			<br class="clear"/>
			<input type="submit" value="Recherche">
		</form>
	</section>
		
	<footer>
		<nav>
			<ul>
				<li><a href="search.php">Recherche de BD</a>
				<li><a href="last.php">Les derni&egrave;res BD</a>
				<li><a href="random.php">Au hasard</a>
				<li><a href="legal.php">Info l&eacute;gal</a>
			</ul>
		</nav>
	</footer>
	</body>
</html>
