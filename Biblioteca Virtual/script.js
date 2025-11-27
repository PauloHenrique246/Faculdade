function validarLogin() {
    pagina = "populares.html";
    let emailUsuario = document.getElementById('email').value;
    let senhaUsuario = document.getElementById('senha').value;

    if(emailUsuario == "admin@gmail.com" && senhaUsuario == "123"){
        alert("Você está logado como administrador (A página do administrador tem que ser cirada ainda)");
        window.location.href = pagina;
    }

    else{
        alert("Bem vindo(a)!");
        window.location.href = pagina;
    }
}