function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Accès pour l'administrateur
    if (username === 'Admin' && password === 'CEidea2024') {
        alert("Connexion administrateur réussie");
        return true;
    }

    // Accès pour l'utilisateur standard
    if (username === 'IDEACalais' && password === '@Idea62Calais') {
        alert("Connexion utilisateur réussie");
        return true;
    }

    alert("Identifiant ou mot de passe incorrect");
    return false;
}

function openMonth(month) {
    const months = document.getElementsByClassName('month');
    for (let i = 0; i < months.length; i++) {
        months[i].style.display = 'none';
    }
    document.getElementById(month).style.display = 'block';
}

