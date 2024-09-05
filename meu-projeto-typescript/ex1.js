function pagar(produto, pagamento) {
    return "O produto ".concat(produto.nome, ", da categoria ").concat(produto.categoria, "\n     est\u00E1 dispon\u00EDvel por R$").concat(produto.preco, " e pode ser pago da forma\n     ").concat(pagamento, ".");
}
var produto1 = { nome: 'Televisão', preco: 3400, categoria: 'Eletrônicos' };
var formaPagamento1 = 'cartão';
console.log(pagar(produto1, formaPagamento1));
