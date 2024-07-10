function modificar() {
    let id = document.getElementById("id").value
    let nombre_ingresado = document.getElementById("nombre").value
    let telefono_ingresado = document.getElementById("telefono").value 
    let email_ingresado = document.getElementById("email").value 
    let password_ingresada = document.getElementById("password").value 

    // Validación simple para asegurar que los campos no estén vacíos
    if (!nombre_ingresado || !telefono_ingresado || !email_ingresado || !password_ingresada) {
        alert("Por favor completa todos los campos.");
        return;
    }

    let datos = {
        nombre: nombre_ingresado,
        telefono:telefono_ingresado,
        email:email_ingresado,
        password:password_ingresada
    }

    console.log(datos);

    let url = "https://traslados.pythonanywhere.com/update/" + id;
    var options = {
        body: JSON.stringify(datos),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        // el navegador sigue automáticamente las redirecciones y devulve el recurso final al que se ha redirigido.
        redirect: 'follow'
    }
    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud.');
            }
            return response.json();
        })
        .then(data => {
            console.log("Modificado");
            alert("Registro Modificado");
            //Puedes utilizar window.location.href para obtener la URL actual, redirigir a otras páginas
            window.location.href = "../tabla_clientes.html";
        })
        .catch(err => {
            console.error(err);
            alert("Error al Modificar");
        });
    
}