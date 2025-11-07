let emailUsuario = document.getElementById('email');
let senhaUsuario = document.getElementById('senha');

async function validarLogin() {
    if(emailUsuario == "admin123@gmail.com" && senhaUsuario == "Juliana me da um 10"){
        return true;
    }

    else{
        return false;
    }
}
