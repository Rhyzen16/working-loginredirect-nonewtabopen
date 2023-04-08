function validateForm() {

  const username = document.getElementById("username").value;

  const password = document.getElementById("password").value;

  if (username === "" || password === "") {

    document.getElementById("error-message").innerHTML = "Please fill out both fields.";

    return false;

  }

  return true;

}

function loginUser() {

  const username = document.getElementById("username").value;

  const password = document.getElementById("password").value;

  // Here, you would typically make an API call to verify the credentials

  // In this example, we're just checking if the username and password match

  if (username === "admin" && password === "password") {

    alert("Login successful!");
    window.location.href = "https://manhuafast.net/"; 
    return true;

  } else {

    alert("Invalid username or password.");

  }

}

document.addEventListener("DOMContentLoaded", function(event) { 

  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (validateForm()) {

      loginUser();

    }

  });

});

