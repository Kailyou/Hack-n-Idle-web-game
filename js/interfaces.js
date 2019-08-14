/*
* Interface for MainMenu
*/

/**
 *@author: Max
 */

function interfaces_StartMenu_initStats(){

	var statX = 0;
	var statY = 24;
	
	var bg =queue.getResult("img/interface/startMenuStats.png");
	var bitmap =new createjs.Bitmap(bg);
	
	
	//Player Name + lvl
	interfaces_StartMenu_p_name = new createjs.Text(save.player_name.toString() + " Lv." + save.player_level.toString() + 
													" <-> " + "Enemy Lv. "+ save.enemy_id.toString() , "bold 24px Times");
	interfaces_StartMenu_p_name.x = 10;
	interfaces_StartMenu_p_name.y = - 24;	

	interfaces_StartMenu_p_exp_left = new createjs.Text("EXP: ", "20px Courier");
	interfaces_StartMenu_p_exp_left.x = 10;
	interfaces_StartMenu_p_exp_left.y = 5;
	
	interfaces_StartMenu_p_exp_right = new createjs.Text(formatiere(save.player_currentXP.toString()) + "/" + formatiere(save.player_xpForLevelUP.toString()), "20px Courier");
	interfaces_StartMenu_p_exp_right.x = 290;
	interfaces_StartMenu_p_exp_right.y = 5;
	interfaces_StartMenu_p_exp_right.textAlign = "right";

	interfaces_StartMenu_p_health_left = new createjs.Text("HP: ", "20px Courier");
	interfaces_StartMenu_p_health_left.x = 10;
	interfaces_StartMenu_p_health_left.y = 25;
	
	interfaces_StartMenu_p_health_right = new createjs.Text(formatiere(save.player_currentHP.toString()) + "/" + formatiere(save.player_maxHP.toString()), "20px Courier");
	interfaces_StartMenu_p_health_right.x = 290;
	interfaces_StartMenu_p_health_right.y = 25;
	interfaces_StartMenu_p_health_right.textAlign = "right";

	interfaces_StartMenu_p_attack_left = new createjs.Text("Attack: ", "20px Courier");
	interfaces_StartMenu_p_attack_left.x = 10;
	interfaces_StartMenu_p_attack_left.y = 45;
	
	interfaces_StartMenu_p_attack_right = new createjs.Text(formatiere(save.sword_damage.toString()), "20px Courier");
	interfaces_StartMenu_p_attack_right.x = 290;
	interfaces_StartMenu_p_attack_right.y = 45;
	interfaces_StartMenu_p_attack_right.textAlign = "right";


	 blockChance = 0.7 - 1 / (1 + 2 * save.shield_blockValue / save.enemy_accuracy);


	interfaces_StartMenu_blockChance_left = new createjs.Text("Blockch.:", "20px Courier");
	interfaces_StartMenu_blockChance_left.x = 10;
	interfaces_StartMenu_blockChance_left.y =65;
	
	interfaces_StartMenu_blockChance_right = new createjs.Text("" + Math.round(100 * blockChance) + "%","20px Courier");
	interfaces_StartMenu_blockChance_right.x = 290;
	interfaces_StartMenu_blockChance_right.y =65;
	interfaces_StartMenu_blockChance_right.textAlign = "right";
	
	
	interfaces_StartMenu_p_gold_left = new createjs.Text("Gold: ", "20px Courier");
	interfaces_StartMenu_p_gold_left.x = 10;
	interfaces_StartMenu_p_gold_left.y = 85;
	
	interfaces_StartMenu_p_gold_right = new createjs.Text(formatiere(save.player_goldCount.toString()), "20px Courier");
	interfaces_StartMenu_p_gold_right.x = 290;
	interfaces_StartMenu_p_gold_right.y = 85;
	interfaces_StartMenu_p_gold_right.textAlign = "right";
	
	startstat_container = new createjs.Container();
	startstat_container.x=statX;
	startstat_container.y=statY;
	startstat_container.addChild(bitmap,interfaces_StartMenu_p_name,
								 interfaces_StartMenu_p_exp_left, interfaces_StartMenu_p_exp_right,
								 interfaces_StartMenu_p_health_left, interfaces_StartMenu_p_health_right,
								 interfaces_StartMenu_p_attack_left, interfaces_StartMenu_p_attack_right,
								 interfaces_StartMenu_p_gold_left, interfaces_StartMenu_p_gold_right,
								 interfaces_StartMenu_blockChance_left, interfaces_StartMenu_blockChance_right);
		  						 
	stage.addChild(startstat_container);
	
}

/**
 *@author:Maik
 */

/*
 * Interfaces for adventure-mode
 */

function interfaces_adventure_initStats1() {
	//Image
	var image = queue.getResult("img/interface/frame.png");

	var bitmap = new createjs.Bitmap(image);

	//HP
	interfaces_adventure_hp_left = new createjs.Text("HP:", "bold 22px Calisto MT");
	interfaces_adventure_hp_left.textAlign = "left";

	interfaces_adventure_hp_right = new createjs.Text(formatiere(save.player_currentHP.toString()) + " / " + formatiere(save.player_maxHP.toString()), "22px Calisto MT");
	interfaces_adventure_hp_right.textAlign = "right";

	//DMG
	interfaces_adventure_dmg_left = new createjs.Text("DMG:", "bold 22px Calisto MT");
	interfaces_adventure_dmg_left.textAlign = "left";

	interfaces_adventure_dmg_right = new createjs.Text(formatiere(save.sword_damage.toString()), "22px Calisto MT");
	interfaces_adventure_dmg_right.textAlign = "right";

	//Blockchance
	interfaces_adventure_blockChance_left = new createjs.Text("Block:", "bold 22px Calisto MT");
	interfaces_adventure_blockChance_left.textAlign = "left";

	  blockChance = 0.7 - 1 / (1 + 2 * save.shield_blockValue / save.enemy_accuracy);
	
	interfaces_adventure_blockChance_right = new createjs.Text("" + Math.round(100 * blockChance) + "%", "22px Calisto MT");
	interfaces_adventure_blockChance_right.textAlign = "right";

	//Coordinates
	interfaces_adventure_hp_left.x = 10;
	interfaces_adventure_hp_left.y = 10;
	interfaces_adventure_hp_right.x = 280;
	interfaces_adventure_hp_right.y = 10;

	interfaces_adventure_dmg_left.x = 10;
	interfaces_adventure_dmg_left.y = 40;
	interfaces_adventure_dmg_right.x = 280;
	interfaces_adventure_dmg_right.y = 40;

	interfaces_adventure_blockChance_left.x = 10;
	interfaces_adventure_blockChance_left.y = 70;
	interfaces_adventure_blockChance_right.x = 280;
	interfaces_adventure_blockChance_right.y = 70;

	adventureContainer1 = new createjs.Container();
	adventureContainer1.x = 10;
	adventureContainer1.y = 390;
	adventureContainer1.addChild(bitmap, interfaces_adventure_hp_left, interfaces_adventure_hp_right, interfaces_adventure_dmg_left, interfaces_adventure_dmg_right, interfaces_adventure_blockChance_left, interfaces_adventure_blockChance_right);

	updateStage();

	stage.addChild(adventureContainer1);
}

/**
 *@author:Maik
 */
function interfaces_adventure_initStats2() {
	//Image
	var image = queue.getResult("img/interface/frame.png");

	var bitmap = new createjs.Bitmap(image);

	//Strings
	//Level
	interfaces_adventure_level_left = new createjs.Text("Level:", "bold 22px Calisto MT");
	interfaces_adventure_level_left.textAlign = "left";

	interfaces_adventure_level_right = new createjs.Text(formatiere(save.player_level.toString()), "22px Calisto MT");
	interfaces_adventure_level_right.textAlign = "right";

	//XP
	interfaces_adventure_xp_left = new createjs.Text("XP:", "bold 22px Calisto MT");
	interfaces_adventure_xp_left.textAlign = "left";

	interfaces_adventure_xp_right = new createjs.Text(formatiere(save.player_currentXP.toString()) + " / " + formatiere(save.player_xpForLevelUP.toString()), "22px Calisto MT");
	interfaces_adventure_xp_right.textAlign = "right";

	//Gold
	interfaces_adventure_gold_left = new createjs.Text("Gold:", "bold 22px Calisto MT");
	interfaces_adventure_gold_left.textAlign = "left";

	interfaces_adventure_gold_right = new createjs.Text(formatiere(save.player_goldCount.toString()), "22px Calisto MT");
	interfaces_adventure_gold_right.textAlign = "right";

	//Coordinates
	interfaces_adventure_level_left.x = 10;
	interfaces_adventure_level_left.y = 10;
	interfaces_adventure_level_right.x = 280;
	interfaces_adventure_level_right.y = 10;

	interfaces_adventure_xp_left.x = 10;
	interfaces_adventure_xp_left.y = 40;
	interfaces_adventure_xp_right.x = 280;
	interfaces_adventure_xp_right.y = 40;

	interfaces_adventure_gold_left.x = 10;
	interfaces_adventure_gold_left.y = 70;
	interfaces_adventure_gold_right.x = 280;
	interfaces_adventure_gold_right.y = 70;

	adventureContainer2 = new createjs.Container();
	adventureContainer2.x = (800 / 2) - 50;
	adventureContainer2.y = 390;
	adventureContainer2.addChild(bitmap, interfaces_adventure_level_left, interfaces_adventure_level_right, interfaces_adventure_xp_left, interfaces_adventure_xp_right, interfaces_adventure_gold_left, interfaces_adventure_gold_right);

	updateStage();

	stage.addChild(adventureContainer2);
}

/**
 *@author:Maik
 */
function interfaces_adventure_initBattleLog() {

	//Image
	var image = queue.getResult("img/interface/battlelog.png");

	var bitmap = new createjs.Bitmap(image);

	//Text
	interfaces_adventure_battleLog = new createjs.Text(save.battleLog, "18px Calisto MT", "#000000");
	interfaces_adventure_battleLog.x = 10;
	interfaces_adventure_battleLog.y = 10;

	logContainer = new createjs.Container();
	logContainer.x = 10;
	logContainer.y = 50;
	logContainer.addChild(bitmap, interfaces_adventure_battleLog);

	stage.addChild(logContainer);

	updateStage();
}

/*
* Interfaces for trainings-mode
*/

/**
 *@author:Maik
 */
function interfaces_training_initStats() {
	//Image
	var image = queue.getResult("img/interface/frame.png");

	var bitmap = new createjs.Bitmap(image);

	//Strings
	//Level
	interfaces_training_level_left = new createjs.Text("Level:", "bold 19px Calisto MT");
	interfaces_training_level_left.textAlign = "left";

	interfaces_training_level_right = new createjs.Text(formatiere(save.player_level.toString()), "19px Calisto MT");
	interfaces_training_level_right.textAlign = "right";

	//XP
	interfaces_training_xp_left = new createjs.Text("XP:", "bold 19px Calisto MT");
	interfaces_training_xp_left.textAlign = "left";

	interfaces_training_xp_right = new createjs.Text(formatiere(save.player_currentXP.toString()) + " / " + formatiere(save.player_xpForLevelUP.toString()), "19px Calisto MT");
	interfaces_training_xp_right.textAlign = "right";

	//XP per click
	interfaces_training_xpPerClick_left = new createjs.Text("Xp per click:", "bold 19px Calisto MT");
	interfaces_training_xpPerClick_left.textAlign = "left";

	interfaces_training_xpPerClick_right = new createjs.Text(formatiere(save.training_xpPerClick.toString()), "19px Calisto MT");
	interfaces_training_xpPerClick_right.textAlign = "right";

	//Auto xp
	interfaces_training_autoXp_left = new createjs.Text("Auto xp:", "bold 19px Calisto MT");
	interfaces_training_autoXp_left.textAlign = "left";

	interfaces_training_autoXp_right = new createjs.Text(formatiere((save.training_autoFarmer_count * save.training_autoXp_xpValue).toString()), "19px Calisto MT");
	interfaces_training_autoXp_right.textAlign = "right";

	//Coordinates
	interfaces_training_level_left.x = 10;
	interfaces_training_level_left.y = 10;
	interfaces_training_level_right.x = 280;
	interfaces_training_level_right.y = 10;

	interfaces_training_xp_left.x = 10;
	interfaces_training_xp_left.y = 30;
	interfaces_training_xp_right.x = 280;
	interfaces_training_xp_right.y = 30;

	interfaces_training_xpPerClick_left.x = 10;
	interfaces_training_xpPerClick_left.y = 50;
	interfaces_training_xpPerClick_right.x = 280;
	interfaces_training_xpPerClick_right.y = 50;

	interfaces_training_autoXp_left.x = 10;
	interfaces_training_autoXp_left.y = 70;
	interfaces_training_autoXp_right.x = 280;
	interfaces_training_autoXp_right.y = 70;

	//Container for the interface
	trainingContainer = new createjs.Container();
	trainingContainer.x = (800 / 2) - 150;
	trainingContainer.y = 390;
	trainingContainer.addChild(bitmap, interfaces_training_level_left, interfaces_training_level_right, interfaces_training_xp_left, interfaces_training_xp_right, interfaces_training_xpPerClick_left, interfaces_training_xpPerClick_right, interfaces_training_autoXp_left, interfaces_training_autoXp_right);

	updateStage();

	stage.addChild(trainingContainer);
}

/*
* Interfaces for working-mode
*/

/**
 *@author:Maik
 */
function interfaces_working_initStats() {
	//Image
	var image = queue.getResult("img/interface/frame.png");

	var bitmap = new createjs.Bitmap(image);

	//Gold
	interfaces_working_gold_left = new createjs.Text("Gold:", "bold 19px Calisto MT");
	interfaces_working_gold_left.textAlign = "left";

	interfaces_working_gold_right = new createjs.Text(formatiere(save.player_goldCount.toString()), "19px Calisto MT");
	interfaces_working_gold_right.textAlign = "right";

	//Gold per click
	interfaces_working_goldPerClick_left = new createjs.Text("Gold per click:", "bold 19px Calisto MT");
	interfaces_working_goldPerClick_left.textAlign = "left";

	interfaces_working_goldPerClick_right = new createjs.Text(formatiere(save.working_goldPerClick.toString()), "19px Calisto MT");
	interfaces_working_goldPerClick_right.textAlign = "right";

	//Auto Gold
	interfaces_working_autoGold_left = new createjs.Text("Auto Gold:", "bold 19px Calisto MT");
	interfaces_working_autoGold_left.textAlign = "left";

	interfaces_working_autoGold_right = new createjs.Text(formatiere((save.working_autoFarmer_count * save.working_autoGold_goldValue).toString()), "19px Calisto MT");
	interfaces_working_autoGold_right.textAlign = "right";

	//Coordinates
	interfaces_working_gold_left.x = 10;
	interfaces_working_gold_left.y = 10;
	interfaces_working_gold_right.x = 280;
	interfaces_working_gold_right.y = 10;

	interfaces_working_goldPerClick_left.x = 10;
	interfaces_working_goldPerClick_left.y = 30;
	interfaces_working_goldPerClick_right.x = 280;
	interfaces_working_goldPerClick_right.y = 30;

	interfaces_working_autoGold_left.x = 10;
	interfaces_working_autoGold_left.y = 50;
	interfaces_working_autoGold_right.x = 280;
	interfaces_working_autoGold_right.y = 50;

	//Container for the interface
	workingContainer = new createjs.Container();
	workingContainer.x = (800 / 2) - 150;
	workingContainer.y = 390;
	workingContainer.addChild(bitmap, interfaces_working_gold_left, interfaces_working_gold_right, interfaces_working_goldPerClick_left, interfaces_working_goldPerClick_right, interfaces_working_autoGold_left, interfaces_working_autoGold_right);

	updateStage();

	stage.addChild(workingContainer);
}

/*
* Interface for the shop
*/

/**
 *@author:Maik
 */
function interfaces_shop_initStats() {
	//Image
	var image = queue.getResult("img/interface/frame.png");

	var bitmap = new createjs.Bitmap(image);

	//Gold
	interfaces_shop_gold_left = new createjs.Text("Gold:", "bold 22px Calisto MT");
	interfaces_shop_gold_left.textAlign = "left";

	interfaces_shop_gold_right = new createjs.Text(formatiere(save.player_goldCount.toString()), "22px Calisto MT");
	interfaces_shop_gold_right.textAlign = "right";

	//Coordinates
	interfaces_shop_gold_left.x = 10;
	interfaces_shop_gold_left.y = 40;
	interfaces_shop_gold_right.x = 280;
	interfaces_shop_gold_right.y = 40;

	//Container for the interface
	shopContainer = new createjs.Container();
	shopContainer.x = (800 / 2) - 150;
	shopContainer.y = 390;
	shopContainer.addChild(bitmap, interfaces_shop_gold_left, interfaces_shop_gold_right);

	updateStage();

	stage.addChild(shopContainer);
}
