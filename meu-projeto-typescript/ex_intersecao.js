function EmpregadoInfo(emp) {
    return "Nome: ".concat(emp.nome, ", Idade: ").concat(emp.idade, ", Empresa: ").concat(emp.empresa, ",\nSalario: ").concat(emp.salario);
}
var EmpregadoEx = {
    nome: 'Roberta', idade: 22,
    empresa: 'FIAP', salario: 6000
};
console.log(EmpregadoInfo(EmpregadoEx));
