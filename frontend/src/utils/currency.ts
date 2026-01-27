export const convertCentsToEuros = (cents: number, decimals = 2) => {
  return (cents / 100).toFixed(decimals);
};
