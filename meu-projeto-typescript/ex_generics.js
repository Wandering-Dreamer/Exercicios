function encontrarMaiorElemento(array) {
    if (array.length === 0) {
        throw new Error("O array não pode estar vazio.");
    }
    var maior = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    // Retornamos o maior elemento encontrado
    return maior;
}
// Exemplo de uso:
var maiorNumero = encontrarMaiorElemento([10, 20, 30]); // 30
var maiorPalavra = encontrarMaiorElemento(['gato', 'elefante', 'zebra']); // 'zebra'
console.log(maiorNumero); // Imprime 30
console.log(maiorPalavra); // 'zebra'
