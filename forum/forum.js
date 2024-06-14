function mostrarConteudo(numero) {
    var conteudoExtra = document.getElementById('conteudo-extra');
    var tituloExtra1 = document.getElementById('titulo-extra-1');
    var tituloExtra2 = document.getElementById('titulo-extra-2');
    var textoExtra = document.getElementById('texto-extra');
    var conteudos = document.getElementsByClassName('conteudo');

    // Oculta todos os títulos extras e remove a classe highlight
    tituloExtra1.style.display = 'none';
    tituloExtra1.classList.remove('highlight-1');
    tituloExtra2.style.display = 'none';
    tituloExtra2.classList.remove('highlight-2');

    // Oculta todos os conteúdos originais
    for (var i = 0; i < conteudos.length; i++) {
        conteudos[i].style.display = 'none';
    }

    // Exibe o conteúdo extra com base no número recebido como argumento
    switch (numero) {
        case 1:
            // Exibe o título extra para a case 1 e adiciona a classe highlight
            tituloExtra1.style.display = 'block';
            tituloExtra1.innerHTML = 'Título Extra para a Case 1';
            tituloExtra1.classList.add('highlight-1');

            // Define o texto extra para a case 1
            textoExtra.innerHTML = 'Aqui estão mais notícias...';

            // Exibe o conteúdo extra
            conteudoExtra.style.display = 'block';
            break;
        case 2:
            // Exibe o título extra para a case 2 e adiciona a classe highlight
            tituloExtra2.style.display = 'block';
            tituloExtra2.innerHTML = 'Título Extra para a Case 2';
            tituloExtra2.classList.add('highlight-2');

            // Define o texto extra para a case 2
            textoExtra.innerHTML = 'Mais discussões sobre temas...';

            // Exibe o conteúdo extra
            conteudoExtra.style.display = 'block';
            break;
        case 3:
            // Exibe o título extra para a case 3 e adiciona a classe highlight
            tituloExtra2.style.display = 'block';
            tituloExtra2.innerHTML = 'Título Extra para a Case 3';
            tituloExtra2.classList.add('highlight-3');

            // Define o texto extra para a case 3
            textoExtra.innerHTML = 'Mais discussões sobre membros...';
            // Exibe o conteúdo extra
            conteudoExtra.style.display = 'block';
            break;
        default:
            break;
    }
}

function voltar() {
    var conteudoExtra = document.getElementById('conteudo-extra');
    var conteudos = document.getElementsByClassName('conteudo');

    // Oculta o conteúdo extra
    conteudoExtra.style.display = 'none';

    // Exibe todos os conteúdos originais
    for (var i = 0; i < conteudos.length; i++) {
        conteudos[i].style.display = 'block';
    }
}
