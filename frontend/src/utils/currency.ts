export const convertCentsToEuros = (cents: number | null, decimals = 2) => {
  if (!cents) {
    return "--";
  }
  return (cents / 100).toFixed(decimals);
};
