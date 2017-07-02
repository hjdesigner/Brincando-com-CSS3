const keys = document.querySelectorAll('.key');

function playSound(e){
	const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);

	if(!sound) return
		sound.currentTime = 0;
		sound.play();
		
}

function clickSound(e){
	const audioClick = e.target.dataset.key;
	const audio = document.querySelector(`audio[data-key="${audioClick}"]`);

	if(!audio) return
		audio.currentTime = 0;
		audio.play();
}

window.addEventListener('keydown', playSound);

keys.forEach(key => key.addEventListener('click', clickSound));