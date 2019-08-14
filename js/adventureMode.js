var loseTime = 0;

/**
 * @author: Alex
 */
function initAdventure() {

	stage = new createjs.Stage("game");
	stage.enableDOMEvents(true);
	stage.enableMouseOver();

	initBackground("img/adventure/background.png");

	inBattle = true;

	var title = new createjs.Text("ADVENTURE TIME", "Bold 28px Calisto MT", "#FFFFFF");
	title.x = title.y = 10;

	stage.addChild(title);

	initOpponent();
	interfaces_adventure_initStats1();
	interfaces_adventure_initStats2();
	interfaces_adventure_initBattleLog();
	initHealpot();
	backToMainButton();

	stage.update();
}

/**
 * @author: Max - Added Exception for using Potion
 */
function initHealpot() {
	if (save.player_healpotCount >= 1) {
		var image = queue.getResult("img/adventure/potion_full.png");
		potBitmap = new createjs.Bitmap(image);
	} else {
		var image = queue.getResult("img/adventure/potion_empty.png");
		potBitmap = new createjs.Bitmap(image);
	}

	healpotContainer = new createjs.Container();
	healpotContainer.x = 200;
	healpotContainer.y = 300;
	healpotContainer.addChild(potBitmap);

	healpotContainer.on("click", function() {
		if (save.player_currentHP < save.player_maxHP) {
			useHealpot();
			potBitmap.image = queue.getResult("img/adventure/potion_empty.png");

			updateStage();
		}
	});

	updateStage();
	stage.addChild(healpotContainer);
}

/**
 * @author: Alex
 */
function initOpponent() {

	var image = queue.getResult(save.enemy_imagePath);

	var bitmap = new createjs.Bitmap(image);

	//String Level und Gegnername
	var enemyName = new createjs.Text("Level " + save.enemy_id + ": " + save.enemy_name, "bold 26px Calisto MT", "#000000");
	enemyName.name = "enemyName";
	enemyName.textAlign = "center";
	enemyName.x = 400 / 2;
	enemyName.y = 0;

	//Rectangle for health-bar 1
	enemyHealthBarConstant = new createjs.Shape();
	enemyHealthBarConstant.graphics.beginFill("#1C1C1C");
	enemyHealthBarConstant.graphics.beginStroke("black");
	enemyHealthBarConstant.graphics.setStrokeStyle(2);
	enemyHealthBarConstant.snapToPixel = true;
	enemyHealthBarConstant.graphics.drawRoundRect(0, 290, 400, 30, 15);
	enemyHealthBarConstant.graphics.endFill();

	if (save.enemy_currentHP == save.enemy_maxHP) {
		//Rectangle for healthbar 2
		tmp = (save.enemy_currentHP / save.enemy_maxHP) * 400;
		enemyHealthBar = new createjs.Shape();
		enemyHealthBar.graphics.beginFill("#FF0000");
		enemyHealthBar.graphics.drawRoundRect(0, 290, tmp, 30, 15);
		enemyHealthBar.graphics.endFill();
		enemyHealthBar.name = "enemyHealthBar";
	} else {
		//Rectangle for healthbar 2
		tmp = (save.enemy_currentHP / save.enemy_maxHP) * 400;
		enemyHealthBar = new createjs.Shape();
		enemyHealthBar.graphics.beginFill("#FF0000");
		enemyHealthBar.graphics.drawRoundRectComplex(0, 290, tmp, 30, 15, 0, 0, 15);
		enemyHealthBar.graphics.endFill();
		enemyHealthBar.name = "enemyHealthBar";
	}

	//String für Gegner HP
	var enemyHealth = new createjs.Text(formatiere(save.enemy_currentHP.toString()) + " / " + formatiere(save.enemy_maxHP.toString()) + " (" + Math.round(((save.enemy_currentHP / save.enemy_maxHP) * 100)) + "%)", "bold 28px Calisto MT", "#FFFFFF");

	enemyHealth.name = "enemyHealth";
	enemyHealth.textAlign = "center";
	enemyHealth.textBaseline = "middle";
	enemyHealth.x = 400 / 2;
	enemyHealth.y = 305;

	//CONTAINER GEGNER
	enemyContainer = new createjs.Container();
	enemyContainer.x = (800 / 2) - 100;
	enemyContainer.y = 10;

	enemyContainer.addChild(bitmap, enemyName, enemyHealthBarConstant, enemyHealthBar, enemyHealth);

	enemyContainer.on("click", function() {
		attackEnemy();
		enemyHealth.text = formatiere(save.enemy_currentHP.toString()) + " / " + formatiere(save.enemy_maxHP.toString()) + " (" + Math.round((save.enemy_currentHP / save.enemy_maxHP) * 100) + "%)";

		tmp = ((save.enemy_currentHP / save.enemy_maxHP) * 400);

		//updating the life-bar each attack
		enemyHealthBar.graphics.clear();
		enemyHealthBar.graphics.beginFill("#FF0000");
		enemyHealthBar.graphics.drawRoundRectComplex(0, 290, tmp, 30, 15, 0, 0, 15);
		enemyHealthBar.graphics.endFill();

		if (save.enemy_currentHP <= 0) {
			stage.removeChild(enemyContainer);
			winBattle();
		}
		updateStage();
	});

	enemyContainer.on("mouseover", function() {
		enemyContainer.cursor = "url('sword.cur'),default";
	});

	stage.addChild(enemyContainer);
}

/**
 * @author: Alex
 */
function initAdventureLost() {
	stage = new createjs.Stage("game");
	stage.enableDOMEvents(true);
	inBattle = false;
	lostBattle = true;

	initBackground("img/adventure/background.png");

	save.enemy_currentHP = save.enemy_maxHP;

	lost = new createjs.Text("You lose!", "20px Calisto MT");
	lost.x = 250;
	lost.y = 200;
	time = new createjs.Text("" + 3000 - loseTime, "20px Calisto MT");
	time.x = 250;
	time.y = 240;

	stage.addChild(lost, time);

	stage.update();
}