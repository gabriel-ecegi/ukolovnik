import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { FieldErrorProps, useFieldError } from "Forms/Hooks/useFieldError";
import * as React from "react";
import { IMaskInputProps, IMaskMixin } from "react-imask";
import { isNoU } from "Infrastructure/Utils/ObjectUtils";
import isPropValid from "@emotion/is-prop-valid";

export type MaskType = IMaskInputProps<any>["mask"];
export type MaskBlockType = Record<
  string,
  {
    mask: MaskType;
    from?: number;
    to?: number;
    lazy?: boolean;
  }
>;

type Props = TextFieldProps &
  FieldErrorProps & {
    label?: string;
    name?: string;
    mask?: MaskType;
    unmask?: boolean | "typed";
    max?: number;
    min?: number;
    onMaskInputChange?: (val: string) => void;
    onInputChange?:
      | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
      | undefined;
    inputEndAdornment?: JSX.Element;
    inputStartAdornment?: JSX.Element;
    labelEndAdornment?: JSX.Element;
    maxLength?: number;
    scale?: number;
    unit?: string;
    hasFilterStyle?: boolean;
    maskBlocks?: MaskBlockType;
    thousandsSeparator?: string;
    accept?: string;
  };

const StyledInput = styled(TextField, { shouldForwardProp: isPropValid })<{
  $hasFilterStyle: boolean;
  $isEmpty: boolean;
}>`
  margin-top: ${(props) => props.theme.spacing(0.5)};

  .MuiInputBase-formControl {
    background-color: ${(props) =>
      props.$hasFilterStyle
        ? props.theme.palette.common.white
        : props.theme.colors.fieldBackground};
  }

  .MuiInputBase-input {
    padding-top: ${(props) =>
      props.theme.spacing(props.$hasFilterStyle ? 1 : 1.2)};
    padding-bottom: ${(props) =>
      props.theme.spacing(props.$hasFilterStyle ? 1 : 1.2)};
    color: ${(props) => props.theme.palette.text.primary};
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;

    &:-webkit-autofill,
    &:-webkit-autofill:hover &:-webkit-autofill:focus {
      box-shadow: 0 0 0px 1000px
        ${(props) => props.theme.palette.background.default} inset;
      color: ${(props) => props.theme.palette.text.primary};
    }
    &::placeholder {
      color: ${(props) => props.theme.colors.placeholder};
      font-weight: 400;
      opacity: 1;
    }

    &[type="file"]::file-selector-button {
      display: none;
    }

    ${(props) =>
      props.$isEmpty &&
      `
      &[type="file"] {
        &:after {
          content: "${props.placeholder ?? ""}";
          position: absolute;
          left: 2px;
          top: 2px;
          bottom: 2px;
          right: 2px;
          background-color: ${props.theme.colors.fieldBackground};
          color: ${props.theme.colors.placeholder};
          font-weight: 400;
          display: flex;
          align-items: center;
          padding-left: ${props.theme.spacing(1.2)};
        }
      } 

    `}
  }

  .MuiInputBase-root {
    border-radius: ${(props) => props.theme.borderRadius};
  }

  .MuiInputLabel-root {
    font-size: 18px;
  }

  .MuiOutlinedInput-notchedOutline {
    border: 1px solid
      ${(props) =>
        props.$hasFilterStyle
          ? props.theme.palette.primary.main
          : props.theme.colors.border};
    border-radius: ${(props) => (props.$hasFilterStyle ? "8px" : "12px")};
  }

  .MuiOutlinedInput-multiline {
    padding: 0;
  }

  .MuiFormHelperText-root {
    margin: 0;
    min-height: ${(props) => (props.$hasFilterStyle ? 0 : "20px")};
  }

  .Mui-disabled {
    &.MuiInputBase-formControl {
      background-color: ${(props) => props.theme.palette.common.white};

      .MuiInputBase-input {
        color: ${(props) => props.theme.palette.text.primary}40;
      }

      .MuiOutlinedInput-notchedOutline {
        border-color: ${(props) => props.theme.colors.border};
      }
    }
  }

  &:hover {
    .MuiOutlinedInput-notchedOutline {
      border-color: ${(props) => props.theme.palette.primary.dark};
    }
  }
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-flow: column;

  .input-wrapper {
    position: relative;
  }
`;

const StyledUnit = styled.div`
  position: absolute;
  pointer-events: none;
  top: ${(props) => props.theme.spacing(0.5)};
  bottom: 20px;
  right: 15px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.label<{ $disabled: boolean }>`
  color: ${(props) =>
    props.$disabled
      ? props.theme.palette.text.disabled
      : props.theme.palette.text.primary};
`;

const StyledInputStartAdornment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => props.theme.spacing(1)};
  pointer-events: none;
`;

const MaskedInput = IMaskMixin(({ inputRef, ...props }: any) => {
  return <StyledInput {...props} inputRef={inputRef} />;
}) as any;

export const BlTextInput: React.FunctionComponent<Props> = (props) => {
  const { hasError, errorMessage, originalProps } = useFieldError(props);
  const {
    label,
    name,
    mask,
    unmask,
    max,
    min,
    onMaskInputChange,
    onInputChange,
    value,
    inputEndAdornment,
    inputStartAdornment,
    labelEndAdornment,
    maxLength,
    scale,
    unit,
    hasFilterStyle,
    maskBlocks,
    thousandsSeparator,
    accept,
    ...rest
  } = originalProps;

  const handleMaskInputChange = (nextValue: string) => {
    onMaskInputChange?.(nextValue);
  };

  const inputRef = React.useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  return (
    <StyledInputWrapper>
      {!!label && (
        <StyledLabel htmlFor={name} $disabled={rest.disabled ?? false}>
          <Stack direction={"row"} gap={1}>
            <Typography>{label}</Typography>
            {labelEndAdornment}
          </Stack>
        </StyledLabel>
      )}
      <div className={"input-wrapper"}>
        {isNoU(mask) ? (
          <StyledInput
            name={name}
            id={name}
            variant={"outlined"}
            fullWidth
            error={hasError}
            value={value}
            helperText={errorMessage ?? (hasFilterStyle ? "" : " ")}
            inputRef={inputRef}
            InputProps={{
              endAdornment: inputEndAdornment,
              startAdornment: !!inputStartAdornment ? (
                <StyledInputStartAdornment>
                  {inputStartAdornment}
                </StyledInputStartAdornment>
              ) : undefined,
            }}
            inputProps={{
              maxLength: maxLength,
              accept: accept,
            }}
            $hasFilterStyle={hasFilterStyle ?? false}
            $isEmpty={!inputRef.current?.value}
            {...rest}
            onChange={onInputChange}
          />
        ) : (
          <MaskedInput
            mask={mask}
            unmask={unmask ?? true}
            blocks={maskBlocks}
            radix=","
            mapToRadix={["."]}
            thousandsSeparator={thousandsSeparator ?? " "}
            max={max ?? Number.MAX_SAFE_INTEGER}
            min={min ?? Number.MIN_SAFE_INTEGER}
            value={value}
            name={name}
            id={name}
            variant={"outlined"}
            fullWidth
            error={hasError}
            helperText={errorMessage ?? (hasFilterStyle ? "" : " ")}
            onAccept={handleMaskInputChange}
            scale={scale}
            $hasFilterStyle={hasFilterStyle ?? false}
            $isEmpty={!value}
            InputProps={{
              endAdornment: inputEndAdornment,
            }}
            {...rest}
          />
        )}
        {unit && (
          <StyledUnit className="bl-text-input__unit">{unit}</StyledUnit>
        )}
      </div>
    </StyledInputWrapper>
  );
};
