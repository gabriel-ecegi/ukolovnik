import BigNumber from "bignumber.js";
import { CurrencyCode } from "Infrastructure/Models/CurrencyCodes";

export const formatCurrency = (
  value: number | null | undefined,
  currencyCode: CurrencyCode | string | null | undefined,
  decimalPlaces = 2
) => {
  const locales = () => {
    switch (currencyCode) {
      case CurrencyCode.EUR:
        return "sk-SK";
      case CurrencyCode.CHF:
        return "fr-CH";
      case CurrencyCode.GBP:
        return "en-GB";
      case CurrencyCode.USD:
        return "en-US";
      case CurrencyCode.PLN:
        return "pl-PL";

      default:
        return "cs-CZ";
    }
  };

  const formatter = new Intl.NumberFormat(locales(), {
    style: "currency",
    currency: currencyCode ?? CurrencyCode.CZK,
    maximumFractionDigits: decimalPlaces,
    minimumFractionDigits: 0,
  });
  return formatter.format(value ?? 0);
};

export const getCurrencySymbol = (currency?: CurrencyCode) => {
  if (currency) {
    return formatCurrency(0, currency).replace(/\d/g, "").trim();
  }

  return currency;
};

export function roundHalfUp(value: number) {
  return new BigNumber(value)
    .decimalPlaces(2, BigNumber.ROUND_HALF_UP)
    .toNumber();
}
