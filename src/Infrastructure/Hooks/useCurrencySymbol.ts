import { CurrencyCode } from "Infrastructure/Models/CurrencyCodes";
import { getCurrencySymbol } from "Infrastructure/Utils/CurrencyUtils";

export const useCurrencySymbol = (currency?: CurrencyCode) => {
  return getCurrencySymbol(currency);
};
