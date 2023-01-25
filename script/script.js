function AbrirTelaCriarQuiz(){

    // Abrir a tela de informações básicas do novo quiz (Tela 3.1: Informações básicas do quizz)
    const telaNovoQuizInformacoes = document.querySelector(".tela-informacoes-novo-quiz");
    telaNovoQuizInformacoes.classList.remove("escondida");

}
function ValidarInformacoesNovoQuiz(){
// Tela 3.1: Informações básicas do quizz    
    
    const inputTitulo = document.querySelector(".input-titulo-novo-quiz");
    const inputImagem = document.querySelector(".input-imagem-novo-quiz");
    const inputQuantidadePerguntas = document.querySelector(".input-quantidade-perguntas-novo-quiz");
    const inputQuantidadeNiveis = document.querySelector(".input-quantidade-niveis-novo-quiz");

    const mensagemErroTitulo = document.querySelector(".erro-titulo-novo-quiz");
    const mensagemErroImagem = document.querySelector(".erro-imagem-novo-quiz");
    const mensagemErroQuantidadePerguntas = document.querySelector(".erro-perguntas-novo-quiz");
    const mensagemErroQuantidadeNiveis = document.querySelector(".erro-niveis-novo-quiz");

    let tudoCerto = true;

    // Título do quizz: deve ter no mínimo 20 e no máximo 65 caracteres
    const titulo = inputTitulo.value;    
    if (titulo.trim().length < 20 || titulo.trim().length > 65){
        tudoCerto = false;
        // Alterar a cor do input e exibir o texto avisando do erro embaixo do input   
        inputTitulo.style.backgroundColor = "#FFE9E9";
        mensagemErroTitulo.innerHTML = "O titulo deve ter entre 20 e 65 caracteres";
    }
    
    // URL da Imagem: deve ter formato de URL
    const imagem = inputImagem.value;     
    if (FormatoURLInvalido(imagem.trim())){
        tudoCerto = false;
        // Alterar a cor do input e exibir o texto avisando do erro embaixo do input     
        inputImagem.style.backgroundColor = "#FFE9E9";
        mensagemErroImagem.innerHTML = "O valor informado não é uma URL válida";          
    }
    
    // Quantidade de perguntas: no mínimo 3 perguntas
    const quantidadePerguntas = parseInt(inputQuantidadePerguntas.value);   
    if (quantidadePerguntas < 3){
        tudoCerto = false;
        // Alterar a cor do input e exibir o texto avisando do erro embaixo do input
        inputQuantidadePerguntas.style.backgroundColor = "#FFE9E9";
        mensagemErroQuantidadePerguntas.innerHTML = "O quiz deve ter no mínimo 3 perguntas";   
    }
    if (isNaN(quantidadePerguntas)){
        tudoCerto = false;
        // Alterar a cor do input e exibir o texto avisando do erro embaixo do input
        inputQuantidadePerguntas.style.backgroundColor = "#FFE9E9";
        mensagemErroQuantidadePerguntas.innerHTML = "Deve ser informado um número válido maior que dois";  
    }
    
    // Quantidade de níveis: no mínimo 2 níveis
    const quantidadeNiveis = parseInt(inputQuantidadeNiveis.value);   
    if (quantidadeNiveis < 2){
        tudoCerto = false;
        // Alterar a cor do input e exibir o texto avisando do erro embaixo do input
        inputQuantidadeNiveis.style.backgroundColor = "#FFE9E9";
        mensagemErroQuantidadeNiveis.innerHTML = "O quiz deve ter no mínimo dois níveis"; 
    }    
    if (isNaN(quantidadeNiveis)){
        // Alterar a cor do input e exibir o texto avisando do erro embaixo do input
        inputQuantidadeNiveis.style.backgroundColor = "#FFE9E9";
        mensagemErroQuantidadeNiveis.innerHTML = "Deve ser informado um número válido maior que um"; 
    }

    // Se estiver tudo certo com as informações básicas do quiz abre a tela de criação das perguntas
    if (tudoCerto){
        // Fechar a tela de informações do novo quiz (Tela 3.1: Informações básicas do quizz)
        telaNovoQuizInformacoes.classList.add("escondida");
        CriarPerguntasQuiz();
    }    
}
