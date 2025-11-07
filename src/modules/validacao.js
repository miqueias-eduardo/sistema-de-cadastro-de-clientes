function camposVazios(nome, email, telefone, cidade) {
  const inputs = [nome.trim(), email.trim(), telefone.trim(), cidade.trim()];

  const camposVazios = inputs
    .map((campo, i) => (campo === "" ? i : null))
    .filter((i) => i !== null);

  return camposVazios;
}

function validarEmail(email) {
  const emailValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  return emailValido;
}

function validarTelefone(telefone) {
  const telefoneValido = /^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/.test(telefone);

  return telefoneValido;
}


function buscarErros(campos) {
  const inputs = document.querySelectorAll("input");

  const erros = campos.map((indice) => {
    const input = inputs[indice];

    const grupo = input.closest(".input-group");

    const erro = grupo.querySelector(".mens-error");

    return erro;
  });

  return erros;
}

function buscarErroFormato(id) {
  const tipos = ["email", "telefone"];
  if (tipos.includes(id)) {
    const elemento = document.getElementById(id);
    const grupo = elemento.closest(".input-group");

    return grupo.querySelector(".mens-error");
  }
  return false;
}

function limparMensagem() {
  document
    .querySelectorAll(".mens-error")
    .forEach((el) => (el.textContent = ""));
}

// função principal

export function validar(nome, email, telefone, cidade) {
  limparMensagem();

  const campos = camposVazios(nome, email, telefone, cidade);
  let formatoErros = 0;

  if (campos.length !== 0) {
    const erros = buscarErros(campos);

    erros.forEach((el) => {
      el.textContent = "Este campo é obrigatório!";
    });

    return false;
  }
  if (!validarEmail(email)) {
    const el = buscarErroFormato("email");
    el.textContent = "Formato de email inválido! Ex.: exemplo@dominio.com";
    formatoErros += 1;
  }
  if (!validarTelefone(telefone)) {
    const el = buscarErroFormato("telefone");
    el.textContent = "Formato de telefone inválido! Ex.: (11) 91234-5678";
    formatoErros += 1;
  }
  return formatoErros === 0 ? true : false;
}