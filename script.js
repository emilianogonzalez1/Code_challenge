

document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('formulario');
    const URL = 'https://jsonplaceholder.typicode.com/users';




form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nom = document.getElementById('nombre').value;
    const apell = document.getElementById('apellido').value;
    const naci = document.getElementById('cumple').value;


    const data ={
        nom: nom,
        apell: apell,
        naci: naci
    };


    const stsg = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

fetch(URL, stsg)
    .then(response => response.json())
    .then(data => {
        console.log("Respuesta del servidor:" + JSON.stringify(data))
    })

 
    .catch(error => {
        console.error('Error:', error);
    });

});
});
