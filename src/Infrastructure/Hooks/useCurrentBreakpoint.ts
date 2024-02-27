import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

export const useCurrentBreakpoint = (): Breakpoint => {
  const theme = useTheme();

  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isXl = useMediaQuery(theme.breakpoints.only("xl"));

  if (isSm) {
    return "sm";
  }
  if (isMd) {
    return "md";
  }
  if (isLg) {
    return "lg";
  }
  if (isXl) {
    return "xl";
  }

  return "xs";
};
