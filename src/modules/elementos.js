export function fechar_modal() {
  const content_modal = document.getElementById("content-modal");
  const modal_close = document.getElementById("fechar");

  

  modal_close.addEventListener("click", () => {
    content_modal.classList.remove("active");
    return;
  });

 

  content_modal.addEventListener("click", (event) => {
    if (event.target === content_modal) {
      content_modal.classList.remove("active");
      return;
    }
  });
 
}

export function sairModal (modo){
  const content_modal = document.getElementById("content-modal");
   if (modo === "sair") {
    content_modal.classList.remove("active");
  }
}



export function cadastrar_cliente(cliente) {
  const linha = document.createElement("div");

  linha.className = "linha_client";

  
  const campos = [
    cliente.nome,
    cliente.email,
    cliente.telefone,
    cliente.cidade,
  ].map((cam) => {
    const tabela = document.createElement("aside");

    tabela.className = "tab";

    const p = document.createElement("p");

    p.textContent = cam;

    tabela.appendChild(p);

    return tabela;
  });
  

  const tab_Ação = document.createElement("aside");

  tab_Ação.className = "tab";

  tab_Ação.appendChild(criarBotao("editar", "editar"));
  tab_Ação.appendChild(criarBotao("excluir", "excluir"));

 

  campos.forEach((tabela) => linha.appendChild(tabela));

  linha.appendChild(tab_Ação);

  linha.dataset.id = cliente.id;

  const tabelas_client = document.getElementById("tab-clientes");
  tabelas_client.appendChild(linha);

  return tabelas_client;
}


export function criarBotao(classe, texto) {
  const btn = document.createElement("button");
  btn.className = classe;
  btn.textContent = texto;
  return btn;
}



export function delete_Cliente(id) {
  const element = document.querySelector(`[data-id="${id}"]`);
  element.remove();
}



export function updateCliente(cliente) {
  const id = cliente.id;

  const cliente_id = document.querySelector(`[data-id="${id}"]`);

  if (cliente_id) {
    const campos = cliente_id.querySelectorAll(".tab");

    const camposChave = ["nome", "email", "telefone", "cidade"];

    campos.forEach((campo, index) => {
      const chave = camposChave[index];
      if (cliente[chave]) {
        campo.textContent = cliente[chave];
      }
    });
    return true;
  }
}
