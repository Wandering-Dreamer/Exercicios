class ContaBancaria {
    constructor(public titular: string, public saldo: number) { }

    exibirSaldo(): string {
        return `Titular: ${this.titular}, Saldo: R$${this.saldo}`;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(titular: string, saldo: number, public limiteCredito: number) {
        super(titular, saldo);
    }

    exibirSaldo(): string {
        const saldoTotal = this.saldo + this.limiteCredito;
        return `${super.exibirSaldo()}, Saldo Total com Crédito: R$${saldoTotal}`;
    }
}

const ContaEx = new ContaCorrente('Gustavo', 2000, 512);
console.log(ContaEx.exibirSaldo());