import { useCallback } from "react";

import { formatDistance as dateFnsFormatDistance } from "date-fns";
import { useDateFnsLocale } from "Infrastructure/Hooks/DateFns/useDateFnsLocale";

export const useFormatDistanceLocale = () => {
  const locale = useDateFnsLocale();

  return useCallback(
    (date: number | Date, baseDate: number | Date) =>
      dateFnsFormatDistance(date, baseDate, { locale }),
    [locale]
  );
};
