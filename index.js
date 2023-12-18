console.log("hello world");



function handleSubmit(event) {
	event.preventDefault();
	
	alert('The form has been submitted successfully');
}


let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);


function mouseOver(event) {
	event.preventDefault();
	
	alert('The Eye is watching');
}
let mouse = document.querySelector('#eye')
mouse.addEventListener('click', mouseOver);