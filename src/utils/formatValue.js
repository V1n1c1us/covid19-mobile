const formatValue = (number) =>
  Intl.NumberFormat('pt-BR', {maximumSignificantDigits: 3}).format(number);

export default formatValue; 