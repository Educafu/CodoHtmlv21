document.getElementById("header").innerHTML= `
<nav class="menu">
    <a href="#" onclick="navigateTo('../tabla_clientes.html')"> Lista de Clientes </a>
    <a href="#" > | </a>
    <a href="#" onclick="navigateTo('templates/ingresar_cliente.html')"> Registrar Cliente </a>
</nav>
`;

function navigateTo(url) {
    window.location.href = url;
}
