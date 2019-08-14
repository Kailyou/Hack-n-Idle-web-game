/**
 * Builds the shop - Starts with the adventure-shop.
 *
 * @author Kailyou
 */
function initShop() {

	stage = new createjs.Stage("game");
	stage.enableDOMEvents(true);
	stage.enableMouseOver();

	initAdventureShop();

}

/**
 * Builds the adventure-shop.
 *
 * @author Kailyou
 */
function initAdventureShop() {

	stage.removeAllChildren();

	initBackground("img/shop/background.png");

	title = new createjs.Text("It's not like you're selling anything", "Bold 28px Calisto MT", "#FFFFFF");
	title.x = title.y = 10;

	stage.addChild(title);

	shopButtons();

	//Swordupgrade
	var image = queue.getResult("img/shop/upgrade_sword.png");

	var bitmap = new createjs.Bitmap(image);

	shop_swordPrice = new createjs.Text(formatiere(save.sword_upgradeCost.toString()) + " Gold", "bold 22px Calisto MT", "#FFFFFF");
	shop_swordPrice.x = 100 / 2;
	shop_swordPrice.y = 90;
	shop_swordPrice.textAlign = "center";

	var container = new createjs.Container();
	container.x = 200;
	container.y = 200;
	container.addChild(bitmap, shop_swordPrice);

	container.on("click", function() {
		upgradeSword();
		
	});

	container.on("mouseover", function() {
		tooltip_SwordDescContainer.visible = true;
		container.cursor = 'pointer';
	});

	container.on("mouseout", function() {
		//alert("MouseOut");
		tooltip_SwordDescContainer.visible = false;
		container.cursor = 'default';
	});

	stage.addChild(container);

	//Armorupgrade
	var image = queue.getResult("img/shop/upgrade_armor.png");

	var bitmap = new createjs.Bitmap(image);

	shop_armorPrice = new createjs.Text(formatiere(save.armor_upgradeCost.toString()) + " Gold", "bold 22px Calisto MT", "#FFFFFF");
	shop_armorPrice.x = 100 / 2;
	shop_armorPrice.y = 90;
	shop_armorPrice.textAlign = "center";

	var container = new createjs.Container();
	container.x = 350;
	container.y = 200;
	container.addChild(bitmap, shop_armorPrice);

	container.on("click", function() {
		upgradeArmor();
	});

	container.on("mouseover", function() {
		tooltip_armorDescContainer.visible = true;
		container.cursor = 'pointer';
	});

	container.on("mouseout", function() {
		tooltip_armorDescContainer.visible = false;
		container.cursor = 'default';
	});

	stage.addChild(container);

	//Shieldupgrade
	var image = queue.getResult("img/shop/upgrade_shield.png");

	var bitmap = new createjs.Bitmap(image);

	shop_shieldPrice = new createjs.Text(formatiere(save.shield_upgradeCost.toString()) + " Gold", "bold 22px Calisto MT", "#FFFFFF");
	shop_shieldPrice.x = 100 / 2;
	shop_shieldPrice.y = 90;
	shop_shieldPrice.textAlign = "center";

	var container = new createjs.Container();
	container.x = 500;
	container.y = 200;
	container.addChild(bitmap, shop_shieldPrice);

	container.on("click", function() {
		upgradeShield();
	});

	container.on("mouseover", function() {
		tooltip_shieldDescContainer.visible = true;
		container.cursor = 'pointer';
	});

	container.on("mouseout", function() {
		tooltip_shieldDescContainer.visible = false;
		container.cursor = 'default';
	});

	stage.addChild(container);

	interfaces_shop_initStats();
	initTooltip("equipement");

	backToMainButton();

	stage.update();
}

/**
 * Builds the trainings-shop.
 *
 * @author Kailyou
 */
function initTrainingShop() {

	stage.removeAllChildren();

	initBackground("img/shop/background.png");

	title = new createjs.Text("It's not like you're selling anything", "Bold 28px Calisto MT", "#FFFFFF");
	title.x = title.y = 10;

	stage.addChild(title);

	shopButtons();

	//-----------------------------------------------------------------//
	//Upgrade clickpower
	var image = queue.getResult("img/shop/upgrade_trainingDMG.png");

	var bitmap = new createjs.Bitmap(image);

	shop_training_clickpowerPrice = new createjs.Text(formatiere(save.training_xpPerClick_upgradeCosts.toString()) + " Gold", "bold 22px Calisto MT", "#FFFFFF");
	shop_training_clickpowerPrice.x = 100 / 2;
	shop_training_clickpowerPrice.y = 90;
	shop_training_clickpowerPrice.textAlign = "center";

	var container = new createjs.Container();
	container.x = 200;
	container.y = 200;
	container.addChild(bitmap, shop_training_clickpowerPrice);

	container.on("click", function() {
		upgradeTrainingClick();
	});

	container.on("mouseover", function() {
		tooltip_trainClickDescContainer.visible = true;
		container.cursor = 'pointer';
	});

	container.on("mouseout", function() {
		tooltip_trainClickDescContainer.visible = false;
		container.cursor = 'default';
	});

	stage.addChild(container);

	//Upgrade add farmer
	var image = queue.getResult("img/shop/upgrade_training_autofarmer.png");

	var bitmap = new createjs.Bitmap(image);

	shop_training_AddFarmerPrice = new createjs.Text(formatiere(save.training_autoFarmer_upgradeCosts.toString()) + " Gold", "bold 22px Calisto MT", "#FFFFFF");
	shop_training_AddFarmerPrice.x = 100 / 2;
	shop_training_AddFarmerPrice.y = 90;
	shop_training_AddFarmerPrice.textAlign = "center";

	var container = new createjs.Container();
	container.x = 350;
	container.y = 200;
	container.addChild(bitmap, shop_training_AddFarmerPrice);

	container.on("click", function() {
		upgradeAutoXpFarmer();
	});

	container.on("mouseover", function() {
		tooltip_trainAutoFarmerCountDescContainer.visible = true;
		container.cursor = 'pointer';
	});

	container.on("mouseout", function() {
		tooltip_trainAutoFarmerCountDescContainer.visible = false;
		container.cursor = 'default';
	});

	stage.addChild(container);

	//upgrade farmer strength
	var image = queue.getResult("img/shop/upgrade_trainFarmer_upgrade.png");

	var bitmap = new createjs.Bitmap(image);

	shop_training_improveFarmerPrice = new createjs.Text(formatiere(save.training_autoXp_upgradeCost.toString()) + " Gold", "bold 22px Calisto MT", "#FFFFFF");

	shop_training_improveFarmerPrice.x = 100 / 2;
	shop_training_improveFarmerPrice.y = 90;
	shop_training_improveFarmerPrice.textAlign = "center";

	var container = new createjs.Container();
	container.x = 500;
	container.y = 200;
	container.addChild(bitmap, shop_training_improveFarmerPrice);

	container.on("click", function() {
		upgradeAutoXp();
	});

	container.on("mouseover", function() {
		tooltip_trainAutoFarmerAmountDescContainer.visible = true;
		container.cursor = 'pointer';
	});

	container.on("mouseout", function() {
		tooltip_trainAutoFarmerAmountDescContainer.visible = false;
		container.cursor = 'default';
	});

	stage.addChild(container);
	//--------------------------------------------------------------------------//

	interfaces_shop_initStats();

	initTooltip("training");

	backToMainButton();

	stage.update();
};

/**
 * Builds the working-shop.
 *
 * @author Kailyou
 */
function initWorkShop() {

	stage.removeAllChildren();

	initBackground("img/shop/background.png");

	title = new createjs.Text("It's not like you're selling anything", "Bold 28px Calisto MT", "#FFFFFF");
	title.x = title.y = 10;

	stage.addChild(title);

	shopButtons();

	//-----------------------------------------------------------------//
	//Upgrade clickpower
	var image = queue.getResult("img/shop/upgrade_working_DMG.png");

	var bitmap = new createjs.Bitmap(image);

	shop_working_clickpowerPrice = new createjs.Text(formatiere(save.working_goldPerClick_upgradeCosts.toString()) + " Gold", "bold 22px Calisto MT", "#FFFFFF");
	shop_working_clickpowerPrice.x = 100 / 2;
	shop_working_clickpowerPrice.y = 90;
	shop_working_clickpowerPrice.textAlign = "center";

	var container = new createjs.Container();
	container.x = 200;
	container.y = 200;
	container.addChild(bitmap, shop_working_clickpowerPrice);

	container.on("click", function() {
		upgradeWorkingClick();
	});

	container.on("mouseover", function() {
		tooltip_workClickDescContainer.visible = true;
		container.cursor = 'pointer';
	});

	container.on("mouseout", function() {
		tooltip_workClickDescContainer.visible = false;
		container.cursor = 'default';
	});

	stage.addChild(container);

	//Upgrade Farmer count
	var image = queue.getResult("img/shop/upgrade_working_autofarmer.png");

	var bitmap = new createjs.Bitmap(image);

	shop_working_AddFarmerPrice = new createjs.Text(formatiere(save.working_autoFarmer_upgradeCosts.toString()) + " Gold", "bold 22px Calisto MT", "#FFFFFF");
	shop_working_AddFarmerPrice.x = 100 / 2;
	shop_working_AddFarmerPrice.y = 90;
	shop_working_AddFarmerPrice.textAlign = "center";

	var container = new createjs.Container();
	container.x = 350;
	container.y = 200;
	container.addChild(bitmap, shop_working_AddFarmerPrice);

	container.on("click", function() {
		upgradeAutoGoldFarmer();
	});

	container.on("mouseover", function() {
		tooltip_workAutoFarmerCountDescContainer.visible = true;
		container.cursor = 'pointer';
	});

	container.on("mouseout", function() {
		tooltip_workAutoFarmerCountDescContainer.visible = false;
		container.cursor = 'default';
	});

	stage.addChild(container);

	//upgrade farmer strength
	var image = queue.getResult("img/shop/upgrade_workFarmer_upgrade.png");

	var bitmap = new createjs.Bitmap(image);

	shop_working_improveFarmerPrice = new createjs.Text(formatiere(save.working_autoGold_upgradeCost.toString()) + " Gold", "bold 22px Calisto MT", "#FFFFFF");
	shop_working_improveFarmerPrice.x = 100 / 2;
	shop_working_improveFarmerPrice.y = 90;
	shop_working_improveFarmerPrice.textAlign = "center";

	var container = new createjs.Container();
	container.x = 500;
	container.y = 200;
	container.addChild(bitmap, shop_working_improveFarmerPrice);

	container.on("click", function() {
		upgradeAutoGold();
	});

	container.on("mouseover", function() {
		tooltip_workAutoFarmerAmountDescContainer.visible = true;
		container.cursor = 'pointer';
	});

	container.on("mouseout", function() {
		tooltip_workAutoFarmerAmountDescContainer.visible = false;
		container.cursor = 'default';
	});

	stage.addChild(container);
	//--------------------------------------------------------------------------//

	interfaces_shop_initStats();
	initTooltip("working");

	backToMainButton();

	stage.update();
}

/**
 * Builds the others-shop.
 *
 * @author Kailyou
 */
function initOtherShop() {

	stage.removeAllChildren();

	initBackground("img/shop/background.png");

	title = new createjs.Text("It's not like you're selling anything", "Bold 28px Calisto MT", "#FFFFFF");
	title.x = title.y = 10;

	stage.addChild(title);

	shopButtons();

	//-----------------------------------------------------------------//
	//Buy healpotion
	var image = queue.getResult("img/shop/buy_healpot.png");

	var bitmap = new createjs.Bitmap(image);

	shop_potionPrice = new createjs.Text(formatiere(save.others_healPot_buyingCosts.toString()) + " Gold", "bold 22px Calisto MT", "#FFFFFF");
	shop_potionPrice.x = 100 / 2;
	shop_potionPrice.y = 90;
	shop_potionPrice.textAlign = "center";

	var container = new createjs.Container();
	container.x = 200;
	container.y = 200;
	container.addChild(bitmap, shop_potionPrice);

	container.on("click", function() {
		buyHealpot();
	});

	container.on("mouseover", function() {
		tooltip_otherBuyHPDescContainer.visible = true;
		container.cursor = 'pointer';
	});

	container.on("mouseout", function() {
		tooltip_otherBuyHPDescContainer.visible = false;
		container.cursor = 'default';
	});

	stage.addChild(container);

	//Upgrade healpotion
	var image = queue.getResult("img/shop/upgrade_potion.png");

	var bitmap = new createjs.Bitmap(image);

	shop_potionUpgradePrice = new createjs.Text(formatiere(save.others_healPot_upgradeCosts.toString()) + " Gold", "bold 22px Calisto MT", "#FFFFFF");
	shop_potionUpgradePrice.x = 100 / 2;
	shop_potionUpgradePrice.y = 90;
	shop_potionUpgradePrice.textAlign = "center";

	var container = new createjs.Container();
	container.x = 350;
	container.y = 200;
	container.addChild(bitmap, shop_potionUpgradePrice);

	container.on("click", function() {
		upgradeHealpot();
	});

	container.on("mouseover", function() {
		tooltip_OtherUpgradeHPDescContainer.visible = true;
		container.cursor = 'pointer';
	});

	container.on("mouseout", function() {
		tooltip_OtherUpgradeHPDescContainer.visible = false;
		container.cursor = 'default';
	});

	stage.addChild(container);

	//upgrade cc
	var image = queue.getResult("img/shop/upgrade_cc_3.png");

	var bitmap = new createjs.Bitmap(image);

	shop_upgradeCcPrice = new createjs.Text(formatiere(save.others_critical_upgradeCosts.toString()) + " Gold", "bold 22px Calisto MT", "#FFFFFF");
	shop_upgradeCcPrice.x = 100 / 2;
	shop_upgradeCcPrice.y = 90;
	shop_upgradeCcPrice.textAlign = "center";

	var container = new createjs.Container();
	container.x = 500;
	container.y = 200;
	container.addChild(bitmap, shop_upgradeCcPrice);

	container.on("click", function() {
		upgradeCriticalStrike();
	});

	container.on("mouseover", function() {
		tooltip_otherCritDmgUpgradeDescContainer.visible = true;
		container.cursor = 'pointer';
	});

	container.on("mouseout", function() {
		tooltip_otherCritDmgUpgradeDescContainer.visible = false;
		container.cursor = 'default';
	});

	stage.addChild(container);
	//--------------------------------------------------------------------------//

	interfaces_shop_initStats();
	initTooltip("other");

	backToMainButton();

	stage.update();
}
