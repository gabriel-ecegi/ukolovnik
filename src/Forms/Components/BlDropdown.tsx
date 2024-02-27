import { Box, Typography } from "@mui/material";
import {
  StyledFormControl,
  StyledFormInput,
  StyledFormLabelWrapper,
  StyledValidationText,
} from "Forms/Components/FormStyles";
import { BlDropdown as DropdownInput } from "Shared/Inputs/BlDropdown";
import { StyledInputLabel } from "Shared/StyledComponents";
import { CodeListItem } from "Infrastructure/Models/ICodeListDto";
import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldPath,
  FieldValues,
} from "react-hook-form";

export type DropdownValueType = string | number | boolean;

type Props<
  FormType extends FieldValues,
  U extends boolean | undefined
> = (U extends true
  ? {
      onChange?: (value: DropdownValueType[] | null) => void;
    }
  : {
      onChange?: (value: DropdownValueType | null) => void;
    }) & {
  codeList: CodeListItem[];
  name: FieldPath<FormType>;
  formControlClass?: "long" | "medium" | "tiny" | string;
  label?: string;
  control: Control<FormType, object>;
  errors: DeepMap<any, FieldError>;
  disabled?: boolean;
  placeholder?: string;
  hasFilterStyle?: boolean;
  multiple?: boolean;
  labelEndAdornment?: JSX.Element;
};

export const BlDropdown = <T extends object, U extends boolean>(
  props: Props<T, U>
) => {
  const {
    codeList,
    name,
    control,
    label,
    disabled,
    errors,
    formControlClass,
    placeholder,
    hasFilterStyle,
    multiple,
    labelEndAdornment,
    onChange,
  } = props;
  const error: FieldError | undefined = errors[name];
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({
          field: { onChange: controllerOnChange, value, onBlur, name },
        }) => {
          const isFilled =
            !!value &&
            (multiple
              ? codeList.some((e) =>
                  (value as []).some((v) => e.id === v || e.code === v)
                )
              : codeList.some((e) => e.id === value || e.code === value));

          const formValue = isFilled ? value : multiple ? [] : "";

          const onValueChange = (
            val: DropdownValueType | DropdownValueType[] | null
          ) => {
            controllerOnChange(val);
            if (onChange) {
              onChange(val as any);
            }
          };

          return (
            <>
              <StyledFormControl
                className={`bl-form-control ${formControlClass ?? ""} ${
                  !label ? "no-label" : ""
                } ${hasFilterStyle ? "filter" : ""}`}
              >
                {!!label && (
                  <StyledFormLabelWrapper
                    $disabled={disabled ?? false}
                    className="bl-form-control__label"
                  >
                    <StyledInputLabel htmlFor={name} $hasError={!!error}>
                      <Typography>{label}</Typography>
                      {!!labelEndAdornment && (
                        <Box m={0.5}>{labelEndAdornment}</Box>
                      )}
                    </StyledInputLabel>
                  </StyledFormLabelWrapper>
                )}
                <StyledFormInput className="bl-form-control__input">
                  <DropdownInput
                    value={formValue}
                    onChange={onValueChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    hasError={!!error}
                    name={name}
                    placeholder={placeholder}
                    options={codeList.map((x) => ({
                      Name: x.name,
                      Value: x.id ?? x.code,
                    }))}
                    hasFilterStyle={hasFilterStyle}
                    multiple={multiple}
                  />
                </StyledFormInput>
                <StyledValidationText $hasFilterStyle={hasFilterStyle}>
                  {!!error && error.message}
                </StyledValidationText>
              </StyledFormControl>
            </>
          );
        }}
      />
    </>
  );
};
