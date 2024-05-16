   function fazerRequisicao() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')

        .then(responseData => {
const dados = [
    {
        user: "Ryan",
        id: 1,
        title: "Dragon Ball Daima é anunciado",
        texto: "Esse será um anime original e promete voltar às origens da história, transformando o Goku e seus amigos em crianças. Estreará na temporada de anime do outono de 2024.        ",
        img: "assets/img/dbz1.jpeg"
    },
    {
        user: "Ryan",
        id: 2,
        title: "Dragon Ball: Sparking Zero, novo game de Dragon Ball será uma evolução da série",
        texto: " O game trará os sentimentos nostálgicos à tona daqueles que cresceram jogando os jogos clássicos. Por enquanto, não há uma previsão de lançamento.",
        img: "assets/img/jogo.jpg"
    },
    {
        user: "Ryan",
        id: 3,
        title: "Dragon Ball Daima é anunciado",
        texto: "Desenvolvemos softwares (Sites, Apps e entre outros), do jeito que você queira! Clique no botão abaixo e preencha as informações e detalhes do serviço.",
        img: "assets/img/dbz1.jpeg"
    }
];
const container = document.getElementById('dadoscapturados');
dados.forEach(item => {
    const section = document.createElement('section');
    section.innerHTML = `
        <section>
            <div class="container" id="home-container">
                <div class="row w-100">
                    <div class="col-md-6">
                        <div class="img-banner">
                            <img src="${item.img}" class="img-fluid" alt="banner">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="container-col">
                            <div class="caixa-texto-home">
                                <h1 class="h1-banner-2" id="title1" style="font-size: 30px;">
                                    ${item.title}
                                </h1>
                                <p class="texto-banner" id="texto1">
                                    ${item.texto}
                                </p>
                                <h1 class="h1-banner-2" style="font-size: 15px;">
                                    Postado por: ${item.user} e ID: ${item.id}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
    container.appendChild(section);
});

})
        .catch(error => {
            document.getElementById('data').innerHTML = 'Erro ao carregar os dados.';
        });
}
window.onload = fazerRequisicao;