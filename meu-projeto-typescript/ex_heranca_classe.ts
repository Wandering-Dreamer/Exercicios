class Funcionario {
    constructor(public nome: string, public cargo: string, public salario: number) { }

    descricao(): string {
        return `Funcionário: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario}`;
    }
}

class Gerente extends Funcionario {
    constructor(nome: string, cargo: string, salario: number, public departamento: string) {
        super(nome, cargo, salario);
    }

    descricaoDetalhada(): string {
        return `${super.descricao()}, Departamento: ${this.departamento}`;
    }
}

const GerenteEx = new Gerente('Marcos', 'Gerente', 8000, 'Operações');
console.log(GerenteEx.descricaoDetalhada());