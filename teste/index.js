import { Empresa, Cliente, Telefone, Endereco } from "modulo";

const empresa = new Empresa("Alegria LTDA", "Wei Enterprise", "123456789012", new Endereco("SP", "São Paulo", "Av. Paulista", "1000"));
empresa.adicionarTelefone(new Telefone("11", "99999-9999"));
empresa.adicionarTelefone(new Telefone("11", "98888-8888"));

const clientes = [
    new Cliente("Agatha", "123456789", new Endereco("SP", "São José dos Campos", "Rua Margarida", "123")),
    new Cliente("Lucas", "987654321", new Endereco("SP", "São José dos Campos", "Rua Cravo", "456")),
    new Cliente("Alissa", "112233445", new Endereco("SP", "Jacareí", "Rua Lírio", "789")),
    new Cliente("Patricia", "556677889", new Endereco("SP", "São José dos Campos", "Rua Girassol", "101")),
    new Cliente("Yun", "998877665", new Endereco("SP", "São José dos Campos", "Rua Rosa", "202"))
];

clientes.forEach((cliente, index) => {
    cliente.adicionarTelefone(new Telefone("11", `9${index}${index}${index}${index}-0000`));
    cliente.adicionarTelefone(new Telefone("11", `9${index}${index}${index}${index}-1111`));
    empresa.adicionarCliente(cliente);
});

console.log(empresa.descricao());
