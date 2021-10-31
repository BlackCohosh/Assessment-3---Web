console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("form submition successful");
}

let imgHover = document.getElementById("img");

imgHover.addEventListener("mouseover", function( event ) {
  alert("You have excellent taste in animals.")});

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);