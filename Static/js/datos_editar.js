// Procedimiento para traer los datos del registro a editar
let cadena = location.search; // Obtener la cadena de búsqueda de la URL, por ejemplo: "?id=9&nombre=bulbasaur"

// Crear un objeto URLSearchParams con la cadena
let datos = new URLSearchParams(cadena);

// Crear un objeto para almacenar los nombres de las variables y sus valores
let resultado = {};

// Iterar sobre los parámetros y guardar los nombres y valores en el objeto resultado
for (const [nombre, valor] of datos) {
    resultado[nombre] = valor;
}

// Mostrar los datos a editar en el formulario de edición
document.getElementById("id").value = resultado["id"]; // Asignar el valor del parámetro 'id' al campo con id="id"
document.getElementById("nombre").value = resultado["nombre"]; // Asignar el valor del parámetro 'nombre' al campo con id="nombre"
document.getElementById("telefono").value = resultado["telefono"]; // Asignar el valor del parámetro 'telefono' al campo con id="telefono"
document.getElementById("email").value = resultado["email"]; // Asignar el valor del parámetro 'email' al campo con id="email"
document.getElementById("password").value = resultado["password"]; // Asignar el valor del parámetro 'password' al campo con id="password"
