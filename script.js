// Muestra un mensaje cuando se carga la página
window.onload = function() {
    console.log('La página se ha cargado correctamente.');
}

// Agrega un evento a los enlaces del menú para mostrar un mensaje en la consola cuando se hace clic
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function() {
        console.log(`Has hecho clic en el enlace: ${this.textContent}`);
    });
});

// Agregar funcionalidad al botón de "Iniciar Sesión"
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Simulación de una llamada al servidor usando Fetch
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            // Mostrar una respuesta ficticia del servidor
            console.log('Respuesta del servidor:', data);
            alert('Usuario autentificado en el servidor');
        })
        .catch((error) => {
            console.error('Error en la solicitud:', error);
            alert('Error al autentificar en el servidor');
        });
    } else {
        alert('Por favor, ingrese su usuario y contraseña.');
    }
});
