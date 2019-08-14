<!DOCTYPE html>
<html>
<head>
	<title> Hack'n'Idle </title>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<!--[if gte IE 9]>
  <style type="text/css">
    .gradient {
       filter: none;
    }
  </style>
<![endif]-->
</head>

<body>
<div id="wrapper" class="shadow">	

	<header>
		<title>Hack'n'Idle About Us</title>
		
	</header>

	<nav>
         <?php include("menu.php");?>
    </nav>	
	
	<main>
<h1>About us</h1>
<p>Wir sind eine kleine Gruppe Studenten an der Hochschule Trier, Studiengang Digitale Medien und Spiele, Fachrichtung Spiele, die sich für ein Projekt an diesem Spiel versuchen.<br><br>
Wir sind:<br><br>
Maik Thielen<br>
Max Nussbaum<br>
Alexander Gebenroth<br>
Simon Gillessen<br>
</p>
	</main>	
</div>	

<footer>
	<?php include("footer.php"); ?>
</footer>	
    
    <script src="//tinymce.cachefly.net/4.0/tinymce.min.js"></script>
    <script>
            tinymce.init({selector:'textarea'});
    </script>
    
</body>
</html>
