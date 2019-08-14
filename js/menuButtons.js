var buttonColour = "blue";

/**
 * @author: Alex
 * MAIN MENU BUTTONS
 */

// JOIN ADVENTURE MODE
function joinAdventureButton() {

	var image = queue.getResult("img/mainmenu/Button_Adventure.png");

	var bitmap = new createjs.Bitmap(image);

	var container = new createjs.Container();
	container.x = 0;
	container.y = 440;
	container.addChild(bitmap);

	container.on("click", function() {
		enterState("adventure");
	});

	container.onMouseOver = function(evt) {
		evt.target.cursor = 'pointer';
	};

	stage.addChild(container);
}

//JOIN TRAININGS MODE
function joinTrainingButton() {

	var image = queue.getResult("img/mainmenu/Button_Training.png");

	var bitmap = new createjs.Bitmap(image);

	var container = new createjs.Container();
	container.name = "button";
	container.x = 200;
	container.y = 440;
	container.addChild(bitmap);

	container.on("click", function() {
		enterState("training");
	});

	container.on("mouseover", function() {
		container.cursor = 'pointer';
	});

	stage.addChild(container);
}

//JOIN WORKING MODE
function joinWorkingButton() {

	var image = queue.getResult("img/mainmenu/Button_Work.png");

	var bitmap = new createjs.Bitmap(image);

	var container = new createjs.Container();
	container.name = "button";
	container.x = 400;
	container.y = 440;
	container.addChild(bitmap);

	container.on("click", function() {
		enterState("working");
	});

	container.on("mouseover", function() {
		container.cursor = 'pointer';
	});

	stage.addChild(container);
}

//JOIN SHOPPING MODE
function joinShopButton() {

	var image = queue.getResult("img/mainmenu/Button_Shop.png");

	var bitmap = new createjs.Bitmap(image);

	var container = new createjs.Container();
	container.name = "button";
	container.x = 600;
	container.y = 440;
	container.addChild(bitmap);

	container.on("click", function() {
		enterState("shop");
	});

	container.on("mouseover", function() {
		container.cursor = 'pointer';
	});

	stage.addChild(container);
}

//JOIN PROFILE BUTTON
function joinProfileButton() {

	var image = queue.getResult("img/mainmenu/Button_Profile.png");

	var bitmap = new createjs.Bitmap(image);

	var profileContainer = new createjs.Container();
	profileContainer.x = 700;
	profileContainer.y = 0;
	profileContainer.addChild(bitmap);

	profileContainer.on("click", function() {
		enterState("profile");
	});

	profileContainer.on("mouseover", function() {
		profileContainer.cursor = 'pointer';
	});

	stage.addChild(profileContainer);
}

//Home Button
function backToMainButton() {

	var image = queue.getResult("img/others/home.png");

	var bitmap = new createjs.Bitmap(image);

	var homeContainer = new createjs.Container();
	homeContainer.x = 700;
	homeContainer.y = 440;
	homeContainer.addChild(bitmap);

	homeContainer.on("click", function() {
		enterState("startMenu");
		save.enemy_currentHP = save.enemy_maxHP;
	});
	homeContainer.on("mouseover", function() {
		homeContainer.cursor = 'pointer';
	});

	stage.addChild(homeContainer);
}

//RESETS THE GAME
function mainResetSaveButton() {

	var image = queue.getResult("img/mainmenu/Button_Reset.png");

	var bitmap = new createjs.Bitmap(image);

	var resetContainer = new createjs.Container();
	resetContainer.x = 700;
	resetContainer.y = 50;
	resetContainer.addChild(bitmap);

	resetContainer.on("click", function() {
		resetSave();
		enterState("startMenu");
	});

	resetContainer.on("mouseover", function() {
		resetContainer.cursor = 'pointer';
	});

	stage.addChild(resetContainer);
}

//LOSE ADVENTURE
function adventureLostButton() {

	var background = new createjs.Shape();
	background.name = "background";
	background.graphics.beginFill(buttonColour).drawRoundRect(0, 0, 400, 60, 10);

	var label = new createjs.Text("Continue!", "bold 24px Arial", "#FFFFFF");
	label.name = "label";
	label.textAlign = "center";
	label.textBaseline = "middle";
	label.x = 400 / 2;
	label.y = 60 / 2;

	var button = new createjs.Container();
	button.name = "button";
	button.x = 200;
	button.y = 100;
	button.addChild(background, label);

	button.on("click", function() {
		enterState("startMenu");
	});

	button.on("mouseover", function() {
		button.cursor = 'pointer';
	});

	stage.addChild(button);
}

function muteButton() {
	var button = new createjs.Container();
	button.x = 720;
	button.y = 100;

	if (save.mute == true) {
		MuteImg = queue.getResult("img/mainmenu/Sound_Mute.png");
		createjs.Sound.setMute(true);
	} else {
		MuteImg = queue.getResult("img/mainmenu/Sound_Active.png");
		createjs.Sound.setMute(false);
	}

	muteBitmap = new createjs.Bitmap(MuteImg);

	button.addChild(muteBitmap);
	button.on("click", function() {
		switchMuting();
	});

	stage.addChild(button);
}
