const users = JSON.parse(localStorage.getItem('users')) || [];

const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginBtn = document.getElementById('loginBtn');

eye.addEventListener("click", () => {
    if(loginPassword.type === "password") {
        loginPassword.type = "text";
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    }
    else {
        loginPassword.type = "password";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }
})

loginBtn.addEventListener('click', () => {
    const enteredEmail = loginEmail.value.trim().toLowerCase();
    const enteredPassword = loginPassword.value;
    const message = document.getElementById("message");


    // Chercher l'utilisateur correspondant à cet email
    const foundUser = users.find(u => u.email.toLowerCase() === enteredEmail);

    if (!foundUser) {

        message.textContent = "Please enter a valid email or password.";
        alert('No account found with this email.');
        return;
    }

    if (foundUser.password !== enteredPassword) {
        message.textContent = "Please enter a valid email or password.";
        alert('Wrong Password!.');
        return;
    }

    // Connexion réussie
    alert(`Welcome back ${foundUser.username} !`);
    loginEmail.value = '';
    loginPassword.value = '';
    message.textContent = '';
    loginbtn.disabled = true;
    // ici tu peux rediriger vers une autre page, par exemple :
    // window.location.href = 'dashboard.html';
});