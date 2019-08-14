function shopButtons() {

	//Equipment
	var image = queue.getResult("img/shop/button.jpg");

	var bitmap = new createjs.Bitmap(image);

	var label = new createjs.Text("Equipment", "Bold 20px Calisto MT", "#FFFFFF");
	label.name = "label";
	label.textAlign = "center";
	label.textBaseline = "middle";
	label.x = 150 / 2;
	label.y = 60 / 2;

	var container = new createjs.Container();
	container.name = "button";
	container.x = 10;
	container.y = 70;
	container.addChild(bitmap, label);

	container.on("click", function() {
		initAdventureShop();
	});

	container.on("mouseover", function() {
		container.cursor = 'pointer';
	});

	stage.addChild(container);

	//Training Upgrades
	var image = queue.getResult("img/shop/button.jpg");

	var bitmap = new createjs.Bitmap(image);

	var label = new createjs.Text("Training\n Upgrades", "Bold 20px Calisto MT", "#FFFFFF");
	label.name = "label";
	label.textAlign = "center";
	label.textBaseline = "middle";
	label.x = 150 / 2;
	label.y = 40 / 2;

	var container = new createjs.Container();
	container.name = "button";
	container.x = 220;
	container.y = 70;
	container.addChild(bitmap, label);

	container.on("click", function() {
		initTrainingShop();
	});

	container.on("mouseover", function() {
		container.cursor = 'pointer';
	});

	stage.addChild(container);

	//Working Upgrades
	var image = queue.getResult("img/shop/button.jpg");

	var bitmap = new createjs.Bitmap(image);

	var label = new createjs.Text("Working\n Upgrades", "Bold 20px Calisto MT", "#FFFFFF");
	label.name = "label";
	label.textAlign = "center";
	label.textBaseline = "middle";
	label.x = 150 / 2;
	label.y = 40 / 2;

	var container = new createjs.Container();
	container.name = "button";
	container.x = 430;
	container.y = 70;
	container.addChild(bitmap, label);

	container.on("click", function() {
		initWorkShop();
	});

	container.on("mouseover", function() {
		container.cursor = 'pointer';
	});

	stage.addChild(container);

	//Others
	var image = queue.getResult("img/shop/button.jpg");

	var bitmap = new createjs.Bitmap(image);

	var label = new createjs.Text("Others", "Bold 20px Calisto MT", "#FFFFFF");
	label.name = "label";
	label.textAlign = "center";
	label.textBaseline = "middle";
	label.x = 150 / 2;
	label.y = 60 / 2;

	var container = new createjs.Container();
	container.name = "button";
	container.x = 640;
	container.y = 70;
	container.addChild(bitmap, label);

	container.on("click", function() {
		initOtherShop();
	});

	container.on("mouseover", function() {
		container.cursor = 'pointer';
	});

	stage.addChild(container);
}
