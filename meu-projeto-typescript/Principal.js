"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente_1 = require("./Cliente");
var Pedido_1 = require("./Pedido");
var ClienteEx = new Cliente_1.Cliente('Petra', 'petra@gmail.com');
var PedidoEx = new Pedido_1.Pedido(ClienteEx, 'Celular', 1200);
console.log(PedidoEx.exibirPedido());
