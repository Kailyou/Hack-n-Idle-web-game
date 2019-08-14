/**
 * @author: Alex
 */

var queue;

//initialises the queue and calls initLoadManifest()
function initPreloadingQueue() {
	queue = new createjs.LoadQueue();
	createjs.Sound.alternateExtensions = ["mp3"];
	queue.installPlugin(createjs.Sound);
	queue.on("complete", handleComplete, this);
	//queue.on("fileload", handleFileLoad, this);
	queue.on("error", handleError, this);

	initLoadManifest();
}

//adds items to the loading queue
function initLoadManifest() {
	//adventure
	queue.loadManifest([{
		src : "img/adventure/monsterImages/1 - Betaquad.png"
	}, {
		src : "img/adventure/monsterImages/2 - Deathhand.png"
	}, {
		src : "img/adventure/monsterImages/3 - Kraknong.png"
	}, {
		src : "img/adventure/monsterImages/4 - Planfly.png"
	}, {
		src : "img/adventure/monsterImages/5 - Mechcrab.png"
	}, {
		src : "img/adventure/monsterImages/6 - Sleimy.png"
	}, {
		src : "img/adventure/monsterImages/7 - Schildy.png"
	}, {
		src : "img/adventure/monsterImages/Special - Missingno.png"
	}, {
		src : "img/adventure/background.png"
	}, {
		src : "img/adventure/potion_empty.png"
	}, {
		src : "img/adventure/potion_full.png"
	}]);

	//main menu
	queue.loadManifest([{
		src : "img/mainmenu/background.png"
	}, {
		src : "img/mainmenu/Button_Adventure.png"
	}, {
		src : "img/mainmenu/Button_Profile.png"
	}, {
		src : "img/mainmenu/Button_Reset.png"
	}, {
		src : "img/mainmenu/Button_Shop.png"
	}, {
		src : "img/mainmenu/Button_Training.png"
	}, {
		src : "img/mainmenu/Button_Work.png"
	}, {
		src : "img/mainmenu/Sound_Active.png"
	}, {
		src : "img/mainmenu/Sound_Mute.png"
	}, {
		src : "img/mainmenu/title.png"
	}, {
		src : "img/mainmenu/version1-0.png"
	}]);

	//shop
	queue.loadManifest([{
		src : "img/shop/background old.png"
	}, {
		src : "img/shop/background.png"
	}, {
		src : "img/shop/button.jpg"
	}, {
		src : "img/shop/buy_healpot.png"
	}, {
		src : "img/shop/tooltip.png"
	}, {
		src : "img/shop/upgrade_armor.png"
	}, {
		src : "img/shop/upgrade_autofarmerGold.png"
	}, {
		src : "img/shop/upgrade_cc_3.png"
	}, {
		src : "img/shop/upgrade_potion.png"
	}, {
		src : "img/shop/upgrade_shield.png"
	}, {
		src : "img/shop/upgrade_sword.png"
	}, {
		src : "img/shop/upgrade_trainFarmer_upgrade.png"
	}, {
		src : "img/shop/upgrade_training_autofarmer.png"
	}, {
		src : "img/shop/upgrade_trainingDMG.png"
	}, {
		src : "img/shop/upgrade_workFarmer_upgrade.png"
	}, {
		src : "img/shop/upgrade_working_autofarmer.png"
	}, {
		src : "img/shop/upgrade_working_DMG.png"
	}]);

	//animations, interface, others, profile, training, working
	queue.loadManifest([
	// {src : "img/animations/Sword1.png"},
	{
		src : "img/interface/battlelog.png"
	}, {
		src : "img/interface/frame.png"
	}, {
		src : "img/interface/startMenuStats.png"
	}, {
		src : "img/others/home.png"
	}, {
		src : "img/profile/background.jpg"
	}, {
		src : "img/training/background.png"
	}, {
		src : "img/training/dummy.png"
	}, {
		src : "img/working/background.png"
	}, {
		src : "img/working/gold.png"
	}]);

	//sound
	queue.loadManifest([{
		src : "audio/Sword.wav"
	}, {
		src : "audio/Level_Up.wav"
	}, {
		src : "audio/introSong.ogg"
	}]);
}

//called after loading is done
//enters start menu
function handleComplete(event) {
	//alert("complete");
	soundEfx = createjs.Sound.createInstance("audio/Sword.wav");
	soundLvlUp = createjs.Sound.createInstance("audio/Level_Up.wav");
	createjs.Sound.play("audio/introSong.ogg", {
		loop : -1
	}, {
		volume : 0.1
	});
	enterState("startMenu");
}

function handleError(event) {
	alert("Error on Loading: " + event.item.src);
}

//initialises the loading screen and calls initPreloadingQueue()
//call this if you want to load all the assets properly
function initLoadingScreen() {
	stage = new createjs.Stage("game");
	stage.enableDOMEvents(true);
	label = new createjs.Text("Loading...", "36px Courier", "black");
	label.x = 300;
	label.y = 250;

	stage.addChild(label);

	stage.update();

	initPreloadingQueue();
}
