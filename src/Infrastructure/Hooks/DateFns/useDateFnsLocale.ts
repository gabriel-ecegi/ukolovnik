import { Locale as dateFnsLocale } from "date-fns";
import { cs } from "date-fns/locale";

const locales: { cs: dateFnsLocale } = {
  cs,
};

export const useDateFnsLocale = () => {
  return locales.cs;
};
