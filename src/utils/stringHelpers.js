export const clearValue = value => {
  return value.replace(/[^0-9]+/g, '')
}

export const formatCpfCnpj = cpfCnpj => {
  if (cpfCnpj.length === 11) {
    return cpfCnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  }
  if (cpfCnpj.length === 14) {
    return cpfCnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
  }
}

export const formatPhone = phone => {
  return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}

export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
 }
