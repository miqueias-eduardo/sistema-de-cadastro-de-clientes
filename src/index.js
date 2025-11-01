import * as dados from "./modules/dados.js";
import * as elementos from "./modules/elementos.js";

const enviar = document.getElementById("enviar");
elementos.fechar_modal();
let modoEdicao = null;

function envio() {
  return {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
    cidade: document.getElementById("cidade").value,
  };
}

function exibirCriar() {
  modoEdicao = null;
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("cidade").value = "";

   window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById("content-modal").classList.add("active");
  document.body.classList.add("active");
}

function exibirEdicao(cliente) {
  modoEdicao = cliente;

  document.getElementById("nome").value = cliente.nome;
  document.getElementById("email").value = cliente.email;
  document.getElementById("telefone").value = cliente.telefone;
  document.getElementById("cidade").value = cliente.cidade;

   window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById("content-modal").classList.add("active");
  document.body.classList.add("active");
}

// Ao carregar a página, renderiza clientes existentes
window.addEventListener("DOMContentLoaded", () => {
  const clientes = dados.manager.ler_clientes();

  clientes.forEach((cliente) => {
    elementos.cadastrar_cliente(cliente);
  });
});

//criando um cliente
const cadastro = document.getElementById("cadastrar_client");

cadastro.addEventListener("click", exibirCriar);

// editando o cliente

document.body.addEventListener("click", (e) => {

  const btnEditar = e.target.closest(".editar");

  if (btnEditar) {
    const linha = e.target.closest(".linha_client");

    const id_select = parseInt(linha.getAttribute("data-id"));

    const cliente = dados.manager.buscar_cliente(id_select);

    if (cliente) {
      exibirEdicao(cliente);
    }
  }
});

//validar e executar o envio da edição ou criação de um cliente

enviar.addEventListener("click", () => {
  const campo = envio();

  const validando = dados.manager.validar(
    campo.nome,
    campo.email,
    campo.telefone,
    campo.cidade
  );

  if (modoEdicao) {
    if (validando === true) {
      const clienteEdit = modoEdicao;

      clienteEdit.nome = campo.nome;
      clienteEdit.email = campo.email;
      clienteEdit.telefone = campo.telefone;
      clienteEdit.cidade = campo.cidade;

      elementos.updateCliente(clienteEdit);
      dados.manager.salvar_localStorage();
      modoEdicao = null;

      elementos.sairModal("sair");
    }
  } else {
    if (validando === true) {
      const cliente = dados.manager.add_cliente(
        campo.nome,
        campo.email,
        campo.telefone,
        campo.cidade
      );

      elementos.cadastrar_cliente(cliente);

      elementos.sairModal("sair");
    }
  }
});

//excluindo cliente

document.body.addEventListener("click", (e) => {
  const btnExcluir = e.target.closest(".excluir");
  if (btnExcluir) {
    const linha = e.target.closest(".linha_client");

    const id_select = parseInt(linha.getAttribute("data-id"));

    dados.manager.del_cliente(id_select);

    elementos.delete_Cliente(id_select);
  }
});

