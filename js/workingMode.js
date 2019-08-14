function initWorking() {
	stage = new createjs.Stage("game");
	stage.enableDOMEvents(true);
	stage.enableMouseOver();

	initBackground("img/working/background.png");

	inWorking = true;

	title = new createjs.Text("GREED-Mode", "Bold 28px Calisto MT", "#FFFFFF");
	title.x = title.y = 10;

	stage.addChild(title);

	initWorkStation();
	interfaces_working_initStats();

	backToMainButton();

	stage.update();
}

function initWorkStation() {
	var image = queue.getResult("img/working/gold.png");

	var bitmap = new createjs.Bitmap(image);

	var workstation = new createjs.Container();
	workstation.name = "workstation";
	workstation.x = (800 / 2) - 140;
	workstation.y = 100;
	workstation.addChild(bitmap);

	workstation.on("click", function() {//anpassen
		work();
	});

	workstation.on("mouseover", function() {
		workstation.cursor = "url('pickaxe.cur'),default";
	});

	stage.addChild(workstation);
}