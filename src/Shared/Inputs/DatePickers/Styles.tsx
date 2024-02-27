// Import Emotion's styled component
import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

// Define your styles using Emotion
export const datePickerFieldStyles = (props: { theme: Theme }) => css`
  .MuiInputBase-root {
    font-size: 16px;
    font-weight: 600;
    padding: ${props.theme.spacing(0.5, 1.4)};
    border-radius: ${props.theme.borderRadius};

    &:before,
    &:after {
      content: none;
    }

    &:hover {
      border-color: ${props.theme.palette.text.primary};
    }

    &.Mui-focused {
      border-color: ${props.theme.palette.primary.main};
    }

    .MuiIconButton-root {
      color: ${props.theme.palette.primary.main};
      padding: 8px;
    }

    &.Mui-error {
      border-color: ${props.theme.palette.error.main};
    }
  }

  .MuiTouchRipple-root {
    color: ${props.theme.palette.primary.main};
  }

  .MuiInputBase-input {
    padding: ${props.theme.spacing(0.7, 0)};
    &::placeholder {
      color: ${props.theme.colors.gray};
      opacity: 1;
    }
  }
`;

/* ${props.disabled &&
  `
    .MuiInputAdornment-root {
      opacity: 0;
      width: 0;
    }
  `} */

// Define your styled label
export const StyledLabel = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: ${(props) => props.theme.palette.secondary.main};
`;
