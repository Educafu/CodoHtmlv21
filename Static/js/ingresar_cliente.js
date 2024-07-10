function guardar() {
    // Obtener los valores ingresados y eliminar los espacios en blanco alrededor
    let nombre_ingresado = document.getElementById("nombre").value.trim();
    let telefono_ingresado = document.getElementById("telefono").value.trim();
    let email_ingresado = document.getElementById("email").value.trim();
    let password_ingresada = document.getElementById("password").value.trim();

    // Validaciones
    if (!nombre_ingresado || nombre_ingresado.length < 2 || /^\s/.test(nombre_ingresado)) {
        alert("El nombre no puede estar vacío, debe tener al menos 2 letras y no puede comenzar con un espacio.");
        return;
    }

    if (!telefono_ingresado || !/^\d{10,15}$/.test(telefono_ingresado)) {
        alert("El teléfono no puede estar vacío y debe tener entre 10 y 15 dígitos.");
        return;
    }

    if (!email_ingresado || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_ingresado)) {
        alert("El correo electrónico no es válido.");
        return;
    }

    if (!password_ingresada || password_ingresada.length < 8) {
        alert("La contraseña no puede estar vacía y debe tener al menos 8 caracteres.");
        return;
    }

    // Mostrar los datos en consola para verificar
    console.log(nombre_ingresado, telefono_ingresado, email_ingresado, password_ingresada);
    
    // Armar el objeto de datos
    let datos = {
        nombre: nombre_ingresado,
        telefono: telefono_ingresado,
        email: email_ingresado,
        password: password_ingresada
    };

    // Verificar mostrando datos en consola
    console.log(datos);
    
    let url = "https://traslados.pythonanywhere.com/registro";

    // Opciones para solicitud fetch
    var options = {
        body: JSON.stringify(datos), // Convierte a JSON
        method: 'POST', // Enviar datos a servidor
        headers: { 'Content-Type': 'application/json' }, // En el encabezado se indica que son datos JSON
    };

    fetch(url, options)
        .then(response => {
            if (response.ok) {
                console.log("creado");
                alert("Ingreso Exitoso");
                window.location.href = "../tabla_clientes.html";
            } else {
                throw new Error('Error al Ingresar');
            }
        })
        .catch(err => {
            alert("Error al Ingresar");
            console.error(err);
        });
}
