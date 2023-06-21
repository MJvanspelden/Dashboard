const loginUsername = document.querySelector(".username-field");
const loginPassword = document.querySelector(".password-field");
const loginButton = document.querySelector(".login-form-submit");
const loginErrorMsg = document.querySelector(".login-error-msg-holder");
const savedUsername = document.querySelector(".savedUsername");

loginButton.addEventListener("click", checkUsernamePassword)

function checkUsernamePassword() {
    const username = loginUsername.value;
    const password = loginPassword.value;
    if (username === "gebruiker1234" && password === "school") {
        alert("You have succesfully logged in.");
        window.location.href = '/home.html'
        window.localStorage.setItem('username', 'gebruiker1234')
        window.localStorage.setItem('password', 'school')
        savedUsername.innerHTML = localStorage.getItem('username')
    } else {
        loginErrorMsg.style.opacity = 2;
    }
}

