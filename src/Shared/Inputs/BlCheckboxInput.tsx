import { Typography } from "@mui/material";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import { CheckboxCheckedIcon, CheckboxIcon } from "Shared/Icons";
import { FieldErrorProps, useFieldError } from "Forms/Hooks/useFieldError";
import * as React from "react";
import styled from "@emotion/styled";

type Props = CheckboxProps &
  FieldErrorProps & {
    label?: string | JSX.Element;
    isLabelFirst?: boolean;
    hasFilterStyle?: boolean;
    hasErrorMessage?: boolean;
  };

const StyledWrapper = styled.div<{
  $hasFilterStyle: boolean;
  $disabled: boolean;
}>`
  display: flex;
  user-select: none;
  align-items: center;

  & > label {
    display: flex;
    cursor: pointer;
    padding-left: ${(props) => props.theme.spacing(1)};
    width: 100%;
    color: ${(props) =>
      props.$hasFilterStyle
        ? props.theme.palette.primary.main
        : props.$disabled
        ? props.theme.palette.text.disabled
        : props.theme.palette.text.primary};
  }
`;

const StyledCheckbox = styled(Checkbox)`
  padding: 0;
  color: ${(props) => props.theme.palette.primary.main};

  &.Mui-checked + label {
    .MuiTypography-root {
      font-weight: 600;
    }
  }
`;

const StyledError = styled.div<{ $hasErrorMessage?: boolean }>`
  min-height: ${(props) => (props.$hasErrorMessage ? "20px" : 0)};
`;

const ErrorTypography = styled(Typography)`
  color: ${(props) => props.theme.colors.validation};
  font-size: 0.75rem;
  padding-left: ${(props) => props.theme.spacing(3.4)};
`;

const StyledCheckboxIcon = styled.div<{
  $hasFilterStyle: boolean;
  $hasError: boolean;
}>`
  display: flex;
  align-items: center;
  ${(props) => props.$hasError && `color: ${props.theme.colors.validation};`}

  svg {
    width: ${(props) => (props.$hasFilterStyle ? 18 : 22)}px;
    height: auto;
  }
`;

const Icon = ({
  hasFilterStyle,
  isChecked,
  hasError,
}: {
  hasFilterStyle: boolean;
  isChecked: boolean;
  hasError: boolean;
}) => {
  return (
    <StyledCheckboxIcon $hasFilterStyle={hasFilterStyle} $hasError={hasError}>
      {isChecked ? <CheckboxCheckedIcon /> : <CheckboxIcon />}
    </StyledCheckboxIcon>
  );
};

export const BlCheckboxInput: React.FunctionComponent<Props> = (props) => {
  const { hasError, errorMessage, originalProps } = useFieldError(props);
  const { label, isLabelFirst, hasFilterStyle, hasErrorMessage, ...rest } =
    originalProps;

  const LabelElement = (
    <label htmlFor={props.name}>
      {typeof label === "string" ? (
        <Typography
          fontSize={hasFilterStyle ? 12 : 16}
          fontWeight={hasFilterStyle ? 600 : 400}
        >
          {label}
        </Typography>
      ) : (
        label
      )}
    </label>
  );
  return (
    <div>
      <StyledWrapper
        className={"checkbox"}
        $hasFilterStyle={hasFilterStyle ?? false}
        $disabled={rest.disabled ?? false}
      >
        {isLabelFirst && label && LabelElement}
        <StyledCheckbox
          id={props.name}
          icon={
            <Icon
              hasFilterStyle={hasFilterStyle ?? false}
              hasError={hasError}
              isChecked={false}
            />
          }
          checkedIcon={
            <Icon
              hasFilterStyle={hasFilterStyle ?? false}
              hasError={hasError}
              isChecked
            />
          }
          {...rest}
        />
        {!isLabelFirst && label && LabelElement}
      </StyledWrapper>

      <StyledError $hasErrorMessage={hasErrorMessage}>
        <ErrorTypography>{hasError ? errorMessage : ""}</ErrorTypography>
      </StyledError>
    </div>
  );
};
