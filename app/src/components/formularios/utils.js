export function formatCPF(value) {
  // Remove todos os caracteres que não são números
  const onlyNums = value.replace(/\D/g, "");

  // Aplica a máscara de CPF
  return onlyNums
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1-$2");
}

export function formatCNPJ(value) {
  // Remove todos os caracteres que não são números
  const onlyNums = value.replace(/\D/g, "");

  // Aplica a máscara de CNPJ
  return onlyNums
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}

export function formatCEP(value) {
  // Remove todos os caracteres que não são números
  const onlyNums = value.replace(/\D/g, "");

  // Aplica a máscara de CEP
  return onlyNums.replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1-$2");
}

export function formatTelefone(value) {
  // Remove todos os caracteres que não são números
  const onlyNums = value.replace(/\D/g, "");

  // Aplica a máscara de Telefone
  if (onlyNums.length <= 10) {
    return onlyNums.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2");
  } else {
    return onlyNums.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
  }
}

export function formatSite(url) {
  if (typeof url != typeof undefined) {
    // Remover os espaços em branco deixados no campo ao escrever a URL
    return url.replace(/\s/g, "");
  } else {
    return url;
  }
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

export function validarCNPJ(cnpj) {
  cnpj = cnpj.replace(/\D/g, "");
  let resto, digitoVerificador1, digitoVerificador2;
  if (cnpj.length !== 14 || cnpj.match(/(\d)\1{10}/)) {
    return false;
  }

  let validacao1 = 0,
    validacao2 = 0;

  for (let i = 0; i < 12; i++) {
    if (i < 4) {
      validacao1 += cnpj[i] * (5 - i);
      validacao2 += cnpj[i] * (6 - i);
    } else if (i == 4) {
      validacao1 += cnpj[i] * 9;
      validacao2 += cnpj[i] * 2;
    } else {
      validacao1 += cnpj[i] * (13 - i);
      validacao2 += cnpj[i] * (14 - i);
    }
  }

  resto = validacao1 % 11;
  digitoVerificador1 = resto < 2 ? 0 : 11 - resto;

  resto = (validacao2 + digitoVerificador1 * 2) % 11;
  digitoVerificador2 = resto < 2 ? 0 : 11 - resto;

  return cnpj[12] == digitoVerificador1 && cnpj[13] == digitoVerificador2;
}
