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
		<title>Hack'n'Idle HowTo</title>
		
	</header>

	<nav>
         <?php include("menu.php");?>
    </nav>	
	
	<main>
	<div style="height:500px; overflow:auto;">
<h1>How to play</h1>
<p>
Hack'n Idle ist ein Spiel, welches Spielern die Möglichkeit bietet, aktiv oder neben einer anderen Tätigkeit zu spielen.
</p>
<p>
Um dieses Spiel zu spielen muss Javascript aktiviert sein. 
</p>
<h2>Mainmenü</h2>
<p>
Hier wählen Spieler aus den verschiedenen Modi aus.
</p>
<h3>Der Home-Button</h3>
<p>
<img src="img/howto/home.png" alt="Der Home-Button"><br>
Der Home-Button führt den Spieler wieder ins Hauptmenu zurück.
</p>
<h3>Der Reset-Button</h3>
<p>
<img src="img/howto/Button_Reset.png" alt="Der Reset-Button"><br>
Der Reset-Button setzt den Spielstand der Spieler wieder auf den Anfang zurück.
</p>
<h3>Der Profil-Button</h3>
<p>
<img src="img/howto/Button_Profile.png" alt="Der Home-Button"><br>
Der Profil-Button zeigt Spielern die aktuellen Statistiken.
</p>
<h2>Adventure</h2>
<h3>Allgemein</h3>
<p>
<img src="img/howto/Button_Adventure.png" alt="Adventure-Modus"><br>
Der Hauptmodus des Spiels. Hier erhält der Spieler die meisten Erfahrungspunkte sowie Gold. Allerdings schlagen die Gegner jede Sekunde zurück.
</p>

<h3>Angriff</h3>
<p>
<img src="img/howto/monster.png" alt="Ansicht eines Monsters"><br>
Um einen Gegner zu besiegen müssen Spieler ihn oft genug anklicken. Der Shop stellt hierfür noch einige Upgrades sowie Heiltränke bereit.
</p>
<h3>Heiltränke</h3>
<p>
<img src="img/howto/potion_full.png" alt="Ansicht eines vollen Heiltrankes"><br>
Spieler können sich im Shop Heiltränke besorgen, jedoch nur maximal einen mit sich führen. Sollte der Heiltrank aufgebraucht sein, so können Spieler sich im Shop neu versorgen.
</p>
<h2>Training</h2>
<h3>Allgemein</h3>
<p>
<img src="img/howto/Button_Training.png" alt="Trainings-Modus"><br>
Der Trainingsmodus wurde entworfen, um Spielern die Möglichkeit zu geben, ausserhalb eines Adventures Erfahrung zu sammeln.
</p>
<h3>AutoFarmer</h3>
<p>
<img src="img/howto/upgrade_training_autofarmer.png" alt="AutoFarmer"><br>
Eine Sonderheit des Trainings stellen AutoFarmer dar. Diese können von Spielern angeheuert und verbessert werden, um einen steten Zufluss an Erfahrung zu ermöglichen. Die AutoFarmer sind nur im Trainingsmodus aktiv.
</p>
<h2>Work</h2>
<h3>Allgemein</h3>
<p>
<img src="img/howto/Button_Work.png" alt="Schürf-Modus"><br>
Der Schürfmodus wurde entworfen, um Spielern die Möglichkeit zu geben, ausserhalb eines Adventures Gold zu sammeln.
</p>
<h3>AutoFarmer</h3>
<p>
<img src="img/howto/upgrade_working_autofarmer.png" alt="AutoFarmer"><br>
Eine Sonderheit des Schürfens stellen AutoFarmer dar. Diese können von Spielern angeheuert und verbessert werden, um einen steten Zufluss an Erfahrung zu ermöglichen. Die AutoFarmer sind nur im Schürfmodus aktiv.
</p>
<h2>Shop</h2>
<h3>Allgemein</h3>
<p>
<img src="img/howto/Button_Shop.png" alt="Shop"><br>
Der Shop ist der Ort, an den sich müde Wanderer wenden, wenn ihnen die Last des Geldes zu schwer wird. Hier wird ihnen gerne geholfen.
</p>
<h3>Adventure</h3>
<p>
Hier befinden sich die Verbesserungen ausschliesslich für den Adventuremodus, namentlich Verbesserungen für das Schwert, die Rüstung und das Schild. Das Schwert verbessert den Schaden, den Spieler an den Gegnern verursachen. Die Rüstung reduziert den Schaden, den Spieler durch Gegner erleiden, während der Schild eine gewisse Chance bietet, Schaden komplett zu negieren.
</p>
<h3>Training</h3>
<p>
Hier befinden sich die Verbesserungen ausschliesslich für den Trainingsmodus. Hier lässt sich das Schwert verbessern. Eine Besonderheit dieses Modus sind AutoFarmer. Diese geben Spielern jede Sekunde Erfahrung. Im Shop lässt sich die Anzahl, sowie die Effektivität der AutoFarmer steigern.
</p>
<h3>Schürfen</h3>
<p>
Hier befinden sich die Verbesserungen ausschliesslich für den Schürfmodus. Hier lässt sich die Spitzhacke verbessern. Eine Besonderheit dieses Modus sind AutoFarmer. Diese geben Spielern jede Sekunde Gold. Im Shop lässt sich die Anzahl, sowie die Effektivität der AutoFarmer steigern.
</p>
<h3>Misc</h3>
<p>
Enthält Heiltränke und Erweiterungen für die Effektivität der Heiltränke und des Schwertes. Es kann maximal ein Heiltrank zu einem Zeitpunkt gehalten werden. Erweiterungen verbessern das Leben, welches der Heiltrank bietet, sowie den kritischen Schaden und die Chance auf denselben für das Schwert im Adcenturemodus.
</p>
</div>
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
