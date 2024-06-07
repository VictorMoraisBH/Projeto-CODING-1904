// Seleciona a imagem da lua
const modeIcon = document.getElementById('mode_icon');

// Adiciona um ouvinte de evento de clique à imagem da lua
modeIcon.addEventListener('click', () => {
    // Seleciona o elemento body
    const body = document.body;

    // Verifica se o body possui a classe dark-mode
    const isDarkMode = body.classList.contains('dark-mode');

    // Se o body já estiver no modo escuro, remove a classe dark-mode, caso contrário, adiciona
    if (isDarkMode) {
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
    }
});

