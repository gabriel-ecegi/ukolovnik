import { Theme } from "@emotion/react";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { colors } from "Infrastructure/Themes/Colors";

export type ColorsType = {
  PrimaryMain: string;
  PrimaryDark: string;
  PrimaryText: string;
  Body: string;
  Text: string;
  TextLight: string;
  TextDisabled: string;
  White: string;
  Black: string;
  Green: string;
  Red: string;
  Warning: string;
  WarningLight: string;
  Gray: string;
  Border: string;
  DarkGrey: string;
  Placeholder: string;
  Validation: string;
  FieldBackground: string;
  ContentWrapperBorder: string;
  RadioBtnDisabled: string;
  WorkflowIcon: string;
};

const theme = (color: ColorsType): Theme => {
  const theme: ThemeOptions = {
    palette: {
      primary: {
        light: color.PrimaryMain,
        main: color.PrimaryMain,
        dark: color.PrimaryDark,
        contrastText: color.PrimaryText,
      },
      secondary: {
        light: color.PrimaryMain,
        main: color.PrimaryMain,
        dark: color.PrimaryDark,
        contrastText: color.PrimaryText,
      },
      text: {
        primary: color.Text,
        secondary: color.TextLight,
        disabled: color.TextDisabled,
      },
      error: {
        main: color.Red,
        dark: color.Red,
        contrastText: color.White,
      },
      success: {
        main: color.Green,
      },
      info: {
        main: color.PrimaryMain,
        light: color.PrimaryMain,
        dark: color.PrimaryMain,
        contrastText: color.PrimaryText,
      },
      background: {
        default: color.Body,
      },
      common: {
        black: color.Black,
        white: color.White,
      },
      warning: {
        main: color.Warning,
        light: color.WarningLight,
      },
      divider: color.Border,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1050,
        lg: 1200,
        xl: 1536,
      },
    },
    spacing: 10,
    shape: {
      borderRadius: 4,
    },
    typography: {
      fontSize: 14,
      fontFamily: "'Inter', sans-serif",
      body1: {
        fontSize: 14,
        fontWeight: 400,
        letterSpacing: "0.2px",
      },
      body2: {
        color: color.Text,
        fontWeight: 500,
        fontSize: 14,
        letterSpacing: "0.2px",
      },
      h1: {
        color: color.Text,
        fontWeight: 700,
        fontSize: 24,
        lineHeight: 1.2,
      },
      h2: {
        color: color.Text,
        fontWeight: 700,
        fontSize: 18,
        lineHeight: 1.4,
        letterSpacing: "0.2px",
      },
      h3: {
        color: color.Text,
        fontWeight: 700,
        fontSize: 16,
        lineHeight: 1.4,
        letterSpacing: "0.2px",
      },
      h4: {
        color: color.Text,
        fontWeight: 700,
        fontSize: 24,
      },
      subtitle1: {
        fontWeight: 400,
        color: color.Text,
        fontSize: 16,
        lineHeight: 1.4,
        letterSpacing: "0.2px",
      },
      subtitle2: {
        fontWeight: 400,
        color: color.TextLight,
        fontSize: 14,
        fontStyle: "italic",
        lineHeight: 1.4,
        letterSpacing: "0.2px",
      },
      button: {
        fontSize: 16,
        fontWeight: 500,
      },
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          // The props to apply
          disableRipple: false, // let the ripple live again 💣!
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            color: color.Text,
            fontWeight: 400,
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: color.TextLight,
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar": {
              width: "9px",
              height: "7px",
              background: color.Gray,
              borderRadius: "4px",
            },
            "& *::-webkit-scrollbar-thumb": {
              backgroundColor: color.TextLight,
              borderRadius: "4px",
            },
            "& *::-webkit-scrollbar": {
              width: "7px",
              height: "7px",
              background: color.Gray,
              borderRadius: "4px",
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: "0 2px 6px 0 rgba(215, 215, 215, 0.5)",
            "& .MuiPickersBasePicker-container .MuiPickerDTTabs-tabs .MuiButtonBase-root":
              {
                color: color.White,
              },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: color.ContentWrapperBorder,
          },
        },
      },
    },
  };

  const customVariables = {
    colors: {
      red: color.Red,
      border: color.Border,
      gray: color.Gray,
      validation: color.Validation,
      darkGrey: color.DarkGrey,
      placeholder: color.Placeholder,
      fieldBackground: color.FieldBackground,
      primaryMainTransparent: `${color.PrimaryMain}1f`,
      contentWrapperBorder: color.ContentWrapperBorder,
      radioBtnDisabled: color.RadioBtnDisabled,
      workflowIcon: color.WorkflowIcon,
    },
    shadow: {
      primary: "none",
      primaryHover: "0px 0px 15px 0px rgba(0, 0, 0, 0.15) inset",
    },
    borderRadius: "12px",
    vh: (val: number) => {
      return `calc(var(--vh, 1vh) * ${val})`;
    },
  };

  return createTheme(Object.assign(theme, customVariables)) as Theme;
};

// TODO enum;
export const getTheme = () => {
  return theme(colors());
};
