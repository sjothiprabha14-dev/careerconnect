const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Registration Successful!");

    window.location.href = "login.html";

});