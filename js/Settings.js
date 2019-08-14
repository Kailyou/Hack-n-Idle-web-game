

function initSoundSlider(){
   var SoundSliderContainer = new createjs.Container();
   SoundSliderContainer.setBounds(0,0,150,60);
   
}

function initSettingMode(){
	stage = new createjs.Stage("game");
	stage.enableDOMEvents(true);
	
	initSoundSlider();
}
