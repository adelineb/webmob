<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8" />
<meta name="author" content="Adeline BARRÉ" lang="fr" xml:lang="fr" />
<link href="../jss/style-jqm.css" rel="stylesheet" type="text/css" />
<link rel="shortcut icon" href="img/favicon.ico" />
<link rel="stylesheet"
	href="http://code.jquery.com/mobile/1.1.2/jquery.mobile-1.1.2.min.css" />
<script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
<script
	src="http://code.jquery.com/mobile/1.1.2/jquery.mobile-1.1.2.min.js"></script>
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
<script type="text/javascript" src="http://jquery-ui-map.googlecode.com/svn/trunk/ui/jquery.ui.map.js"></script>
<script src="jqm.js"></script>
<title>Bienvenue sur MyBd.fr</title>
</head>
<body>
	<!-- Page principale -->
	<div id="principal" data-role="page">
		<div data-role="header">
			<h1>MyBd.fr</h1>
			<h2>plein d'infos sur les BD</h2>
		</div>

		<nav id="menu">
			<ul data-role="listview">
				<li><a href="#recherche">Recherche de BD</a>				
				<li><a href="last.php">Les derni&egrave;res BD</a>				
				<li><a href="#gps">Au hasard</a>				
				<li><a href="legal.php">Info l&eacute;gal</a>			
			</ul>
		</nav>

		<section>
			<article>
				<h1>Bienvenue sur mybd.fr</h1>
				<p>Vous trouverez sur ce site toutes les informations utiles sur le
					monde de la bande dessin&eacute;e. Ce site est fait pour vous aider
					a trouver plein d'informations sur vos personnages de BD favoris.</p>
			</article>

			<video width="320" height="240" controls>
				<source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
					type="video/mp4">
			  <source src="http://clips.vorwaerts-gmbh.de/VfE.webm"
						type="video/webm">
			  <source src="http://clips.vorwaerts-gmbh.de/VfE.ogv"
							type="video/ogg">
			  Your browser does not support the video tag.
			
			</video>
		</section>

		<footer data-position="fixed">
			<nav data-role="navbar">			
				<ul >
					<li><a href="search.php">Recherche de BD</a>					
					<li><a href="last.php">Les derni&egrave;res BD</a>					
					<li><a href="random.php">Au hasard</a>					
					<li><a href="legal.php">Info l&eacute;gal</a>
				</ul>
				<!--  <input type="button" value="Recherche" onclick="recordFormSearch()" data-role="button" data-theme="a" data-icon="xxx">-->				
				</nav>
		</footer>
	</div>


	<!-- Page Géolocalisation -->
	<div id="gps" data-role="page">
		<div data-role="header">
			<h1>MyBd.fr</h1>
			<h2>plein d'infos sur les BD</h2>
		</div>
		<nav id="menu">
			<ul data-role="listview">
				<li><a href="#recherche">Recherche de BD</a>
				
				<li><a href="last.php">Les derni&egrave;res BD</a>
				
				<li><a href="random.php">Au hasard</a>
				
				<li><a href="legal.php">Info l&eacute;gal</a>
			
			</ul>
		</nav>

		<div id="geomap" class="map rounded">
			
		</div>
		<footer data-position="fixed">
			<nav data-role="navbar">			
				<ul>
					<li><a href="search.php">Recherche de BD</a>					
					<li><a href="last.php">Les derni&egrave;res BD</a>					
					<li><a href="random.php">Au hasard</a>					
					<li><a href="legal.php">Info l&eacute;gal</a>
				</ul>							
				</nav>
			</footer>
	</div>

	<!-- Page de recherche -->
	<div id="recherche" data-role="page" data-add-back-btn="true">
		<div data-role="header">
			<h1>MyBd.fr</h1>
			<h2>plein d'infos sur les BD</h2>
		</div>
		<section>
			<br class="clear" />
			<form method="get" class="form" action="index.php" name="rech">
				<label for="auteur">Auteur </label><input type="text" name="auteur"><br>
				<label for="nationalite">Nationalit&eacute; </label><input
					type="text" name="nationalite"><br> <label for="titre">Titre </label><input
					type="text" name="titre"><br> <label for="annee">Ann&eacute;e </label><input
					id="valeur" type="range" name="annee" min="1900" max="2013"
					onChange="updateValue()"><span id="mavaleur"></span><br> <label
					for="prix">Prix </label><input type="text" name="prix"><br> 
					<label for="disponibilite">Disponibilit&eacute; </label><input type="text"
					name="disponibilite"><br> <br class="clear" /> 
			</form>
		</section>
		<footer data-position="fixed">
			<nav data-role="navbar">			
				<ul>
					<li><a href="search.php">Recherche de BD</a>					
					<li><a href="last.php">Les derni&egrave;res BD</a>					
					<li><a href="random.php">Au hasard</a>					
					<li><a href="legal.php">Info l&eacute;gal</a>
				</ul>							
				</nav>
			</footer>
	</div>


</body>
</html>
