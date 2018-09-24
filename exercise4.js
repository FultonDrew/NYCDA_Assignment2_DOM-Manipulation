// .Exercise 4


function formValidation(){
	var password = getElementById('password').value
	var username = getElementById('username').value
	var usernumber = username.match(/\d/)
		console.log(username)
// 	if (password.innerHTML === "12345678" && username.innerHTML === myFunction() ){
// 		console.log('These are correct')
// 	}else (b !== "12345678"){
// 		function alert() {
//    		 alert("This is incorrect")};
// 	}
}
// formValidation()



// function confirm() {
//     var x = document.getElementById("fname").value;
//     document.getElementById("demo").innerHTML = x;
// }

// onclick submit button

// Create an HTML page with a form. The form should include inputs for a username, email, and password as well as a submit button.
// In a Javascript file, write code that does the following things:
// checks that the password is 12345678
// checks that the username contains at least one number
// if anything is wrong, send an alert message saying "incorrect"
// Your page should also include an H1 tag. If the information in the form is correct, have Javascript change the text in the H1.