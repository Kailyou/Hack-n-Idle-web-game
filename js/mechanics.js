var regenTime = 0;
var attackTime = 0;
var autoXpTime = 0;
var autoGoldTime = 0;
var test = false;

var data = {
	images : ["img/animations/hitAnimation/1.png", "img/animations/hitAnimation/2.png", "img/animations/hitAnimation/3.png", "img/animations/hitAnimation/4.png", "img/animations/hitAnimation/5.png"],
	frames : {
		width : 100,
		height : 100
	},
	animations : {
		attack : [0, 4]
	}
};

var data2 = {
	images : ["img/animations/trainAnimation/1.png", "img/animations/trainAnimation/2.png", "img/animations/trainAnimation/3.png", "img/animations/trainAnimation/4.png", "img/animations/trainAnimation/5.png"],
	frames : {
		width : 100,
		height : 100
	},
	animations : {
		attack : [0, 4]
	}
};

var data3 = {
	images : ["img/animations/Sword1.png"],
	frames : {
		width : 192,
		height : 192
	},
	animations : {
		attack : [0, 5]
	}
};

/**************************************************************************************************
 *********************************PLAYER***********************************************************
 *************************************************************************************************/

/**
 * @author: Maik
 * @author: Max - Fixed problem of overHP
 */
function useHealpot() {

	if (save.player_healpotCount > 0) {
		var res = save.player_currentHP + save.player_healpotStrength;

		if (res >= save.player_maxHP) {
			save.player_currentHP = save.player_maxHP;
		} else {
			save.player_currentHP += save.player_healpotStrength;
		}

		save.player_healpotCount--;

		if (inBattle) {
			interfaces_adventure_hp_right.text = formatiere(save.player_currentHP.toString()) + " / " + formatiere(save.player_maxHP.toString());
		}
	}
}

/**
 * @author: Maik
 */
function gainXp(value) {

	//Update values
	save.player_currentXP += value;

	//Check if levelUp or not
	while (save.player_currentXP >= save.player_xpForLevelUP) {
		levelUP();
	}
}

/**
 * @author: Maik
 * @author: Max - ...
 */
function getAutoXp(delta) {
	autoXpTime += delta;

	if (autoXpTime > 1000) {

		//update values
		autoXpTime -= 1000;
		gainXp(save.training_autoFarmer_count * save.training_autoXp_xpValue);

		//update profile
		save.training_maxXp += (save.training_autoFarmer_count * save.training_autoXp_xpValue);

		//update interfaces
		interfaces_training_level_right.text = formatiere(save.player_level.toString());
		interfaces_training_xp_right.text = formatiere(save.player_currentXP.toString()) + " / " + formatiere(save.player_xpForLevelUP.toString());
	};
}

/**
 * @author: Maik
 */
function updateGold(value) {

	//Update Values
	save.player_goldCount += value;
}

/**
 * @author: Max
 */
function getAutoGold(delta) {

	autoGoldTime += delta;

	if (autoGoldTime > 1000) {

		//update values
		autoGoldTime -= 1000;
		updateGold(save.working_autoFarmer_count * save.working_autoGold_goldValue);

		//update profile
		save.working_maxGold += (save.working_autoFarmer_count * save.working_autoGold_goldValue);

		//update interfaces
		interfaces_working_gold_right.text = formatiere(save.player_goldCount.toString());
		interfaces_working_autoGold_right = formatiere((save.working_autoFarmer_count * save.working_autoGold_goldValue).toString()) + " Gold/sec";
	};
}

/**
 * @author: Maik
 * @author: Max - added levelup sound
 */
function levelUP() {

	//Update values
	save.player_currentXP -= save.player_xpForLevelUP;
	save.player_level++;
	save.player_xpForLevelUP *= save.player_xpForLevelUP;
	save.others_healPot_buyingCosts *= 2;

	save.sword_damage = Math.round(save.sword_damage * 1.1)+1;
	save.armor_healthPoints = Math.round(save.armor_healthPoints * 1.1);
	save.player_currentHP += save.armor_healthPoints;
	save.player_maxHP += save.armor_healthPoints;
	save.shield_blockValue = Math.round(save.armor_healthPoints * 1.1);

	soundLvlUp.play({
		volume : 0.3
	});
}

/**
 * @author: Alex
 * @author: Maik - added critical dmg with a chance of 1%.
 * @author: Maik - added counter for the log, only criticals will be visible in the log.
 * @author: Maik - added the critical value to a variable which saves the max crit made.
 * @author: Maik - added counter for the max clicks made in the adventure-mode
 */
function attackEnemy() {
	var tmp = rand(0, 99);

	soundEfx.play({
		volume : 1
	});

	//animation
	hitAnimation();

	//checks if log already has 10 entrie
	if (save.logCounter == 10) {
		save.logCounter = 0;
		save.battleLog = "LOG";
		interfaces_adventure_battleLog.text = save.battleLog;
	}

	if (tmp == 50) {

		var criticalDamage = save.sword_damage * save.player_criticalFactor;

		save.enemy_currentHP -= criticalDamage;

		if (criticalDamage > save.player_maxCritDone) {
			save.player_maxCritDone = criticalDamage;
		}

		save.battleLog += "\n CRITICAL " + criticalDamage + " damage";
		interfaces_adventure_battleLog.text = save.battleLog;
		save.logCounter++;
	} else {
		save.enemy_currentHP -= save.sword_damage;
	}

	save.adventure_maxClicks++;
}

/**
 * @author: Alex
 * @author: Maik - added the gold and xp values to variables which countes the maximum get.
 */
function winBattle() {// anpassen

	gainXp(save.enemy_xpGain);
	updateGold(save.enemy_goldDrop);

	//Update stats
	save.adventure_maxXP += save.enemy_xpGain;
	save.adventure_maxGold += save.enemy_goldDrop;

	//Update interfaces
	interfaces_adventure_gold_right.text = formatiere(save.player_goldCount.toString());
	interfaces_adventure_level_right.text = formatiere(save.player_level.toString());
	interfaces_adventure_xp_right.text = formatiere(save.player_currentXP.toString()) + " / " + formatiere(save.player_xpForLevelUP.toString());

	changeEnemy();
	initOpponent();
}

/**
 * @author: Alex
 */
function loseBattle() {
	save.player_currentHP = 0;
	enterState("adventureLost");
}

/**
 * @author: Maik
 */
function train() {

	gainXp(save.training_xpPerClick);

	//animation
	// animatePlayerAttack();
	hitAnimation();

	//update profile
	save.training_maxXp += save.training_xpPerClick;
	save.training_maxClicks++;

	//update interfaces
	interfaces_training_level_right.text = formatiere(save.player_level.toString());
	interfaces_training_xp_right.text = formatiere(save.player_currentXP.toString()) + " / " + formatiere(save.player_xpForLevelUP.toString());

	updateStage();
}

/**
 * @author: Maik
 */
function work() {

	updateGold(save.working_goldPerClick);

	//animation
	hitAnimation();

	//update profile
	save.working_maxGold += save.working_goldPerClick;
	save.working_maxClicks++;

	//update interfaces
	interfaces_working_gold_right.text = formatiere(save.player_goldCount.toString());

	updateStage();
}

/**
 * @author: Alex
 */
function regenerate(delta) {
	regenTime += delta;

	if (regenTime > 2000) {
		regenTime -= 2000;

		if (save.player_currentHP < save.player_maxHP) {
			save.player_currentHP++;
		}

		if (save.enemy_currentHP < save.enemy_maxHP) {
			save.enemy_currentHP++;
		}
	}
	interfaces_StartMenu_p_health_right.text =save.player_currentHP + "/" + save.player_maxHP;
}

/**********************************************************************************************
 *********************************ENEMIES******************************************************
 *********************************************************************************************/

/**
 *@author: Maik
 */
function changeEnemy() {

	save.enemy_id++;

	//-----------------------------------NORMAL-MONSTER--------------------------------------------------

	var monster_normal_titles = new Array("aggressive", "attractive", "average", "beautiful", "blue-eyed", "bloody", "blushing", "bright", "colourful", "cute", "dark", "dull", "elegant", "excited", "fancy", "filthy", "glamorous", "gorgeous", "handsome", "homely", "long", "magnificent", "misty", "muddy", "plain", "poised", "shiny", "smoggy", "spotless", "stormy", "strange", "ugly", "ugliest", "unusual", "wide-eyed", "alive", "annoying", "better", "brainy", "busy", "careful", "clever", "crazy", "curious", "dead", "different", "expensive", "famous", "fragile", "worried", "gifted", "helpful", "helpless", "horrible", "important", "inexpensive", "modern", "mushy", "poor", "tired", "puzzled", "real", "rich", "shy", "thoughtless", "sleepy", "stupid", "talented", "tough", "uninterested", "wandering", "wild", "angry", "annoyed", "arrogant", "bewildered", "confused", "crazy", "creepy", "scary", "dangerous", "depressed", "disgusted", "disturbed", "embarrassed", "evil", "foolish", "helpless", "homeless", "hungry", "lazy", "lonely", "mysterious", "nasty", "nervous", "squishy");

	var monster_normal_names = new Array("Betaquad", "Deathhand", "Kraknong", "Planfly", "Mechcrab", "Sleimy", "Schildy");

	var monster_normal_paths = new Array("img/adventure/monsterImages/1 - Betaquad.png", "img/adventure/monsterImages/2 - Deathhand.png", "img/adventure/monsterImages/3 - Kraknong.png", "img/adventure/monsterImages/4 - Planfly.png", "img/adventure/monsterImages/5 - Mechcrab.png", "img/adventure/monsterImages/6 - Sleimy.png", "img/adventure/monsterImages/7 - Schildy.png");

	//-----------------------------------BOSS-MONSTER--------------------------------------------------

	var monster_boss_titles = new Array("ultimate", "legendary", "difficult", "impossible", "powerful", "awful");

	var monster_boss_names = new Array("Mechcrab");

	var monster_boss_paths = new Array("img/adventure/monsterImages/5 - Mechcrab.png");

	//Reset Battlelog
	save.battleLog = "LOG";
	interfaces_adventure_battleLog.text = save.battleLog;
	save.logCounter = 0;

	//Reset attacktimer
	attackTime = 0;

	//First checks if it is a normal-, or a boss-monster!
	if (save.enemy_id % 10 == 0) {
		save.enemy_isBoss = true;
	} else {
		save.enemy_isBoss = false;
	}

	//Eeasteregg - Missingno will appear with a chance of 0,1%.
	var tmp = rand(1, 999);

	if (tmp == 500) {
		save.enemy_name = "Missingno";
		save.enemy_imagePath = "img/adventure/monsterImages/Special - Missingno.png";
		alert("Numbers are not needed to defeat noobs like you!");

		if (save.enemy_isBoss) {
			save.enemy_maxHP *= 4;
			save.enemy_attackDamage *= 4;
			save.enemy_accuracy = 2 * (save.enemy_accuracy + 1);
			save.enemy_goldDrop *= 4;
			save.enemy_xpGain *= 4;
		} else {
			save.enemy_maxHP *= 2;
			save.enemy_attackDamage *= 2;
			save.enemy_accuracy += 1;
			save.enemy_xpGain *= 2;
		}

		save.enemy_currentHP = save.enemy_maxHP;
		return;
	}

	if (save.enemy_isBoss) {
		//Generate the boss-name
		var tmp = rand(0, monster_boss_titles.length - 1);
		var tmp2 = rand(0, monster_boss_names.length - 1);
		save.enemy_name = monster_boss_titles[tmp];
		save.enemy_name += " " + monster_boss_names[tmp2];
		save.enemy_imagePath = monster_boss_paths[tmp2];

		//update the values
		save.enemy_maxHP *= 4;
		save.enemy_attackDamage *= 2;
		save.enemy_accuracy *= 2;
		save.enemy_goldDrop *= 4;
		save.enemy_xpGain *= 4;
	} else {
		//Generate the normal-name
		var tmp = rand(0, monster_normal_titles.length - 1);
		var tmp2 = rand(0, monster_normal_names.length - 1);
		save.enemy_name = monster_normal_titles[tmp];
		save.enemy_name += " " + monster_normal_names[tmp2];
		save.enemy_imagePath = monster_normal_paths[tmp2];

		//update the values
		save.enemy_maxHP = Math.round(save.enemy_maxHP * 1.4);
		save.enemy_attackDamage = Math.round(save.enemy_attackDamage * 1.5);
		save.enemy_accuracy = Math.round(save.enemy_accuracy * 1.2);
		save.enemy_goldDrop = Math.round(save.enemy_goldDrop * 1.2);
		save.enemy_xpGain = Math.round(save.enemy_goldDrop * 1.5);
	}

	save.enemy_currentHP = save.enemy_maxHP;
	interfaces_adventure_blockChance_right.text ="" + Math.round(100 * blockChance) + "%";
}

/**
 * @author: Alex
 * @author: Maik - added log counter and adds enemy actions to the log.
 */
function attackPlayer(delta) {
	attackTime += delta;

	if (attackTime > 3000) {
		attackTime -= 3000;

		//checks if log already has 5 entrie
		if (save.logCounter == 10) {
			save.logCounter = 0;
			save.battleLog = "LOG";
			//update interface
			interfaces_adventure_battleLog.text = save.battleLog;
		}

		save.logCounter++;

		blockChance = 0.7 - 1 / (1 + 2 * save.shield_blockValue / save.enemy_accuracy);

		if (Math.random() > blockChance) {
			save.player_currentHP -= save.enemy_attackDamage;
			save.battleLog += "\n Recieved " + save.enemy_attackDamage + " damage";
			//update interface
			interfaces_adventure_battleLog.text = save.battleLog;
			interfaces_adventure_hp_right.text = formatiere(save.player_currentHP.toString()) + " / " + formatiere(save.player_maxHP.toString());

			if (save.player_currentHP <= 0) {
				loseBattle();
			}

		} else {
			save.battleLog += "\n Blocked Enemy Attack";
			interfaces_adventure_battleLog.text = save.battleLog;
		}
	}

	interfaces_StartMenu_p_health_right.text =save.player_currentHP + "/" + save.player_maxHP;
	updateStage();
}

/**************************************************************************************************
 *********************************SHOP & UPGRADES**************************************************
 **************************************************************************************************/

//--------------------------ADVENTURE--------------------------------------------------------------

/**
 * @author: Maik
 */
function upgradeSword() {

	if (save.player_goldCount >= save.sword_upgradeCost) {

		updateGold(-save.sword_upgradeCost);

		//update values
		save.sword_damage = save.sword_damage * 2;
		save.sword_upgradeCost = Math.round(save.sword_upgradeCost * 1.5);
		save.sword_upgraded++;

		//update shop
		shop_swordPrice.text = formatiere(save.sword_upgradeCost.toString()) + " Gold", "bold 22px Calisto MT", "#FFFFFF";

		//update interface
		interfaces_shop_gold_right.text = formatiere(save.player_goldCount.toString());

		//update Tooltip
		var c_level = save.sword_upgraded + 1;
		var n_level = save.sword_upgraded + 2;
		var n_Value = save.sword_damage * 2;

		var text = "Sword upgrade +1" + "\n" + "Current Level:" + c_level.toString() + "\n" + "current Damage:" + save.sword_damage.toString() + "\n" + "Next Level:" + n_level.toString() + "\n" + "Next Damage:" + n_Value.toString() + "\n";

		swordDesc.text = text.toString();

	} else {
		alert("Cannot afford!");
	}
}

/**
 * @author: Maik
 */
function upgradeArmor() {

	if (save.player_goldCount >= save.armor_upgradeCost) {

		updateGold(-save.armor_upgradeCost);

		//update values
		save.player_currentHP += save.armor_healthPoints;
		save.player_maxHP += save.armor_healthPoints;
		save.armor_healthPoints = save.armor_healthPoints * 2;
		save.armor_upgradeCost = Math.round(save.sword_upgradeCost * 1.5);
		save.armor_upgraded++;

		//update shop
		shop_armorPrice.text = formatiere(save.armor_upgradeCost.toString()) + " Gold";

		//update interface
		interfaces_shop_gold_right.text = formatiere(save.player_goldCount.toString());

		//update Tooltip
		var c_level = save.armor_upgraded + 1;
		var n_level = save.armor_upgraded + 2;
		var n_Value = save.armor_healthPoints * 2;

		var text = "Armor upgrade +1" + "\n" + "Current Level:" + c_level.toString() + "\n" + "Current Armor Health:" + save.armor_healthPoints.toString() + "\n" + "Next Level:" + n_level.toString() + "\n" + "Next Armor Health:" + n_Value.toString() + "\n";

		armorDesc.text = text;

	} else {
		alert("Cannot affort!");
	}
}

/**
 * @author: Maik
 */
function upgradeShield() {

	if (save.player_goldCount >= save.shield_upgradeCost) {

		updateGold(-save.shield_upgradeCost);

		//update values
		save.shield_blockValue = save.shield_blockValue * 2;
		save.shield_upgradeCost = Math.round(save.shield_upgradeCost * 1.5);
		save.shield_upgraded++;

		//update shop
		shop_shieldPrice.text = formatiere(save.shield_upgradeCost.toString()) + " Gold";

		//update interface
		interfaces_shop_gold_right.text = formatiere(save.player_goldCount.toString());

		//update Tooltip
		var c_level = save.shield_upgraded + 1;
		var n_level = save.shield_upgraded + 2;
		var n_Value = save.shield_blockValue * 2;

		var text = "Shield upgrade +1" + "\n" + "Current Level:" + c_level.toString() + "\n" + "Current Shield Value:" + save.shield_blockValue.toString() + "\n" + "Next Level:" + n_level.toString() + "\n" + "Next Shield Value:" + n_Value.toString() + "\n";

		shieldDesc.text = text;

	} else {
		alert("Cannot affort!");
	}
}

//----------------------------TRAINING------------------------------------------------------

/**
 * @author: Maik
 */
function upgradeTrainingClick() {

	if (save.player_goldCount >= save.training_xpPerClick_upgradeCosts) {

		//update values
		updateGold(-save.training_xpPerClick_upgradeCosts);
		save.training_xpPerClick *= 2;
		save.training_xpPerClick_upgradeCosts = Math.round(save.training_xpPerClick_upgradeCosts * 1.5);
		save.training_xpPerClick_upgraded++;

		//update shop
		shop_training_clickpowerPrice.text = formatiere(save.training_xpPerClick_upgradeCosts.toString()) + " Gold";

		//update interface
		interfaces_shop_gold_right.text = formatiere(save.player_goldCount.toString());

		//update Tooltip
		var c_level = save.training_xpPerClick_upgraded + 1;
		var n_level = save.training_xpPerClick_upgraded + 2;
		var n_Value = save.training_xpPerClick * 2;

		var text = "Train xp upgrade x2" + "\n" + "Current Level:" + c_level.toString() + "\n" + "Current Train Click Value:" + save.training_xpPerClick.toString() + "\n" + "Next Level:" + n_level.toString() + "\n" + "Next Train Click Value:" + n_Value.toString() + "\n";

		trainClickDesc.text = text;

	} else {
		alert("Cannot affort!");
	}
}

/**
 * @author: Maik
 */
function upgradeAutoXpFarmer() {

	if (save.player_goldCount >= save.training_autoFarmer_upgradeCosts) {

		//update values
		updateGold(-save.training_autoFarmer_upgradeCosts);
		save.training_autoFarmer_count++;
		save.training_autoFarmer_upgradeCosts *= 2;
		save.training_autoFarmer_upgraded++;

		//update shop
		shop_training_AddFarmerPrice.text = formatiere(save.training_autoFarmer_upgradeCosts.toString()) + " Gold";

		//update interface
		interfaces_shop_gold_right.text = formatiere(save.player_goldCount.toString());

		//update Tooltip
		var c_level = save.training_autoFarmer_upgraded + 1;
		var n_level = save.training_autoFarmer_upgraded + 2;
		var n_Value = save.training_autoFarmer_count + 1;

		var text = "Count of Training farmer +1" + "\n" + "Current Level:" + c_level.toString() + "\n" + "Current Autofarmer Count:" + save.training_autoFarmer_count.toString() + "\n" + "Next Level:" + n_level.toString() + "\n" + "Next Autofarmer Count:" + n_Value.toString() + "\n";

		trainAutoFarmerCountDesc.text = text;

	} else {
		alert("Cannot affort!");
	}
}

/**
 * @author: Maik
 */
function upgradeAutoXp() {

	if (save.player_goldCount >= save.training_autoXp_upgradeCost) {

		//update value
		updateGold(-save.training_autoXp_upgradeCost);
		save.training_autoXp_xpValue += 5;
		save.training_autoXp_upgradeCost *= 2;
		save.training_autoXp_upgraded++;

		//update shop
		shop_training_improveFarmerPrice.text = formatiere(save.training_autoXp_upgradeCost.toString()) + " Gold";

		//update interface
		interfaces_shop_gold_right.text = formatiere(save.player_goldCount.toString());

		//update Tooltip
		var c_level = save.training_autoXp_upgraded + 1;
		var n_level = save.training_autoXp_upgraded + 2;
		var n_Value = save.training_autoXp_xpValue + 1;

		var text = "Amount from Training farmer +1" + "\n" + "Current Level:" + c_level.toString() + "\n" + "Current Autofarmer Amount:" + save.training_autoXp_xpValue.toString() + "\n" + "Next Level:" + n_level.toString() + "\n" + "Next Autofarmer Amount:" + n_Value.toString() + "\n";

		trainAutoFarmerAmountDesc.text = text;

	} else {
		alert("Cannot affort!");
	}
}

//----------------------------WORKING------------------------------------------------------

/**
 * @author: Max
 */
function upgradeWorkingClick() {

	if (save.player_goldCount >= save.working_goldPerClick_upgradeCosts) {

		updateGold(-save.working_goldPerClick_upgradeCosts);
		save.working_goldPerClick *= 2;
		save.working_goldPerClick_upgradeCosts = Math.round(save.working_goldPerClick_upgradeCosts * 1.5);
		save.working_goldPerClick_upgraded++;

		//update shop
		shop_working_clickpowerPrice.text = formatiere(save.working_goldPerClick_upgradeCosts.toString()) + " Gold";

		//update interface
		interfaces_shop_gold_right.text = formatiere(save.player_goldCount.toString());

		//update Tooltip
		var c_level = save.working_goldPerClick_upgraded + 1;
		var n_level = save.working_goldPerClick_upgraded + 2;
		var n_Value = save.working_goldPerClick * 2;

		var text = "work gold upgrade x2" + "\n" + "Current Level:" + c_level.toString() + "\n" + "Current Work Click Value:" + save.working_goldPerClick.toString() + "\n" + "Next Level:" + n_level.toString() + "\n" + "Next Work Click Value:" + n_Value.toString() + "\n";

		workClickDesc.text = text;

	} else {
		alert("Cannot affort!");
	}
}

/**
 * @author: Max
 */
function upgradeAutoGoldFarmer() {

	if (save.player_goldCount >= save.working_autoFarmer_upgradeCosts) {

		updateGold(-save.working_autoFarmer_upgradeCosts);
		save.working_autoFarmer_count++;
		save.working_autoFarmer_upgradeCosts *= 2;
		save.working_autoFarmer_upgraded++;

		//update shop
		shop_working_AddFarmerPrice.text = formatiere(save.working_autoFarmer_upgradeCosts.toString()) + " Gold";

		//update interface
		interfaces_shop_gold_right.text = formatiere(save.player_goldCount.toString());

		//update Tooltip
		var n_level = save.working_autoFarmer_upgraded + 2;
		var n_Value = save.working_autoFarmer_count + 1;

		var text = "Count of Working farmer +1" + "\n" + "Current Level:" + c_level.toString() + "\n" + "Current Autofarmer Count:" + save.working_autoFarmer_count.toString() + "\n" + "Next Level:" + n_level.toString() + "\n" + "Next Autofarmer Count:" + n_Value.toString() + "\n";

		workAutoFarmerCountDesc.text = text;

	} else {
		alert("Cannot affort!");
	}
}

/**
 * @author: Max
 */
function upgradeAutoGold() {

	if (save.player_goldCount >= save.working_autoGold_upgradeCost) {

		//update values
		updateGold(-save.working_autoGold_upgradeCost);
		save.working_autoGold_goldValue *= 2;
		save.working_autoGold_upgradeCost *= 2;
		save.working_autoGold_upgraded++;

		//update shop
		shop_working_improveFarmerPrice.text = formatiere(save.working_autoGold_upgradeCost.toString()) + " Gold";

		//update interface
		interfaces_shop_gold_right.text = formatiere(save.player_goldCount.toString());

		//update Tooltip
		var c_level = save.working_autoGold_upgraded + 1;
		var n_level = save.working_autoGold_upgraded + 2;
		var n_Value = save.working_autoGold_goldValue + 1;

		var text = "Amount from working farmer +1" + "\n" + "Current Level:" + c_level.toString() + "\n" + "Current Autofarmer Amount:" + save.working_autoGold_goldValue.toString() + "\n" + "Next Level:" + n_level.toString() + "\n" + "Next Autofarmer Amount:" + n_Value.toString() + "\n";

		workAutoFarmerAmountDesc.text = text;

	} else {
		alert("Cannot affort!");
	}
}

//-------------------OTHER-----------------------------

/**
 * @author: Maik
 */
function buyHealpot() {

	if (save.player_healpotCount == 1) {
		alert("You first should drink the pot you already own!");
		return;
	}

	if (save.player_goldCount >= save.others_healPot_buyingCosts) {

		//update values
		updateGold(-save.others_healPot_buyingCosts);
		save.player_healpotCount++;
		save.shop_maxHealPotsBought++;

		//update interface
		interfaces_shop_gold_right.text = formatiere(save.player_goldCount.toString());

	} else {
		alert("Cannot afort!");
	}
}

/**
 * @author: Maik
 */
function upgradeHealpot() {

	if (save.player_goldCount >= save.others_healPot_upgradeCosts) {

		//update values
		save.player_goldCount -= save.others_healPot_upgradeCosts;
		save.player_healpotStrength *= 2;
		save.others_healPot_upgradeCosts *= 2;
		save.others_healPot_upgraded++;

		//update shop
		shop_potionUpgradePrice.text = formatiere(save.others_healPot_upgradeCosts.toString()) + " Gold";

		//update interface
		interfaces_shop_gold_right.text = formatiere(save.player_goldCount.toString());

		//update Tooltip
		var c_level = save.others_healPot_upgraded + 1;
		var n_level = save.others_healPot_upgraded + 2;

		var text = "Upgrade Healpot by +x" + "\n" + "Current Level:" + c_level.toString() + "\n" + "Next Level:" + n_level.toString();

		otherUpgradeHPDesc.text = text;

	} else {
		alert("Cannot affort!");
	}
}

/**
 * @author: Maik
 */
function upgradeCriticalStrike() {

	if (save.player_goldCount >= save.others_critical_upgradeCosts) {

		//update values
		save.player_goldCount -= save.others_critical_upgradeCosts;
		save.player_criticalFactor += 1;
		save.others_critical_upgradeCosts *= 2;
		save.others_critical_upgraded++;

		//update shop
		shop_upgradeCcPrice.text = formatiere(save.others_critical_upgradeCosts.toString()) + " Gold";

		//update interface
		interfaces_shop_gold_right.text = formatiere(save.player_goldCount.toString());

		//update Tooltip
		var c_level = save.others_critical_upgraded + 1;
		var n_level = save.others_critical_upgraded + 2;
		var n_Value = save.player_criticalFactor + 1;

		var text = "Crit Damage upgrade +1%" + "\n" + "Current Level:" + c_level.toString() + "\n" + "Current Crit Factor:" + save.player_criticalFactor.toString() + "%" + "\n" + "Next Level:" + n_level.toString() + "\n" + "Next Crit Factor:" + n_Value.toString() + "%" + "\n";

		otherCritDmgUpgradeDesc.text = text;

	} else {
		alert("Cannot affort!");
	}
}

/**********************************************************************************************
 *********************************GENERAL******************************************************
 **********************************************************************************************/

/**
 *@author: Maik
 */

function switchMuting() {
	save.mute = !save.mute;

	if (save.mute == true) {
		muteBitmap.image = queue.getResult("img/mainmenu/Sound_Mute.png");
		createjs.Sound.setMute(true);
	} else {
		muteBitmap.image = queue.getResult("img/mainmenu/Sound_Active.png");
		createjs.Sound.setMute(false);
	}
}

/**
 *@author: Maik
 */
function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *@author: Maik
 */
function formatiere(value) {

	//TODO

	value.toString

	var tmp = null;
	var result = value;

	if (value.length > 6 && value.length < 10) {
		if (value.length == 7) {
			result = value.charAt(0) + ",";
			tmp = value.slice(1, 4);
		}

		if (value.length == 8) {
			result = value.charAt(0) + value.charAt(1) + ",";
			tmp = value.slice(2, 5);
		}

		if (value.length == 9) {
			result = value.charAt(0) + value.charAt(1) + value.charAt(2) + ",";
			tmp = value.slice(3, 6);
		}

		result += tmp;
		result += " M";
	}

	return result;
}

/**
 *@author: Alex
 */
function loseTimeTicker(delta) {
	loseTime += delta;
	time.text = "" + 3000 - loseTime, "20px Courier";

	if (loseTime > 3000) {
		lostBattle = false;
		loseTime = 0;
		adventureLostButton();
		stage.removeChild(time);
	}
}

/**
 * @author: Maik
 */
function hitAnimation() {

	// var spriteSheet = new createjs.SpriteSheet(data3);
	// spriteSheet.getAnimation("attack").speed = 0.5;
	// var sprite = new createjs.Sprite(spriteSheet, "attack");
	// sprite.x = stage.mouseX - 96;
	// sprite.y = stage.mouseY - 96;
	// sprite.gotoAndPlay("attack");
	// stage.addChild(sprite);
	//
	// sprite.on("animationend", handleAnimationEnd);
	//
	// function handleAnimationEnd(event) {
	//
	// if (event.name == "attack") {
	// event.remove();
	// stage.removeChild(sprite);
	// }
	// }

};

/**
 * @author: Alex
 * @author: Maik - added arround 1000 new variables and formate it.
 */
function resetSave() {
	save = {

		/***************************************************************************************************
		 **************************************PLAYER*******************************************************
		 **************************************************************************************************/

		"player_name" : "Player",
		"player_level" : 1,

		"player_maxHP" : 20,
		"player_currentHP" : 20,

		"player_xpForLevelUP" : 10,
		"player_currentXP" : 0,

		"player_criticalFactor" : 2.0,
		"player_maxCritDone" : 0,

		"player_goldCount" : 250,
		"player_healpotCount" : 0,
		"player_healpotStrength" : 20,

		/***************************************************************************************************
		 **************************************ENEMY********************************************************
		 **************************************************************************************************/

		"enemy_name" : "Betaquad",
		"enemy_id" : 1,
		"enemy_imagePath" : "img/adventure/monsterImages/1 - Betaquad.png",
		"enemy_maxHP" : 25,
		"enemy_currentHP" : 25,
		"enemy_attackDamage" : 1,
		"enemy_accuracy" : 10,
		"enemy_goldDrop" : 50,
		"enemy_xpGain" : 10,
		"enemy_isBoss" : false,

		/***************************************************************************************************
		 **************************************PROFILE******************************************************
		 **************************************************************************************************/

		"adventure_maxGold" : 0,
		"adventure_maxXP" : 0,
		"adventure_maxClicks" : 0,

		"training_maxXp" : 0,
		"training_maxClicks" : 0,

		"working_maxGold" : 0,
		"working_maxClicks" : 0,

		"shop_maxHealPotsBought" : 0,

		/***************************************************************************************************
		 **************************************SHOP*********************************************************
		 **************************************************************************************************/

		"sword_damage" : 1,
		"sword_upgradeCost" : 100,
		"sword_upgraded" : 0,

		"armor_healthPoints" : 10,
		"armor_upgradeCost" : 100,
		"armor_upgraded" : 0,

		"shield_blockValue" : 15,
		"shield_upgradeCost" : 100,
		"shield_upgraded" : 0,

		"training_xpPerClick" : 1,
		"training_xpPerClick_upgradeCosts" : 100,
		"training_xpPerClick_upgraded" : 0,
		"training_autoFarmer_count" : 0,
		"training_autoFarmer_upgradeCosts" : 100,
		"training_autoFarmer_upgraded" : 0,
		"training_autoXp_xpValue" : 0,
		"training_autoXp_upgradeCost" : 100,
		"training_autoXp_upgraded" : 0,

		"working_goldPerClick" : 1,
		"working_goldPerClick_upgradeCosts" : 100,
		"working_goldPerClick_upgraded" : 0,
		"working_autoFarmer_count" : 0,
		"working_autoFarmer_upgradeCosts" : 100,
		"working_autoFarmer_upgraded" : 0,
		"working_autoGold_goldValue" : 1,
		"working_autoGold_upgradeCost" : 100,
		"working_autoGold_upgraded" : 0,

		"others_healPot_buyingCosts" : 50,
		"others_healPot_upgradeCosts" : 100,
		"others_healPot_upgraded" : 0,
		"others_critical_upgradeCosts" : 100,
		"others_critical_upgraded" : 0,

		/***************************************************************************************************
		 **************************************OTHERS*******************************************************
		 **************************************************************************************************/

		"logCounter" : 0,
		"battleLog" : "LOG",

		"mute" : false
	};

	updateStage();
}