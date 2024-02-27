import { useCallback } from "react";

import { formatDistanceStrict } from "date-fns";
import { useDateFnsLocale } from "Infrastructure/Hooks/DateFns/useDateFnsLocale";

export const useFormatDistanceStrictLocale = () => {
  const locale = useDateFnsLocale();

  return useCallback(
    (date: number | Date, baseDate: number | Date) =>
      formatDistanceStrict(date, baseDate, {
        locale,
        addSuffix: false,
      }),
    [locale]
  );
};
