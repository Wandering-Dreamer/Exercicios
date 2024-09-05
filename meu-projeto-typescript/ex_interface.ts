interface Produto {
    nome: string
    preco: number
    categoria: string
}

type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';

function pagar(produto: Produto, pagamento: FormaPagamento): string {
    return `O produto ${produto.nome}, da categoria ${produto.categoria}
     está disponível por R$${produto.preco} e pode ser pago da forma
     ${pagamento}.`;
}

const produto1: Produto = { nome: 'Televisão', preco: 3400, categoria: 'Eletrônicos' };
const formaPagamento1: FormaPagamento = 'cartão';

console.log(pagar(produto1, formaPagamento1));