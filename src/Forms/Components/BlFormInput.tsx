import { TextFieldProps } from "@mui/material";
import { StyledFormControl } from "Forms/Components/FormStyles";
import {
  BlTextInput,
  MaskBlockType,
  MaskType,
} from "Shared/Inputs/BlTextInput";
import { get } from "lodash-es";
import {
  Control,
  Controller,
  FieldErrors,
  FieldPath,
  FieldValues,
} from "react-hook-form";

type Props<FormType extends FieldValues> = Omit<TextFieldProps, "onChange"> & {
  name: FieldPath<FormType>;
  label?: string;
  control: Control<FormType, object>;
  errors: FieldErrors<FormType>;

  maxLength?: number;
  disabled?: boolean;
  mask?: MaskType;
  maskBlocks?: MaskBlockType;
  type?: string;
  accept?: string;
  max?: number;
  min?: number;
  scale?: number;
  isNumber?: boolean;
  formControlClass?: "long" | "medium" | "tiny" | string;
  unit?: string;
  inputEndAdornment?: JSX.Element;
  inputStartAdornment?: JSX.Element;
  hasFilterStyle?: boolean;
  unmask?: boolean | "typed";
  thousandsSeparator?: string;
  labelStartAdornment?: JSX.Element;
  onChange?: (
    event:
      | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
      | unknown
  ) => void;
};

export const BlFormInput = <T extends object>(props: Props<T>) => {
  const {
    name,
    control,
    errors,
    maxLength,
    label,
    disabled,
    mask,
    type,
    max,
    min,
    scale,
    isNumber,
    formControlClass,
    unit,
    hasFilterStyle,
    thousandsSeparator,
    accept,
    labelStartAdornment: labelEndAdornment,
    ...rest
  } = props;

  const transform =
    isNumber || type === "number"
      ? {
          input: (value: number) =>
            !value || Number.isNaN(value) || value === 0
              ? ""
              : value.toString(),
          output: (e: { target: { value: string } }) => {
            const output = Number(e.target.value);
            return Number.isNaN(output) ? 0 : output;
          },
        }
      : {
          input: (value: any) =>
            value === null || value === undefined ? "" : value,
          output: (e: { target: { value: string } }) => {
            return e.target.value;
          },
        };

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, onBlur } }) => {
          return (
            <StyledFormControl
              className={`${formControlClass} ${!label ? "no-label" : ""}`}
            >
              <BlTextInput
                value={transform.input(value as any)}
                name={name.toString()}
                label={label}
                fieldError={get(errors, name as string)}
                maxLength={maxLength}
                disabled={disabled}
                onBlur={onBlur}
                mask={mask}
                type={type ?? "text"}
                accept={accept}
                max={max}
                min={min}
                scale={scale}
                unit={unit}
                onInputChange={(e) => {
                  onChange(e);
                  rest.onChange?.(e.currentTarget.value);
                }}
                hasFilterStyle={hasFilterStyle}
                thousandsSeparator={thousandsSeparator}
                onMaskInputChange={(v) => {
                  onChange(isNumber ? Number(v) : v);
                  rest.onChange?.(v);
                }}
                labelEndAdornment={labelEndAdornment}
                {...rest}
              />
            </StyledFormControl>
          );
        }}
      />
    </>
  );
};
