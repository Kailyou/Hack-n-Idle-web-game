function initTooltip(stageName) {
	//--------------------adventure---------------------------//
	if (stageName.toString() == "equipement") {
		//sword
		tooltip_SwordDescContainer = new createjs.Container();
		tooltip_SwordDescContainer.x = 200 + 75;
		tooltip_SwordDescContainer.y = 150;
		tooltip_SwordDescContainer.visible = false;

		var bg = new Image();
		bg.src = "img/shop/tooltip.png";
		var bitmap = new createjs.Bitmap(bg);

		var c_level = save.sword_upgraded + 1;
		var n_level = save.sword_upgraded + 2;
		var n_Value = save.sword_damage + (save.sword_damage * 2);

		var text = "Sword upgrade +1" + "\n" + "Current Level:" + c_level.toString() + "\n" + "current Damage:" + save.sword_damage.toString() + "\n" + "Next Level:" + n_level.toString() + "\n" + "Next Damage:" + n_Value.toString() + "\n";

		swordDesc = new createjs.Text(text);
		swordDesc.x = 25;
		swordDesc.y = 25;

		tooltip_SwordDescContainer.addChild(bitmap, swordDesc);

		//armor
		tooltip_armorDescContainer = new createjs.Container();
		tooltip_armorDescContainer.x = 350 + 75;
		tooltip_armorDescContainer.y = 150;
		tooltip_armorDescContainer.visible = false;

		var bg = new Image();
		bg.src = "img/shop/tooltip.png";
		var bitmap = new createjs.Bitmap(bg);

		var c_level = save.armor_upgraded + 1;
		var n_level = save.armor_upgraded + 2;
		var n_Value = save.armor_healthPoints + (save.armor_healthPoints * 2);

		var text = "Armor upgrade +1" + "\n" + "Current Level:" + c_level.toString() + "\n" + "Current Armor Health:" + save.armor_healthPoints.toString() + "\n" + "Next Level:" + n_level.toString() + "\n" + "Next Armor Health:" + n_Value.toString() + "\n";

		armorDesc = new createjs.Text(text);
		armorDesc.x = 25;
		armorDesc.y = 25;

		tooltip_armorDescContainer.addChild(bitmap, armorDesc);

		//shield
		tooltip_shieldDescContainer = new createjs.Container();
		tooltip_shieldDescContainer.x = 500 + 75;
		tooltip_shieldDescContainer.y = 150;
		tooltip_shieldDescContainer.visible = false;

		var bg = new Image();
		bg.src = "img/shop/tooltip.png";
		var bitmap = new createjs.Bitmap(bg);

		var c_level = save.shield_upgraded + 1;
		var n_level = save.shield_upgraded + 2;
		var n_Value = save.shield_blockValue + (save.shield_blockValue * 2);

		var text = "Shield upgrade +1" + "\n" + "Current Level:" + c_level.toString() + "\n" + "Current Shield Value:" + save.shield_blockValue.toString() + "\n" + "Next Level:" + n_level.toString() + "\n" + "Next Shield Value:" + n_Value.toString() + "\n";

		shieldDesc = new createjs.Text(text);
		shieldDesc.x = 25;
		shieldDesc.y = 25;

		tooltip_shieldDescContainer.addChild(bitmap, shieldDesc);

		stage.addChild(tooltip_SwordDescContainer, tooltip_armorDescContainer, tooltip_shieldDescContainer);

	}

	//-----------------------training----------------------------------//
	if (stageName.toString() == "training") {
		//Train Click
		tooltip_trainClickDescContainer = new createjs.Container();
		tooltip_trainClickDescContainer.x = 200 + 75;
		tooltip_trainClickDescContainer.y = 150;
		tooltip_trainClickDescContainer.visible = false;

		var bg = new Image();
		bg.src = "img/shop/tooltip.png";
		var bitmap = new createjs.Bitmap(bg);

		var c_level = save.training_xpPerClick_upgraded + 1;
		var n_level = save.training_xpPerClick_upgraded + 2;
		var n_Value = save.training_xpPerClick * 2;

		var text = "Train xp upgrade x2" + "\n" + "Current Level:" + c_level.toString() + "\n" + "Current Train Click Value:" + save.training_xpPerClick.toString() + "\n" + "Next Level:" + n_level.toString() + "\n" + "Next Train Click Value:" + n_Value.toString() + "\n";

		trainClickDesc = new createjs.Text(text);
		trainClickDesc.x = 25;
		trainClickDesc.y = 25;

		tooltip_trainClickDescContainer.addChild(bitmap, trainClickDesc);

		//Training autofarmer count
		tooltip_trainAutoFarmerCountDescContainer = new createjs.Container();
		tooltip_trainAutoFarmerCountDescContainer.x = 350 + 75;
		tooltip_trainAutoFarmerCountDescContainer.y = 150;
		tooltip_trainAutoFarmerCountDescContainer.visible = false;

		var bg = new Image();
		bg.src = "img/shop/tooltip.png";
		var bitmap = new createjs.Bitmap(bg);

		var c_level = save.training_autoFarmer_upgraded + 1;
		var n_level = save.training_autoFarmer_upgraded + 2;
		var n_Value = save.training_autoFarmer_count + 1;

		var text = "Count of Training farmer +1" + "\n" + "Current Level:" + c_level.toString() + "\n" + "Current Autofarmer Count:" + save.training_autoFarmer_count.toString() + "\n" + "Next Level:" + n_level.toString() + "\n" + "Next Autofarmer Count:" + n_Value.toString() + "\n";

		trainAutoFarmerCountDesc = new createjs.Text(text);
		trainAutoFarmerCountDesc.x = 25;
		trainAutoFarmerCountDesc.y = 25;

		tooltip_trainAutoFarmerCountDescContainer.addChild(bitmap, trainAutoFarmerCountDesc);

		//Training Autofarmer amount
		tooltip_trainAutoFarmerAmountDescContainer = new createjs.Container();
		tooltip_trainAutoFarmerAmountDescContainer.x = 500 + 75;
		tooltip_trainAutoFarmerAmountDescContainer.y = 150;
		tooltip_trainAutoFarmerAmountDescContainer.visible = false;

		var bg = new Image();
		bg.src = "img/shop/tooltip.png";
		var bitmap = new createjs.Bitmap(bg);

		var c_level = save.training_autoXp_upgraded + 1;
		var n_level = save.training_autoXp_upgraded + 2;
		var n_Value = save.training_autoXp_xpValue + 1;

		var text = "Amount from Training farmer +1" + "\n" + "Current Level:" + c_level.toString() + "\n" + "Current Autofarmer Amount:" + save.training_autoXp_xpValue.toString() + "\n" + "Next Level:" + n_level.toString() + "\n" + "Next Autofarmer Amount:" + n_Value.toString() + "\n";

		trainAutoFarmerAmountDesc = new createjs.Text(text);
		trainAutoFarmerAmountDesc.x = 25;
		trainAutoFarmerAmountDesc.y = 25;

		tooltip_trainAutoFarmerAmountDescContainer.addChild(bitmap, trainAutoFarmerAmountDesc);

		stage.addChild(tooltip_trainClickDescContainer, tooltip_trainAutoFarmerCountDescContainer, tooltip_trainAutoFarmerAmountDescContainer);

	}

	//--------------------------------------------working----------------------------------//

	if (stageName.toString() == "working") {
		//work click
		tooltip_workClickDescContainer = new createjs.Container();
		tooltip_workClickDescContainer.x = 200 + 75;
		tooltip_workClickDescContainer.y = 150;
		tooltip_workClickDescContainer.visible = false;

		var bg = new Image();
		bg.src = "img/shop/tooltip.png";
		var bitmap = new createjs.Bitmap(bg);

		var c_level = save.working_goldPerClick_upgraded + 1;
		var n_level = save.working_goldPerClick_upgraded + 2;
		var n_Value = save.working_goldPerClick * 2;

		var text = "work gold upgrade x2" + "\n" + "Current Level:" + c_level.toString() + "\n" + "Current Work Click Value:" + save.working_goldPerClick.toString() + "\n" + "Next Level:" + n_level.toString() + "\n" + "Next Work Click Value:" + n_Value.toString() + "\n";

		workClickDesc = new createjs.Text(text);
		workClickDesc.x = 25;
		workClickDesc.y = 25;

		tooltip_workClickDescContainer.addChild(bitmap, workClickDesc);

		//Working Autofarmer count
		tooltip_workAutoFarmerCountDescContainer = new createjs.Container();
		tooltip_workAutoFarmerCountDescContainer.x = 350 + 75;
		tooltip_workAutoFarmerCountDescContainer.y = 150;
		tooltip_workAutoFarmerCountDescContainer.visible = false;

		var bg = new Image();
		bg.src = "img/shop/tooltip.png";
		var bitmap = new createjs.Bitmap(bg);

		var c_level = save.working_autoFarmer_upgraded + 1;
		var n_level = save.working_autoFarmer_upgraded + 2;
		var n_Value = save.working_autoFarmer_count + 1;

		var text = "Count of Working farmer +1" + "\n" + "Current Level:" + c_level.toString() + "\n" + "Current Autofarmer Count:" + save.working_autoFarmer_count.toString() + "\n" + "Next Level:" + n_level.toString() + "\n" + "Next Autofarmer Count:" + n_Value.toString() + "\n";

		workAutoFarmerCountDesc = new createjs.Text(text);
		workAutoFarmerCountDesc.x = 25;
		workAutoFarmerCountDesc.y = 25;

		tooltip_workAutoFarmerCountDescContainer.addChild(bitmap, workAutoFarmerCountDesc);

		//Working Autofarmer amount
		tooltip_workAutoFarmerAmountDescContainer = new createjs.Container();
		tooltip_workAutoFarmerAmountDescContainer.x = 500 + 75;
		tooltip_workAutoFarmerAmountDescContainer.y = 150;
		tooltip_workAutoFarmerAmountDescContainer.visible = false;

		var bg = new Image();
		bg.src = "img/shop/tooltip.png";
		var bitmap = new createjs.Bitmap(bg);

		var c_level = save.working_autoGold_upgraded + 1;
		var n_level = save.working_autoGold_upgraded + 2;
		var n_Value = save.working_autoGold_goldValue + 1;

		var text = "Amount from working farmer +1" + "\n" + "Current Level:" + c_level.toString() + "\n" + "Current Autofarmer Amount:" + save.working_autoGold_goldValue.toString() + "\n" + "Next Level:" + n_level.toString() + "\n" + "Next Autofarmer Amount:" + n_Value.toString() + "\n";

		workAutoFarmerAmountDesc = new createjs.Text(text);
		workAutoFarmerAmountDesc.x = 25;
		workAutoFarmerAmountDesc.y = 25;

		tooltip_workAutoFarmerAmountDescContainer.addChild(bitmap, workAutoFarmerAmountDesc);

		stage.addChild(tooltip_workClickDescContainer, tooltip_workAutoFarmerCountDescContainer, tooltip_workAutoFarmerAmountDescContainer);
	}

	//---------------------------Other-------------------------------------//
	if (stageName.toString() == "other") {
		//buy Healpot
		tooltip_otherBuyHPDescContainer = new createjs.Container();
		tooltip_otherBuyHPDescContainer.x = 200 + 75;
		tooltip_otherBuyHPDescContainer.y = 150;
		tooltip_otherBuyHPDescContainer.visible = false;

		var bg = new Image();
		bg.src = "img/shop/tooltip.png";
		var bitmap = new createjs.Bitmap(bg);

		var text = "Buy one Healpot(Price x2)";

		otherBuyHPDesc = new createjs.Text(text);
		otherBuyHPDesc.x = 25;
		otherBuyHPDesc.y = 25;

		tooltip_otherBuyHPDescContainer.addChild(bitmap, otherBuyHPDesc);

		//upgrade Healpot
		tooltip_OtherUpgradeHPDescContainer = new createjs.Container();
		tooltip_OtherUpgradeHPDescContainer.x = 350 + 75;
		tooltip_OtherUpgradeHPDescContainer.y = 150;
		tooltip_OtherUpgradeHPDescContainer.visible = false;

		var bg = new Image();
		bg.src = "img/shop/tooltip.png";
		var bitmap = new createjs.Bitmap(bg);

		var c_level = save.others_healPot_upgraded + 1;
		var n_level = save.others_healPot_upgraded + 2;

		var text = "Upgrade Healpot by +x" + "\n" + "Current Level:" + c_level.toString() + "\n" + "Next Level:" + n_level.toString();

		otherUpgradeHPDesc = new createjs.Text(text);
		otherUpgradeHPDesc.x = 25;
		otherUpgradeHPDesc.y = 25;

		tooltip_OtherUpgradeHPDescContainer.addChild(bitmap, otherUpgradeHPDesc);

		//Crit Damage upgrade
		tooltip_otherCritDmgUpgradeDescContainer = new createjs.Container();
		tooltip_otherCritDmgUpgradeDescContainer.x = 500 + 75;
		tooltip_otherCritDmgUpgradeDescContainer.y = 150;
		tooltip_otherCritDmgUpgradeDescContainer.visible = false;

		var bg = new Image();
		bg.src = "img/shop/tooltip.png";
		var bitmap = new createjs.Bitmap(bg);

		var c_level = save.others_critical_upgraded + 1;
		var n_level = save.others_critical_upgraded + 2;
		var n_Value = save.player_criticalFactor + 1;

		var text = "Crit Damage upgrade +1%" + "\n" + "Current Level:" + c_level.toString() + "\n" + "Current Crit Factor:" + save.player_criticalFactor.toString() + "%" + "\n" + "Next Level:" + n_level.toString() + "\n" + "Next Crit Factor:" + n_Value.toString() + "%" + "\n";

		otherCritDmgUpgradeDesc = new createjs.Text(text);
		otherCritDmgUpgradeDesc.x = 25;
		otherCritDmgUpgradeDesc.y = 25;

		tooltip_otherCritDmgUpgradeDescContainer.addChild(bitmap, otherCritDmgUpgradeDesc);

		stage.addChild(tooltip_otherBuyHPDescContainer, tooltip_OtherUpgradeHPDescContainer, tooltip_otherCritDmgUpgradeDescContainer);
	}
}
