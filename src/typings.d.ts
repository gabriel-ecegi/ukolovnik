import { Theme as MuiTheme } from "@mui/material";
import "@emotion/react";
import "@emotion/styled";

declare module "@emotion/react" {
  export interface Theme extends MuiTheme {
    colors: {
      red: string;
      border: string;
      gray: string;
      validation: string;
      darkGrey: string;
      placeholder: string;
      fieldBackground: string;
      primaryMainTransparent: string;
      contentWrapperBorder: string;
      radioBtnDisabled: string;
      workflowIcon: string;
    };
    shadow: {
      primary: string;
      primaryHover: string;
    };
    borderRadius: string;
    vh: (value: number) => string;
  }
}

declare module "@mui/material/styles" {
  export interface Theme extends MuiTheme {
    colors: {
      red: string;
      border: string;
      gray: string;
      validation: string;
      darkGrey: string;
      placeholder: string;
      fieldBackground: string;
      primaryMainTransparent: string;
      contentWrapperBorder: string;
      radioBtnDisabled: string;
      workflowIcon: string;
    };
    shadow: {
      primary: string;
      primaryHover: string;
    };
    borderRadius: string;
    vh: (value: number) => string;
  }
}
