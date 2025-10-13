export class Cliente {
  constructor(nome, email, telefone, cidade, id) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.cidade = cidade;
    this.id = id;
  }
}

export class ADM {
  constructor() {
    const data = localStorage.getItem("clientes");
    this.clientes = data ? JSON.parse(data) : [];
  }

  salvar_localStorage() {
    localStorage.setItem("clientes", JSON.stringify(this.clientes));
  }

  //criar clientes
  add_cliente(nome, email, telefone, cidade) {
    const id = Date.now();
    const cliente = new Cliente(nome, email, telefone, cidade, id);
    this.clientes.push(cliente);
    this.salvar_localStorage();
    return cliente;
  }

  
  ler_clientes() {
    return this.clientes;
  }

 

  buscar_cliente(id) {
    const cliente = this.clientes.find((c) => c.id === id);
    if (cliente) {
      return cliente;
    }
    
  }

  
  del_cliente(id) {
    const cliente = this.clientes.findIndex((c) => c.id === id);
    if (cliente !== -1) {
      this.clientes.splice(cliente, 1);
      this.salvar_localStorage();
      return true;
    }
   
  }

  //validando um os dados inseridos do cliente

  validar(nome, email, telefone, cidade) {
    const inputs = [nome.trim(), email.trim(), telefone.trim(), cidade.trim()];
    
    const valid = inputs.every((valor) => valor !== "");
    if (valid) {
      return true;
    } else {
      alert("Error! preencha todos os campos");
      return false;
    }
  }


}

export const manager = new ADM();
