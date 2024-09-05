"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido(cliente, produto, valor) {
        this.cliente = cliente;
        this.produto = produto;
        this.valor = valor;
    }
    Pedido.prototype.exibirPedido = function () {
        return "Cliente: ".concat(this.cliente.nome, ", \n    Produto: ").concat(this.produto, ", \n    Valor: R$").concat(this.valor.toFixed(2));
    };
    return Pedido;
}());
exports.Pedido = Pedido;
