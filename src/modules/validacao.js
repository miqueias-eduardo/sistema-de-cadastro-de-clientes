function camposVazios(nome, email, telefone, cidade) {
  const inputs = [nome.trim(), email.trim(), telefone.trim(), cidade.trim()];

  const valid = inputs.every((valor) => valor !== "");
  
  return valid;
}

function validarEmail(email) {
  const emailValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  .test(email);

  return emailValido;
}

function validarTelefone(telefone) {
  const telefoneValido = /^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/
  .test(telefone);

  return telefoneValido;
}

export function validar(nome, email, telefone, cidade) {
  if (!camposVazios(nome, email, telefone, cidade)) {
    return false;
  }
  if (!validarEmail(email)) {
    return false;
  }
  if (!validarTelefone(telefone)) {
    return false;
  }

  return true;
}
