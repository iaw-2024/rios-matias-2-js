const {books} = fetch('/books')
.then((response) => response.json())
.then((json) => {
    addListElements(json.books)
}
);

function addListElements(bookList){
    const listaLibros = document.getElementById('book-list');

    bookList.forEach(libro => {
        const nuevoElementoLi = document.createElement('li');
        nuevoElementoLi.classList.add('book-card');

        const titulo = document.createElement('h2');
        titulo.textContent = `Título: ${libro.name}`;

        const autor = document.createElement('p');
        autor.classList.add('card-author');
        autor.textContent = `Autor: ${libro.author}`;

        const puntaje = document.createElement('p');
        puntaje.classList.add('card-score');
        puntaje.textContent = `Puntaje: ${libro.stars}`;

        const edicion = document.createElement('p');
        edicion.classList.add('card-Edition');
        edicion.textContent = `Edición: ${libro.edition}`;

        const cantidadReviews = document.createElement('p');
        cantidadReviews.classList.add('card-review');
        cantidadReviews.textContent = `Cantidad de Reviews: ${libro.reviewCount}`;

        const comentario = document.createElement('p');
        comentario.classList.add('card-comment');
        comentario.textContent = `Comentario: ${libro.review}`;

        nuevoElementoLi.appendChild(titulo);
        nuevoElementoLi.appendChild(autor);
        nuevoElementoLi.appendChild(puntaje);
        nuevoElementoLi.appendChild(edicion);
        nuevoElementoLi.appendChild(cantidadReviews);
        nuevoElementoLi.appendChild(comentario);

        listaLibros.appendChild(nuevoElementoLi);
    });
}
