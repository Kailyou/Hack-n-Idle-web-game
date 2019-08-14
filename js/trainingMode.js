/**
 * @author: Alex
 */

function initTraining() {
	stage = new createjs.Stage("game");
	stage.enableDOMEvents(true);
	stage.enableMouseOver();

	initBackground("img/training/background.png");

	inTraining = true;

	title = new createjs.Text("NEET-Mode", "Bold 28px Calisto MT", "#FFFFFF");
	title.x = title.y = 10;

	stage.addChild(title);

	initTrainingStation();

	interfaces_training_initStats();

	backToMainButton();

	stage.update();
}

function initTrainingStation() {
	var image = queue.getResult("img/training/dummy.png");

	var bitmap = new createjs.Bitmap(image);

	var dummyText = new createjs.Text("Hit me\n for xp", "Bold 20px Calisto MT");
	dummyText.x = 125;
	dummyText.y = 150;

	var trainingstation = new createjs.Container();
	trainingstation.name = "trainingstation";
	trainingstation.x = (800 / 2) - 151.5;
	trainingstation.y = 60;
	trainingstation.addChild(bitmap, dummyText);

	trainingstation.on("click", function() {
		train();
	});

	trainingstation.on("mouseover", function() {
		trainingstation.cursor = "url('sword.cur'),default";
	});

	stage.addChild(trainingstation);
}