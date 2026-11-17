// Selecionando elementos do DOM
const formulario = document.getElementById("formBoletim");
const divMensagem = document.getElementById("mensagem");

// Escutando o evento de envio do formulário
formulario.addEventListener("submit", function(evento) {
    // Impede o recarregamento padrão da página
    evento.preventDefault();

    // Capturando os valores dos inputs
    const nome = document.getElementById("nome").value.trim();
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);

    // Validação
    if (nome === "" || isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        exibirMensagem("Preencha o nome e insira notas válidas entre 0 e 10.", "erro");
        return;
    }

    // Processamento
    const media = (nota1 + nota2) / 2;
    let status = "";
    let classeCss = "";

    if (media >= 7) {
        status = "Aprovado(a)";
        classeCss = "sucesso";
    } else if (media >= 5) {
        status = "em Recuperação";
        classeCss = "alerta";
    } else {
        status = "Reprovado(a)";
        classeCss = "erro";
    }

    // Saída dinâmica na página
    exibirMensagem(`Aluno(a) ${nome} obteve média ${media.toFixed(1)} e está ${status}.`, classeCss);
});

// Função auxiliar para manipular o DOM e exibir alertas visuais
function exibirMensagem(texto, tipo) {
    divMensagem.textContent = texto;
    divMensagem.className = tipo;
    divMensagem.style.display = "block";
}
