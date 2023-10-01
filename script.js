document.addEventListener('DOMContentLoaded', () => {
    const nombrePokemon = document.getElementById('listado');

    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(response => response.json())
        .then(data => {
            data.results.forEach(nombre => {
                const añadirNombre = document.createElement('li'); 
                añadirNombre.textContent = nombre.name; 
                nombrePokemon.appendChild(añadirNombre);
            });
        })
        .catch(error => {
            console.log('Error al obtener el nombre del Pokémon', error);
        });
});