document.getElementById('form-comentarios').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores do formulário
    const nome = document.getElementById('nome').value;
    const comentario = document.getElementById('comentario').value;

    // Cria um novo elemento de comentário
    const novoComentario = document.createElement('div');
    novoComentario.classList.add('comentario');
    novoComentario.innerHTML = `<strong>${nome}</strong><p>${comentario}</p>`;

    // Adiciona o novo comentário à lista de comentários
    document.getElementById('lista-comentarios').appendChild(novoComentario);

    // Limpa o formulário
    document.getElementById('form-comentarios').reset();
});