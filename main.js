cajaPrincipal = document.getElementById("rating");

for (let i = 1; i <= 10; i++) {
    let imagen = document.createElement("img");
    imagen.src = "carita.jpg"; 
    cajaPrincipal.appendChild(imagen);
    imagen.classList.add("item");
    imagen.setAttribute("pos", i);
    imagen.id = "item-" + i;


    imagen.addEventListener("mouseover", function () {
        let posicion = parseInt(this.getAttribute("pos"));
        for (let j = 1; j <= posicion; j++) {
            let nuevo = document.getElementById("item-" + j);
            nuevo.src = "carita3.png"; 
        }
    });

    // Evento para restaurar las imágenes al quitar el mouse
    imagen.addEventListener("mouseout", function () {
        for (let j = 1; j <= 10; j++) {
            let nuevo = document.getElementById("item-" + j);
            nuevo.src = "carita.jpg"; 
        }
    });
}
