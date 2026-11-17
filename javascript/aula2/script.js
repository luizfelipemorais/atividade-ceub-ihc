// Função com condicionais para classificar a nota
function classificarNota(nota) {
    if (nota >= 7) {
        return "Aprovado";
    } else if (nota >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

console.log("=== INICIANDO CLASSIFICADOR ===");

let continuar = true;

// Laço de repetição
while (continuar) {
    let entrada = prompt("Digite a nota do aluno (0 a 10):");
    let nota = parseFloat(entrada);

    // Validação de dados
    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert("Nota inválida! Digite um valor numérico entre 0 e 10.");
    } else {
        let situacao = classificarNota(nota);
        console.log(`Nota: ${nota} -> Situação: ${situacao}`);
    }

    // Pergunta se deseja repetir
    let resposta = prompt("Deseja classificar outra nota? (S/N)").toUpperCase();
    if (resposta !== "S") {
        continuar = false;
        console.log("=== PROGRAMA ENCERRADO ===");
    }
}
