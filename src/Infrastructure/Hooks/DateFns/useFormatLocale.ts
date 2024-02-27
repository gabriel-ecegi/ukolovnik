import { useCallback } from "react";

import { format as dateFnsFormat } from "date-fns";
import { useDateFnsLocale } from "Infrastructure/Hooks/DateFns/useDateFnsLocale";

export const useFormatLocale = () => {
  const locale = useDateFnsLocale();

  return useCallback(
    (date: number | Date, format = "P") =>
      dateFnsFormat(date, format, { locale }),
    [locale]
  );
};
