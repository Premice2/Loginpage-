export const password = document.getElementById("password");
export const bar= document.getElementById("bar");
export const message = document.getElementById("message");
export const eye = document.getElementById("eye");
export const submitButton = document.getElementById("submitButton");
export const emailInput = document.getElementById("email");
export const usernameInput = document.getElementById("username");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


password.addEventListener("input", () => {
    const length = password.value.length;
    if(length === 0) {
        bar.style.width = "0%";
        message.textContent = "Start typing...";
    }
    else if(length < 5) {
        bar.style.width = "30%";
        bar.style.background = "#ef4444";
        message.textContent = "Weak password";
    }
    else if(length < 10) {
        bar.style.width = "65%";
        bar.style.background = "#f59e0b";
        message.textContent = "Moderate password";
    }
    else {
        bar.style.width = "100%";
        bar.style.background = "#22c55e";
        message.textContent = "Strong password";
    }
})
eye.addEventListener("click", () => {
    if(password.type === "password") {
        password.type = "text";
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    }
    else {
        password.type = "password";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }
})

function checkForm() {
    const emailValid = emailRegex.test(emailInput.value.trim()); // le test() ce pour vérifier si l'email est valide selon le regex et le 
    const usernameValid = usernameInput.value.trim().length > 0;
    const passwordValid = password.value.trim().length > 0; // ajoute tes propres règles si besoin
    
        if (emailValid && usernameValid && passwordValid) {
        submitButton.disabled = false; // cette condition check si toutes les conditions sont rempli d'ou on utilise &&. si tout est valide alore le button fonctionne (.disabled = false) et on ajoute la class active pour le style du button
        submitButton.classList.add('active');
        submitButton.style.backgroundColor = "orange"; // change la couleur du button si tout est valide
    } else {
        submitButton.disabled = true;
        submitButton.classList.remove('active');
        submitButton.style.backgroundColor = "gray"; // change la couleur du button si tout n'est pas valide
    }
}
// ce code en bas permet de vérifier les inputs à chaque fois que l'utilisateur tape quelque chose dans les champs email, username et password. On utilise l'event 'input' pour déclencher la fonction checkForm() à chaque modification des champs.
emailInput.addEventListener('input', checkForm);
usernameInput.addEventListener('input', checkForm);
password.addEventListener('input', checkForm);



export const users = JSON.parse(localStorage.getItem("users")) || []; // récupère les utilisateurs existants depuis le localStorage ou initialise un tableau vide si aucun utilisateur n'est trouvé

submitButton.addEventListener('click', ()=> {

    const newEmail = emailInput.value.trim().toLowerCase();
    const newUsername = usernameInput.value.trim();

    const emailExists = users.some(u => u.email.toLowerCase() === newEmail);
    const usernameExists = users.some(u => u.username === newUsername);

    if (emailExists) {
        alert('This email is already in use!Please choose another one.');
        return;
    }
    if (usernameExists) {
        alert('This username is already taken! Please choose another one.');
        return;
    }
    
    const newUser = {
        username: newUsername,
        email: newEmail,
        password: password.value
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    console.log(users);

    alert(`Account created successfully for ${newUser.username}!`);

})

// this code is special for the signIn page.


