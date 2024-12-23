const convertToSubcurrency = (amount: number, currency: string = 'usd'): number => {
  const conversionRates: { [key: string]: number } = {
    usd: 100, // 1 USD = 100 cents
    eur: 100, // 1 EUR = 100 cents
    // Add more currencies if needed
  };

  return amount * (conversionRates[currency] || 100);
};

export default convertToSubcurrency;