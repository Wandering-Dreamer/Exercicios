import { Cliente } from './Cliente';
import { Pedido } from './Pedido';

const ClienteEx = new Cliente('Petra', 'petra@gmail.com');
const PedidoEx = new Pedido(ClienteEx, 'Celular', 1200);

console.log(PedidoEx.exibirPedido());