type Pessoa = {
    nome: string;
    idade: number;
}
type Empregado = {
    empresa: string;
    salario: number;
}

type PessoaEmpregado = Pessoa & Empregado;

function EmpregadoInfo(emp: PessoaEmpregado): string {
    return `Nome: ${emp.nome}, Idade: ${emp.idade}, Empresa: ${emp.empresa},
Salario: ${emp.salario}`;
}

const EmpregadoEx: PessoaEmpregado = {
    nome: 'Roberta', idade: 22,
    empresa: 'FIAP', salario: 6000
};
console.log(EmpregadoInfo(EmpregadoEx))