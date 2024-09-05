import { Financeiro } from './Financeiro';

const orcamentoExemplo = new Financeiro.Orcamento(1000,
    ['Televisão', 'Computador']);
console.log(orcamentoExemplo.exibirOrcamento());

const valorComImposto = Financeiro.calcularImposto(1000, 0.5);
console.log(`Valor com Imposto: R$${valorComImposto}`);

const valorComDesconto = Financeiro.calcularDesconto(1000, 0.3);
console.log(`Valor com Desconto: R$${valorComDesconto}`);