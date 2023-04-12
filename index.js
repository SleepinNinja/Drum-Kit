var buttons = document.querySelectorAll('.drum');
var drumMapping = {
	'w': 'tom-1', 
	'a': 'tom-2', 
	's': 'tom-3', 
	'd': 'tom-4', 
	'j': 'crash',
	'k': 'snare',
	'l': 'kick-bass',
}

for (var button of buttons) {
	button.addEventListener('click', handleClick);
}

/*
var keyObjects = [];
function KeySound(key) {
	this.key = key;
	this.audio = `sounds/${drumMapping[key]}`;
	this.playAudio = function() {
		var audio = new Audio(this.audio);
		this.play()
	};
}


for(var key in drumMapping) { 
	key = new KeySound(key)
	keyObjects.push(key)
}

console.log(keyObjects);
*/
document.addEventListener('keypress', handleButtonPress);

function playAudio(audio_file) {
	var audio = new Audio(`sounds/${audio_file}.mp3`);
	audio.play();
}

function handleButtonPress() {
	console.log(event);

	buttonName = event.key;
	if (buttonName in drumMapping) {
		buttonAnimation(buttonName);
		playAudio(drumMapping[buttonName])
	}
}

function handleClick() {
	console.log(this);

	var drumName = this.textContent;
	this.style.color = '#fff';
	buttonAnimation(drumName)
	playAudio(drumMapping[drumName]);
}


function buttonAnimation(button) {
	var active = document.querySelector('.' + button);
	active.classList.add('pressed');
	setTimeout(function() {
		active.classList.remove('pressed');
	}, 150);
}