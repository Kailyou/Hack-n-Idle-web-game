function profileButtons() {
	
	//Overall
	var background = new createjs.Shape();
	background.name = "background";
	background.graphics.beginFill(buttonColour).drawRoundRect(0, 0, 80, 30, 10);

	var label = new createjs.Text("Overall", "bold 16px Arial", "#FFFFFF");
	label.name = "label";
	label.textAlign = "center";
	label.textBaseline = "middle";
	label.x = 80 / 2;
	label.y = 30 / 2;
	
	var button = new createjs.Container();
	button.name = "button";
	button.x = 10;
	button.y = 100;
	button.addChild(background, label);

	button.on("click", function() {
		profile_initOverall();
	});
	
	stage.addChild(button);
	
	
	//Adventure
	var background = new createjs.Shape();
	background.name = "background";
	background.graphics.beginFill(buttonColour).drawRoundRect(0, 0, 80, 30, 10);

	var label = new createjs.Text("Adventure", "bold 16px Arial", "#FFFFFF");
	label.name = "label";
	label.textAlign = "center";
	label.textBaseline = "middle";
	label.x = 80 / 2;
	label.y = 30 / 2;

	var button = new createjs.Container();
	button.name = "button";
	button.x = 100;
	button.y = 100;
	button.addChild(background, label);

	button.on("click", function() {
		profile_initAdventure();
	});
	
	stage.addChild(button);
	

	//Training
	var background = new createjs.Shape();
	background.name = "background";
	background.graphics.beginFill(buttonColour).drawRoundRect(0, 0, 80, 30, 10);

	var label = new createjs.Text("Training", "bold 16px Arial", "#FFFFFF");
	label.name = "label";
	label.textAlign = "center";
	label.textBaseline = "middle";
	label.x = 80 / 2;
	label.y = 30 / 2;

	var button = new createjs.Container();
	button.name = "button";
	button.x = 190;
	button.y = 100;
	button.addChild(background, label);

	button.on("click", function() {
		profile_initTraining();
	});
	
	stage.addChild(button);
	
	
	//Working
	var background = new createjs.Shape();
	background.name = "background";
	background.graphics.beginFill(buttonColour).drawRoundRect(0, 0, 80, 30, 10);

	var label = new createjs.Text("Working", "bold 16px Arial", "#FFFFFF");
	label.name = "label";
	label.textAlign = "center";
	label.textBaseline = "middle";
	label.x = 80 / 2;
	label.y = 30 / 2;

	var button = new createjs.Container();
	button.name = "button";
	button.x = 280;
	button.y = 100;
	button.addChild(background, label);

	button.on("click", function() {
		profile_initWorking();
	});
	
	stage.addChild(button);			
}
