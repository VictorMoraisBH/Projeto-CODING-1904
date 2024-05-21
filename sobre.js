document.addEventListener('DOMContentLoaded', (event) => {
    // Função para carregar comentários do localStorage
    function carregarComentarios() {
        const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
        const listaComentarios = document.getElementById('lista-comentarios');
        listaComentarios.innerHTML = ''; // Limpar a lista de comentários
        comentarios.forEach(comentario => {
            const novoComentario = document.createElement('div');
            novoComentario.classList.add('comentario');
            novoComentario.innerHTML = `<strong>${comentario.nome}</strong><p>${comentario.texto}</p>`;
            listaComentarios.appendChild(novoComentario);
        });
    }

    // Carregar comentários ao iniciar a página
    carregarComentarios();

    // Função para salvar comentários no localStorage
    function salvarComentario(nome, texto) {
        const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
        comentarios.push({ nome, texto });
        localStorage.setItem('comentarios', JSON.stringify(comentarios));
    }

    // Adicionar evento ao formulário
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

        // Salva o comentário no localStorage
        salvarComentario(nome, comentario);

        // Limpa o formulário
        document.getElementById('form-comentarios').reset();
    });
});