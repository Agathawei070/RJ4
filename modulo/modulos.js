class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
    descricao() {
        return `${this.rua}, ${this.numero} - ${this.cidade}/${this.estado}`;
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    descricao() {
        return `(${this.ddd}) ${this.numero}`;
    }
}

class Cliente {
    #cpf;
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.#cpf = cpf;
        this.endereco = endereco;
        this.telefones = new Set();
    }
    getCpf() {
        return this.#cpf;
    }
    getNomeUpperCase() {
        return this.nome.toUpperCase();
    }
    getNomeLowerCase() {
        return this.nome.toLowerCase();
    }
    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }
    descricao() {
        return `Cliente: ${this.nome} (CPF: ${this.#cpf})\n${this.endereco.descricao()}\nTelefones: ${Array.from(this.telefones).map(t => t.descricao()).join("\n")}`;
    }
}

class Empresa {
    #cnpj;
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
    }
    getCnpj() {
        return this.#cnpj;
    }
    adicionarCliente(cliente) {
        this.clientes.add(cliente);
    }
    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }
    descricao() {
        return `Empresa: ${this.razaoSocial} (${this.nomeFantasia}) - CNPJ: ${this.#cnpj}\n${this.endereco.descricao()}\nTelefones: ${Array.from(this.telefones).map(t => t.descricao()).join(", ")}\nClientes:\n${Array.from(this.clientes).map(c => c.descricao()).join("\n\n")}`;
    }
}

export { Endereco, Telefone, Cliente, Empresa };
