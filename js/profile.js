/**
 * @author: Maik
 */
function initProfile() {

	stage = new createjs.Stage("game");
	stage.enableDOMEvents(true);

	profile_initOverall();
}

/**
 * @author: Maik
 */
function profile_initOverall() {

	stage.removeAllChildren();

	initBackground("img/profile/background.jpg");

	// TITLE
	var profile_title = new createjs.Text("STATISTIC TIME", "Bold 28px Calisto MT", "#FFFFFF");
	profile_title.x = profile_title.y = 10;

	stage.addChild(profile_title);

	//BUTTONS
	profileButtons();

	//HEADER 1 - PLAYER
	var profile_header = new createjs.Text("Overall", "bold 26px Calisto MT");
	profile_header.x = 10;
	profile_header.y = 150;

	//-----------------------------MAXS---------------------------------
	//Maximal clicks
	var profile_maxClicks_left = new createjs.Text("Max clicks:", "20px Calisto MT");
	profile_maxClicks_left.x = 10;
	profile_maxClicks_left.y = 190;
	profile_maxClicks_left.textAlign = "left";

	var profile_maxClicks_right = new createjs.Text("" + (save.adventure_maxClicks + save.training_maxClicks + save.working_maxClicks), "20px Courier");
	profile_maxClicks_right.x = 450;
	profile_maxClicks_right.y = 190;
	profile_maxClicks_right.textAlign = "right";

	//max gold earned
	var profile_maxGoldEarned_left = new createjs.Text("Max gold:", "20px Calisto MT");
	profile_maxGoldEarned_left.x = 10;
	profile_maxGoldEarned_left.y = 210;
	profile_maxGoldEarned_left.textAlign = "left";

	var profile_maxGoldEarned_right = new createjs.Text("" + (save.adventure_maxGold + save.working_maxGold), "20px Courier");
	profile_maxGoldEarned_right.x = 450;
	profile_maxGoldEarned_right.y = 210;
	profile_maxGoldEarned_right.textAlign = "right";

	//max xp earned
	var profile_maxXPEarned_left = new createjs.Text("Max xp:", "20px Calisto MT");
	profile_maxXPEarned_left.x = 10;
	profile_maxXPEarned_left.y = 230;
	profile_maxXPEarned_left.textAlign = "left";

	var profile_maxXPEarned_right = new createjs.Text("" + (save.adventure_maxXP + save.training_maxXp), "20px Courier");
	profile_maxXPEarned_right.x = 450;
	profile_maxXPEarned_right.y = 230;
	profile_maxXPEarned_right.textAlign = "right";

	//max crit
	var profile_maxCritDone_left = new createjs.Text("Max critical:", "20px Calisto MT");
	profile_maxCritDone_left.x = 10;
	profile_maxCritDone_left.y = 250;
	profile_maxCritDone_left.textAlign = "left";

	var profile_maxCritDone_right = new createjs.Text("" + save.player_maxCritDone, "20px Calisto MT");
	profile_maxCritDone_right.x = 450;
	profile_maxCritDone_right.y = 250;
	profile_maxCritDone_right.textAlign = "right";

	//-----------------------------UPGRADES---------------------------------

	//sword upgraded
	var profile_swordUpgraded_left = new createjs.Text("Sword upgraded:", "20px Calisto MT");
	profile_swordUpgraded_left.x = 10;
	profile_swordUpgraded_left.y = 290;
	profile_swordUpgraded_left.textAlign = "left";

	var profile_swordUpgraded_right = new createjs.Text("" + save.sword_upgraded, "20px Calisto MT");
	profile_swordUpgraded_right.x = 450;
	profile_swordUpgraded_right.y = 290;
	profile_swordUpgraded_right.textAlign = "right";

	//armor upgraded
	var profile_armorUpgraded_left = new createjs.Text("Armor upgraded:", "20px Calisto MT");
	profile_armorUpgraded_left.x = 10;
	profile_armorUpgraded_left.y = 310;
	profile_armorUpgraded_left.textAlign = "left";

	var profile_armorUpgraded_right = new createjs.Text("" + save.armor_upgraded, "20px Calisto MT");
	profile_armorUpgraded_right.x = 450;
	profile_armorUpgraded_right.y = 310;
	profile_armorUpgraded_right.textAlign = "right";

	//shield upgraded
	var profile_shieldUpgraded_left = new createjs.Text("Shield upgraded:", "20px Calisto MT");
	profile_shieldUpgraded_left.x = 10;
	profile_shieldUpgraded_left.y = 330;
	profile_shieldUpgraded_left.textAlign = "left";

	var profile_shieldUpgraded_right = new createjs.Text("" + save.shield_upgraded, "20px Calisto MT");
	profile_shieldUpgraded_right.x = 450;
	profile_shieldUpgraded_right.y = 330;
	profile_shieldUpgraded_right.textAlign = "right";

	//Healpots upgraded
	var profile_healpotsUpgraded_left = new createjs.Text("Healpots upgraded:", "20px Calisto MT");
	profile_healpotsUpgraded_left.x = 10;
	profile_healpotsUpgraded_left.y = 350;
	profile_healpotsUpgraded_left.textAlign = "left";

	var profile_healpotsUpgraded_right = new createjs.Text("" + save.others_healPot_upgraded, "20px Calisto MT");
	profile_healpotsUpgraded_right.x = 450;
	profile_healpotsUpgraded_right.y = 350;
	profile_healpotsUpgraded_right.textAlign = "right";

	//Healpots bought
	var profile_healpotsBought_left = new createjs.Text("Healpots bought:", "20px Calisto MT");
	profile_healpotsBought_left.x = 10;
	profile_healpotsBought_left.y = 370;
	profile_healpotsBought_left.textAlign = "left";

	var profile_healpotsBought_right = new createjs.Text("" + save.shop_maxHealPotsBought, "20px Calisto MT");
	profile_healpotsBought_right.x = 450;
	profile_healpotsBought_right.y = 370;
	profile_healpotsBought_right.textAlign = "right";

	stage.addChild(profile_header, profile_maxClicks_left, profile_maxClicks_right, profile_maxGoldEarned_left, profile_maxGoldEarned_right, profile_maxXPEarned_left, profile_maxXPEarned_right, profile_maxCritDone_left, profile_maxCritDone_right, profile_swordUpgraded_left, profile_swordUpgraded_right, profile_armorUpgraded_left, profile_armorUpgraded_right, profile_shieldUpgraded_left, profile_shieldUpgraded_right, profile_healpotsUpgraded_left, profile_healpotsUpgraded_right, profile_healpotsBought_left, profile_healpotsBought_right);

	backToMainButton();

	stage.update();
}

/**
 * @author: Maik
 */
function profile_initAdventure() {

	stage.removeAllChildren();

	initBackground("img/profile/background.jpg");

	// TITLE
	var profile_title = new createjs.Text("STATISTIC TIME", "Bold 28px Calisto MT", "#FFFFFF");
	profile_title.x = profile_title.y = 10;

	stage.addChild(profile_title);

	//BUTTONS
	profileButtons();

	//HEADER 1 - PLAYER
	var profile_header = new createjs.Text("Adventure", "bold 26px Calisto MT");
	profile_header.x = 10;
	profile_header.y = 150;

	//-----------------------------1st block---------------------------------
	//Clicks done
	var profile_clicksDone_left = new createjs.Text("Clicks done:", "20px Calisto MT");
	profile_clicksDone_left.x = 10;
	profile_clicksDone_left.y = 190;
	profile_clicksDone_left.textAlign = "left";

	var profile_clicksDone_right = new createjs.Text("" + save.adventure_maxClicks, "20px Calisto MT");
	profile_clicksDone_right.x = 450;
	profile_clicksDone_right.y = 190;
	profile_clicksDone_right.textAlign = "right";

	//-----------------------------2nd block---------------------------------
	//Monster defeated
	var profile_monsterDefeated_left = new createjs.Text("Monster defeated:", "20px Calisto MT");
	profile_monsterDefeated_left.x = 10;
	profile_monsterDefeated_left.y = 230;
	profile_monsterDefeated_left.textAlign = "left";

	var profile_monsterDefeated_right = new createjs.Text("" + (save.enemy_id - 1), "20px Calisto MT");
	profile_monsterDefeated_right.x = 450;
	profile_monsterDefeated_right.y = 230;
	profile_monsterDefeated_right.textAlign = "right";

	//-----------------------------3rd block---------------------------------
	//Gold earned
	var profile_goldEarned_left = new createjs.Text("Gold earned:", "20px Calisto MT");
	profile_goldEarned_left.x = 10;
	profile_goldEarned_left.y = 270;
	profile_goldEarned_left.textAlign = "left";

	var profile_goldEarned_right = new createjs.Text("" + save.adventure_maxGold, "20px Calisto MT");
	profile_goldEarned_right.x = 450;
	profile_goldEarned_right.y = 270;
	profile_goldEarned_right.textAlign = "right";

	//Average gold earned
	var profile_averageGold_left = new createjs.Text("Average gold per monster:", "20px Calisto MT");
	profile_averageGold_left.x = 10;
	profile_averageGold_left.y = 290;
	profile_averageGold_left.textAlign = "left";

	if (save.adventure_maxGold == 0 || save.enemy_id - 1 == 0) {
		var profile_averageGold_right = new createjs.Text("0", "20px Calisto MT");
	} else {
		var profile_averageGold_right = new createjs.Text("" + Math.round(100 * save.adventure_maxGold / (save.enemy_id - 1)) / 100, "20px Calisto MT");
	}
	profile_averageGold_right.x = 450;
	profile_averageGold_right.y = 290;
	profile_averageGold_right.textAlign = "right";

	//-----------------------------4rd block---------------------------------
	//XP earned
	var profile_xpEarned_left = new createjs.Text("XP earned:", "20px Calisto MT");
	profile_xpEarned_left.x = 10;
	profile_xpEarned_left.y = 330;
	profile_xpEarned_left.textAlign = "left";

	var profile_xpEarned_right = new createjs.Text("" + save.adventure_maxXP, "20px Calisto MT");
	profile_xpEarned_right.x = 450;
	profile_xpEarned_right.y = 330;
	profile_xpEarned_right.textAlign = "right";

	//Average xp earned
	var profile_averageXP_left = new createjs.Text("Average XP per monster:", "20px Calisto MT");
	profile_averageXP_left.x = 10;
	profile_averageXP_left.y = 350;
	profile_averageXP_left.textAlign = "left";

	if (save.adventure_maxXP == 0 || save.enemy_id - 1 == 0) {
		var profile_averageXP_right = new createjs.Text("0", "20px Calisto MT");
	} else {
		var profile_averageXP_right = new createjs.Text("" + Math.round(100 * save.adventure_maxXP / (save.enemy_id - 1)) / 100, "20px Calisto MT");
	}

	profile_averageXP_right.x = 450;
	profile_averageXP_right.y = 350;
	profile_averageXP_right.textAlign = "right";

	stage.addChild(profile_header, profile_clicksDone_left, profile_clicksDone_right, profile_monsterDefeated_left, profile_monsterDefeated_right, profile_goldEarned_left, profile_goldEarned_right, profile_averageGold_left, profile_averageGold_right, profile_xpEarned_left, profile_xpEarned_right, profile_averageXP_left, profile_averageXP_right);

	backToMainButton();

	stage.update();
}

/**
 * @author: Maik
 */
function profile_initTraining() {

	stage.removeAllChildren();

	initBackground("img/profile/background.jpg");

	// TITLE
	var profile_title = new createjs.Text("STATISTIC TIME", "Bold 28px Calisto MT", "#FFFFFF");
	profile_title.x = profile_title.y = 10;

	stage.addChild(profile_title);

	//BUTTONS
	profileButtons();

	//HEADER 1 - PLAYER
	var profile_header = new createjs.Text("Training", "bold 26px Calisto MT");
	profile_header.x = 10;
	profile_header.y = 150;

	//-----------------------------1st block---------------------------------
	//Clicks made
	var profile_clicksMade_left = new createjs.Text("Clicks done:", "20px Calisto MT");
	profile_clicksMade_left.x = 10;
	profile_clicksMade_left.y = 190;
	profile_clicksMade_left.textAlign = "left";

	var profile_clicksMade_right = new createjs.Text("" + save.training_maxClicks, "20px Calisto MT");
	profile_clicksMade_right.x = 450;
	profile_clicksMade_right.y = 190;
	profile_clicksMade_right.textAlign = "right";

	//-----------------------------2nd block---------------------------------
	//XP earned
	var profile_xpEarned_left = new createjs.Text("XP earned:", "20px Calisto MT");
	profile_xpEarned_left.x = 10;
	profile_xpEarned_left.y = 230;
	profile_xpEarned_left.textAlign = "left";

	var profile_xpEarned_right = new createjs.Text("" + save.training_maxXp, "20px Calisto MT");
	profile_xpEarned_right.x = 450;
	profile_xpEarned_right.y = 230;
	profile_xpEarned_right.textAlign = "right";

	//XP per click
	var profile_xpPerClick_left = new createjs.Text("Average xp per click:", "20px Calisto MT");
	profile_xpPerClick_left.x = 10;
	profile_xpPerClick_left.y = 250;
	profile_xpPerClick_left.textAlign = "left";

	if (save.training_maxXp == 0 || save.training_maxClicks == 0) {
		var profile_xpPerClick_right = new createjs.Text("0", "20px Calisto MT");
	} else {
		var profile_xpPerClick_right = new createjs.Text("" + Math.round(100 * save.training_maxXp / save.training_maxClicks) / 100, "20px Calisto MT");
	}

	profile_xpPerClick_right.x = 450;
	profile_xpPerClick_right.y = 250;
	profile_xpPerClick_right.textAlign = "right";

	stage.addChild(profile_header, profile_clicksMade_left, profile_clicksMade_right, profile_xpEarned_left, profile_xpEarned_right, profile_xpPerClick_left, profile_xpPerClick_right);

	backToMainButton();

	stage.update();
}

/**
 * @author: Maik
 */
function profile_initWorking() {

	stage.removeAllChildren();

	initBackground("img/profile/background.jpg");

	// TITLE
	var profile_title = new createjs.Text("STATISTIC TIME", "Bold 28px Calisto MT", "#FFFFFF");
	profile_title.x = profile_title.y = 10;

	stage.addChild(profile_title);

	//BUTTONS
	profileButtons();

	//HEADER 1 - PLAYER
	var profile_header = new createjs.Text("Working", "bold 26px Calisto MT");
	profile_header.x = 10;
	profile_header.y = 150;

	//-----------------------------1st block---------------------------------
	//Clicks made
	var profile_clicksMade_left = new createjs.Text("Clicks done:", "20px Calisto MT");
	profile_clicksMade_left.x = 10;
	profile_clicksMade_left.y = 190;
	profile_clicksMade_left.textAlign = "left";

	var profile_clicksMade_right = new createjs.Text("" + save.working_maxClicks, "20px Calisto MT");
	profile_clicksMade_right.x = 450;
	profile_clicksMade_right.y = 190;
	profile_clicksMade_right.textAlign = "right";

	//-----------------------------2nd block---------------------------------
	//XP earned
	var profile_goldEarned_left = new createjs.Text("Gold earned:", "20px Calisto MT");
	profile_goldEarned_left.x = 10;
	profile_goldEarned_left.y = 230;
	profile_goldEarned_left.textAlign = "left";

	var profile_goldEarned_right = new createjs.Text("" + save.working_maxGold, "20px Calisto MT");
	profile_goldEarned_right.x = 450;
	profile_goldEarned_right.y = 230;
	profile_goldEarned_right.textAlign = "right";

	//XP per click
	var profile_goldPerClick_left = new createjs.Text("Average gold per click:", "20px Calisto MT");
	profile_goldPerClick_left.x = 10;
	profile_goldPerClick_left.y = 250;
	profile_goldPerClick_left.textAlign = "left";

	if (save.working_maxGold == 0 || save.working_maxClicks == 0) {
		var profile_goldPerClick_right = new createjs.Text("0", "20px Calisto MT");
	} else {
		var profile_goldPerClick_right = new createjs.Text("" + Math.round(100 * save.working_maxGold / save.working_maxClicks) / 100, "20px Calisto MT");
	}

	profile_goldPerClick_right.x = 450;
	profile_goldPerClick_right.y = 250;
	profile_goldPerClick_right.textAlign = "right";

	stage.addChild(profile_header, profile_clicksMade_left, profile_clicksMade_right, profile_goldEarned_left, profile_goldEarned_right, profile_goldPerClick_left, profile_goldPerClick_right);

	backToMainButton();

	stage.update();
}