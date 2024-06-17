document.addEventListener('DOMContentLoaded', () => {
    const topicsContainer = document.getElementById('topics'); // Container dos tópicos na interface
    const newTopicForm = document.getElementById('new-topic-form'); // Formulário de novo tópico

    // Carregar tópicos salvos localmente ao carregar a página
    loadTopics();

    // Event listener para adicionar novo tópico
    newTopicForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impedir envio padrão do formulário

        // Obter título e conteúdo do novo tópico
        const title = document.getElementById('topic-title').value;
        const content = document.getElementById('topic-content').value;

        // Criar objeto de tópico
        const topic = {
            category: 'Discussões Gerais',
            title: title,
            content: content,
            replies: [] // Array para futuras respostas
        };

        // Adicionar tópico à localStorage
        addTopic(topic);

        // Atualizar exibição dos tópicos
        displayTopics();

        // Limpar formulário
        newTopicForm.reset();
    });

    // Adicionar tópico à localStorage
    function addTopic(topic) {
        const topics = JSON.parse(localStorage.getItem('topics')) || [];
        topics.push(topic);
        localStorage.setItem('topics', JSON.stringify(topics));
    }

    // Carregar tópicos da localStorage e exibi-los
    function loadTopics() {
        const topics = JSON.parse(localStorage.getItem('topics')) || [];
        topics.forEach(topic => {
            displayTopic(topic);
        });
    }

    // Limpar container de tópicos e exibir todos os tópicos
    function displayTopics() {
        topicsContainer.innerHTML = '';
        const topics = JSON.parse(localStorage.getItem('topics')) || [];
        topics.forEach(topic => {
            displayTopic(topic);
        });
    }

    // Exibir um único tópico na interface
    function displayTopic(topic) {
        const topicElement = document.createElement('div');
        topicElement.classList.add('forum');
        topicElement.innerHTML = `
            <h3>${topic.title}</h3>
            <p>${topic.content}</p>
            <button onclick="showReplies(this)">Mostrar Respostas</button>
            <div class="replies" style="display: none;">
                <!-- Respostas serão adicionadas aqui -->
            </div>
            <form class="reply-form" onsubmit="addReply(event, this)">
                <label for="reply-content">Resposta:</label>
                <textarea id="reply-content" required></textarea>
                <button type="submit">Responder</button>
            </form>
        `;
        topicsContainer.appendChild(topicElement);
    }
});

// Mostrar ou ocultar respostas de um tópico
function showReplies(button) {
    const repliesContainer = button.nextElementSibling;
    if (repliesContainer.style.display === 'none') {
        repliesContainer.style.display = 'block';
        button.innerText = 'Ocultar Respostas';
    } else {
        repliesContainer.style.display = 'none';
        button.innerText = 'Mostrar Respostas';
    }
}

// Adicionar nova resposta a um tópico
function addReply(event, form) {
    event.preventDefault();
    const content = form.querySelector('textarea').value;
    const repliesContainer = form.previousElementSibling;
    const reply = document.createElement('div');
    reply.classList.add('reply');
    reply.innerHTML = `<p>${content}</p>`;
    repliesContainer.appendChild(reply);
    form.reset();
}
