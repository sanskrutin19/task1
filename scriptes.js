document.addEventListener("DOMContentLoaded", function () {
    const showSignup = document.getElementById("show-signup");
    const showLogin = document.getElementById("show-login");
    const loginBox = document.querySelector(".login");
    const signupBox = document.querySelector(".signup");

    showSignup.addEventListener("click", function () {
        loginBox.classList.add("hidden");
        signupBox.classList.add("active");
    });

    showLogin.addEventListener("click", function () {
        loginBox.classList.remove("hidden");
        signupBox.classList.remove("active");
    });
});

function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}
