interface Produto {
    nome: string
    preco: number
    categoria: string
}

type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';

function pagar(produto: Produto): string {
    return `O produto ${produto.nome} está disponível por R$${produto.preco}
    e pode ser pago da forma.`;
}