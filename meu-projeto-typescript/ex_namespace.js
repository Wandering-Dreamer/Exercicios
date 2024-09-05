"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Financeiro_1 = require("./Financeiro");
var orcamentoExemplo = new Financeiro_1.Financeiro.Orcamento(1000, ['Televisão', 'Computador']);
console.log(orcamentoExemplo.exibirOrcamento());
var valorComImposto = Financeiro_1.Financeiro.calcularImposto(1000, 0.5);
console.log("Valor com Imposto: R$".concat(valorComImposto));
var valorComDesconto = Financeiro_1.Financeiro.calcularDesconto(1000, 0.3);
console.log("Valor com Desconto: R$".concat(valorComDesconto));
