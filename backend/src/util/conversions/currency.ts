export const convertEuroToCents = (euro: number) => euro * 100;
export const convertCentsToEuro = (cents: number | undefined) => {
  return cents ? cents / 100 : null;
};
