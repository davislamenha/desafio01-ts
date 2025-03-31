const fomartCurrencyToBRL = (currency: number): string => {
  return currency.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

export { fomartCurrencyToBRL };
