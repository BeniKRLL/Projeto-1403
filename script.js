function register() {
    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Validação básica
    if (!name || !email || !password) {
        document.getElementById("regFeedback").innerText = "Preencha todos os campos!";
        return;
    }

    if (users.some(user => user.email === email)) {
        document.getElementById("regFeedback").innerText = "E-mail já cadastrado!";
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("regFeedback").innerText = "Cadastro realizado com sucesso!";
    setTimeout(() => window.location.href = 'login.html', 1000);
}

function validateLoginFields() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    document.getElementById("loginBtn").disabled = !(email && password);
}

function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(user => user.email === email && user.password === password);
    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "homepage.html";
    } else {
        document.getElementById("loginFeedback").innerText = "E-mail ou senha incorretos!";
    }
}

// Inicialização
document.addEventListener("DOMContentLoaded", function() {
    // Se estiver na página de login, verificar campos
    if (document.getElementById("loginEmail")) {
        validateLoginFields();
    }
});