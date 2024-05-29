   // Função para fazer a requisição AJAX
   function fazerRequisicao() {
    const xml = new XMLHttpRequest(); // Cria um novo objeto XMLHttpRequest para fazer a requisição

    xml.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
    // Abre uma nova requisição GET assíncrona para o servidor web de teste

    xml.onreadystatechange = function() { // Define uma função a ser chamada quando o estado da requisição mudar
        if (xml.readyState === XMLHttpRequest.DONE) { // Verifica se a requisição está concluída
            if (xml.status === 200) { // Verifica se a resposta da requisição foi bem-sucedida
                const responseData = JSON.parse(xml.responseText); // Converte a resposta em formato JSON para um objeto JavaScript
                manipularDados(responseData); // Chama a função para manipular os dados recebidos
            } else {
                manipularErro(); // Chama a função para manipular o caso de erro na requisição
            }
        }
    };

    xml.send(); // Envia a requisição
}

// Função para manipular os dados recebidos
function manipularDados(data) {
    const container = document.getElementById('dadoscapturados'); // Obtém a referência ao elemento HTML onde os dados serão exibidos

    for (let i = 1; i <= 3; i++) { // Itera para os próximos 3 itens
        const section = document.createElement('section'); // Cria um novo elemento HTML 'section'
        section.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.body}</p>
        `; // Preenche o conteúdo HTML da 'section' com os dados do item atual
        container.appendChild(section); // Adiciona a 'section' ao container
    }
}

// Função para manipular erro na requisição
function manipularErro() {
    const container = document.getElementById('dadoscapturados'); // Obtém a referência ao elemento HTML onde os dados serão exibidos
    container.innerHTML = 'Erro ao carregar os dados.'; // Exibe uma mensagem de erro na página
}

// Chamada para fazer a requisição quando a janela é carregada
window.onload = fazerRequisicao; // Define a função 'fazerRequisicao' para ser executada quando a janela é carregada
