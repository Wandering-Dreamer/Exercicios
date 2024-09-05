"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Financeiro = void 0;
var Financeiro;
(function (Financeiro) {
    function calcularImposto(valor, taxa) {
        return valor * taxa;
    }
    Financeiro.calcularImposto = calcularImposto;
    function calcularDesconto(valor, taxa) {
        return valor - (valor * taxa);
    }
    Financeiro.calcularDesconto = calcularDesconto;
    var Orcamento = /** @class */ (function () {
        function Orcamento(valorTotal, itens) {
            this.valorTotal = valorTotal;
            this.itens = itens;
        }
        Orcamento.prototype.exibirOrcamento = function () {
            return "Itens: ".concat(this.itens.join(', '), ", \n        Valor Total: R$").concat(this.valorTotal);
        };
        return Orcamento;
    }());
    Financeiro.Orcamento = Orcamento;
})(Financeiro || (exports.Financeiro = Financeiro = {}));
