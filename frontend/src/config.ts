export const API_BASE_PATH = "/api/v1";

export const apiPath = (path: string) => `${API_BASE_PATH}/${path}`;

export type TCurrencyLabel = {
  [key: string]: string;
};

export const currencyLabels: TCurrencyLabel = {
  EUR: "€",
} as const;
