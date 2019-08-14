function initStartMenu() {
	stage = new createjs.Stage("game");
	stage.enableDOMEvents(true);
	stage.enableMouseOver();

	inBattle = false;
	inTraining = false;
	inWorking = false;

	initBackground("img/mainmenu/background.png");

	var img = queue.getResult("img/mainmenu/title.png");
	var bitmap = new createjs.Bitmap(img);
	var verImg = queue.getResult("img/mainmenu/version1-0.png");

	var verBitmap = new createjs.Bitmap(verImg);
	verBitmap.y = 57 + 12;

	var title_container = new createjs.Container();
	title_container.addChild(bitmap, verBitmap);
	title_container.x = 400 - 153;
	title_container.y = 250 - 30;

	stage.addChild(title_container);

	interfaces_StartMenu_initStats();
	joinAdventureButton();
	//Fehler im Adventure Button
	joinTrainingButton();
	joinWorkingButton();
	joinShopButton();
	joinProfileButton();
	mainResetSaveButton();
	muteButton();

	stage.update();
}

