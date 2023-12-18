function favoriteColor(event) {
	event.preventDefault();
	
	alert('Your favorite color is brown');
}

let colorButton = document.querySelector('#color');
colorButton.addEventListener('click', favoriteColor);

function favoritePlace(event) {
	event.preventDefault();
	
	alert('Your favorite place is Lagos');
}

let placeButton = document.querySelector('#place');
placeButton.addEventListener('click', favoritePlace);

function favoriteRitual(event) {
	event.preventDefault();
	
	alert('Your favorite ritual is cooking');
}

let ritualButton = document.querySelector('#ritual');
ritualButton.addEventListener('click', favoriteRitual);