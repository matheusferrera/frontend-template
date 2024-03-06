export function formatCPF(value) {
  // Remove todos os caracteres que não são números
  const onlyNums = value.replace(/\D/g, "");

  // Aplica a máscara de CPF
  return onlyNums
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{2})$/, "$1-$2");
}

export function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, "");
  let resto, digitoVerificador1, digitoVerificador2;
  if (cpf.length !== 11 || cpf.match(/(\d)\1{10}/)) {
    return false;
  }

  let validacao1 = 0,
    validacao2 = 0;

  for (let i = 0; i < 9; i++) {
    validacao1 += cpf[i] * (10 - i);
    validacao2 += cpf[i] * (11 - i);
  }

  resto = validacao1 % 11;
  digitoVerificador1 = resto < 2 ? 0 : 11 - resto;

  resto = (validacao2 + digitoVerificador1 * 2) % 11;
  digitoVerificador2 = resto < 2 ? 0 : 11 - resto;

  return cpf[9] == digitoVerificador1 && cpf[10] == digitoVerificador2;
}
