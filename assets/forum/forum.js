function mostrarConteudo(numero) {
    var conteudoExtra = document.getElementById('conteudo-extra');
    var conteudos = document.getElementsByClassName('conteudo');
    
    for (var i = 0; i < conteudos.length; i++) {
        conteudos[i].style.display = 'none'; // Oculta todos os conteúdos
    }

    // Exibe o conteúdo extra com base no número recebido como argumento
    switch (numero) {
        case 1:
            conteudoExtra.innerHTML = '<h2>Notícias Adicionais</h2><p>Aqui estão mais notícias...</p>';
            break;
        case 2:
            conteudoExtra.innerHTML = '<h2>Temas Adicionais</h2><p>Mais discussões sobre temas...</p>';
            break;
        case 3:
            conteudoExtra.innerHTML = '<h2>Membros Adicionais</h2><p>Lista de membros extras...</p>';
            break;
        default:
            break;
    }

    conteudoExtra.style.display = 'block'; // Exibe o conteúdo extra
    
    // Adiciona um evento de clique no conteúdo extra para voltar à página anterior
    conteudoExtra.addEventListener('click', function() {
        history.back();
    });
}
