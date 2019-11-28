
function crearNoticia(data)
{
    let noticia = document.createElement("div");
    noticia.innerHTML = document.querySelector("#tplArticle").innerHTML;
    
    noticia.querySelector(".titulo").innerHTML = data.titulo;
    noticia.querySelector(".autor").innerHTML = data.autor;
    noticia.querySelector(".texto").innerHTML = data.texto;
    noticia.querySelector(".imagen").src = data.imagen;

    document.querySelector("#ultimas_noticias").appendChild(noticia);
}


let url = "http://localhost:3000/api/v1/notas";

fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        console.log(json.response);
        console.log("LEN", json.response.length);
        json.response.forEach(nota => {
            crearNoticia(nota);
        });
    });

