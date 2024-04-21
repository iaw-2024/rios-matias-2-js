const libros = [
    {
        "name": "Harry Potter y la piedra filosofal",
        "author": "J.K. Rowling",
        "review": "Una aventura mágica que cautiva desde la primera página.",
        "reviewCount": 90,
        "edition": "Edición ilustrada",
        "stars": 5
    },
    {
        "name": "Maze Runner",
        "author": "James Dashner",
        "review": "Una emocionante historia de supervivencia en un mundo post-apocalíptico.",
        "reviewCount": 70,
        "edition": "Edición especial de película",
        "stars": 4
    },
    {
        "name": "El gran Gatsby",
        "author": "F. Scott Fitzgerald",
        "review": "Una obra maestra atemporal que captura la esencia de la era del jazz.",
        "reviewCount": 50,
        "edition": "Edición centenaria",
        "stars": 4
    },
    {
        "name": "Orgullo y prejuicio",
        "author": "Jane Austen",
        "review": "Una encantadora historia de amor, ingenio y expectativas sociales.",
        "reviewCount": 75,
        "edition": "Edición especial de coleccionista",
        "stars": 5
    },
    {
        "name": "Las Crónicas de Narnia",
        "author": "C.S. Lewis",
        "review": "Un mundo de fantasía que te transportará a tierras mágicas y aventuras inolvidables.",
        "reviewCount": 40,
        "edition": "Edición completa",
        "stars": 5
    }
]

const listaLibros = document.getElementById('book-list');

libros.forEach(libro => {
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