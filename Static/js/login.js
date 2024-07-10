document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.querySelector('input[name="username"]').value;
    var password = document.querySelector('input[name="password"]').value;
    var errorMessage = document.getElementById('error-message');

    // Reset error message
    errorMessage.textContent = '';

    // Validate fields
    if (username === '') {
        errorMessage.textContent = 'El campo de usuario no puede estar vacío.';
        return;
    }

    if (password === '') {
        errorMessage.textContent = 'El campo de contraseña no puede estar vacío.';
        return;
    }

    // Simulate authentication process (you should replace this with a real authentication)
    // Check if the user is admin or client
    if (username === 'admin' && password === 'admin') {
        console.log('Usuario es un administrador.');
        // Redirigir a la página de administrador
        window.location.href = '../tabla_clientes.html'; // Página para administradores
        alert(`Bienvenido Super Supremo "${username}"`);
    } else if (username === 'cliente' && password === 'cliente') {
        console.log('Usuario es un cliente.');
        window.location.href = '../index.html'; // Asegúrate de que la ruta sea correcta
        alert(`Bienvenido ${username}`);
    } else {
        console.log('No es un Usuario Registrado.');
        errorMessage.textContent = alert('Usuario o contraseña incorrectos.');
    }

    // Proceed with form submission (e.g., send data to the server)
    console.log('Usuario:', username);
    console.log('Contraseña:', password);

    // Here you can add the code to send the data to the server
});
