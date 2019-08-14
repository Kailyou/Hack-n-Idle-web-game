<!DOCTYPE html>
<html>
<head>
	<title> Hack'n'Idle </title>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	
	<!--link href="../_shared/demo.css" rel="stylesheet" type="text/css"-->
		<script src="http://code.createjs.com/easeljs-0.7.0.min.js"></script>
		<script src="http://code.createjs.com/soundjs-0.5.2.min.js"></script>
		<script src="http://code.createjs.com/preloadjs-0.4.1.min.js"></script>

		<script src="js/startMenu.js" type="text/javascript"></script>
		<script src="js/adventureMode.js" type="text/javascript"></script>
		<script src="js/trainingMode.js" type="text/javascript"></script>
		<script src="js/workingMode.js" type="text/javascript"></script>
		<script src="js/profile.js" type="text/javascript"></script>
		<script src="js/profileButtons.js" type="text/javascript"></script>
		<script src="js/shop.js" type="text/javascript"></script>
		<script src="js/menuButtons.js" type="text/javascript"></script>
		<script src="js/shopButtons.js" type="text/javascript"></script>
		<script src="js/save.js" type="text/javascript"></script>
		<script src="js/mechanics.js" type="text/javascript"></script>
		<script src="js/interfaces.js" type="text/javascript"></script>
		<script src="js/tooltips.js" type="text/javascript"></script>
		<script src="js/preload.js" type="text/javascript"></script>

		<script>
			var stage;
			var inBattle;
			var isHitting;
			var lostBattle;
			var inTraining;
			var inWorking;
			var soundEfx;
			var soundLvlUp;

			/**
			 * @author: Alex
			 */
			function init() {
				inBattle = false;
				inTraining = false;
				isHitting = false;
				inWorking = false;
				lostBattle = false;

				createjs.Ticker.on("tick", tick);
				loadGame();
				initLoadingScreen();

				// createjs.Ticker.addEventListener("tick", tick);
				// createjs.Ticker.setFPS(40);
			}

			/**
			 * @author: Alex
			 */
			function enterState(state) {
				stage.removeAllChildren();
				stage.update();

				inBattle = false;

				saveGame();

				switch(state) {
				case "startMenu":
					initStartMenu();
					break;
				case "adventure":
					initAdventure();
					break;
				case "adventureLost":
					initAdventureLost();
					break;
				case "training":
					initTraining();
					break;
				case "working":
					initWorking();
					break;
				case "shop":
					initShop();
					break;
				case "profile":
					initProfile();
					break;
				}
			}

			/**
			 * @author: Alex
			 */
			function tick(event) {

				if (!inBattle) {
					regenerate(event.delta);

					if (lostBattle) {
						loseTimeTicker(event.delta);
					}

					if (inTraining) {
						getAutoXp(event.delta);
					}

					if (inWorking) {
						getAutoGold(event.delta);
					}

				} else {
					attackPlayer(event.delta);
				}

				stage.update(event);
				// updateStage();
				//wird nicht aufgerufen
			}

			/**
			 * @author: Alex
			 */
			function updateStage() {
				stage.update();

				saveGame();
			}

			/**
			 * @author: Alex
			 */
			function initBackground(source) {
				var image = queue.getResult(source);

				var bitmap = new createjs.Bitmap(image);

				var bg = new createjs.Container();
				bg.x = 0;
				bg.y = 0;
				bg.addChild(bitmap);

				stage.addChild(bg);
			}

			/**
			 * @author: Alex
			 */
			function saveGame() {
				var s = JSON.stringify(save);
				var a = new Date();
				a = new Date(a.getTime() + 1000 * 60 * 60 * 24 * 365);
				document.cookie = "HackNIdle=" + s + ";expires=" + a.toGMTString() + ";";
			}

			/**
			 * @author: Alex
			 */
			function loadGame() {
				if (document.cookie) {
					a = document.cookie;

					cookievalue = a.substring(a.search('=') + 1, a.length);

					save = JSON.parse(cookievalue);
				}
			}
		</script>
	
	<!--[if gte IE 9]>
  <style type="text/css">
    .gradient {
       filter: none;
    }
  </style>
<![endif]-->
</head>



<body onLoad = "init();">
<div id="wrapper" class="shadow">	

	<header>
		<title>Hack'n'Idle Game</title>
		
	</header>

	<nav>
         <?php include("menu.php");?>
    </nav>	
	
	<main>
		<div align="center">
			<canvas id="game" width="800" height="500">
				didn't work
			</canvas>	</main>	
		</div>
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