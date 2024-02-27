import { Typography } from "@mui/material";
import { DateField, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { BaseDateValidationProps } from "@mui/x-date-pickers/internals";
import {
  StyledFormControl,
  StyledFormInput as BaseStyledFormInput,
  StyledFormLabelWrapper,
  StyledValidationText,
} from "Forms/Components/FormStyles";
import { datePickerFieldStyles } from "Shared/Inputs/DatePickers/Styles";
import { StyledInputLabel } from "Shared/StyledComponents";
import { ExtractProps } from "Infrastructure/Utils/ObjectUtils";
import { isValid, parseISO } from "date-fns";
import cs from "date-fns/locale/cs";
import styled from "@emotion/styled";

export type Props = {
  value: Date | string | null | undefined;
  label?: string | JSX.Element;
  name?: string;
  hasError?: boolean;
  disabledPast?: boolean;
  errorMessage?: string;
  formControlClass?: "long" | "medium" | "tiny";
  disabled?: boolean;
  readOnlyField?: boolean;
  onChange?: (date: Date | null) => void;
} & BaseDateValidationProps<Date>;

const StyledFormInput = styled(BaseStyledFormInput)<{
  $hasError: boolean;
}>`
  fieldset {
    border-color: ${(props) =>
      props.$hasError
        ? props.theme.palette.error.main
        : props.theme.colors.border};
  }
  background-color: ${(props) => props.theme.colors.fieldBackground};
`;

const StyledDateField = styled(DateField)`
  ${() => {
    return datePickerFieldStyles;
  }}
`;

type DatePickerProps = ExtractProps<typeof DatePicker>;

type FieldProps = DatePickerProps & { readOnly?: boolean };

const Field: React.FunctionComponent<FieldProps> = (props) => {
  const { readOnly, ...rest } = props;
  return <StyledDateField readOnly={readOnly} {...rest} />;
};

export const BlDatePicker: React.FunctionComponent<Props> = (props) => {
  const {
    label,
    value,
    name,
    hasError,
    errorMessage,
    disabledPast,
    formControlClass,
    disabled,
    readOnlyField,
    onChange,
    ...rest
  } = props;

  const handleChange = (date: Date | null) => {
    onChange?.(isValid(date) ? date : null);
  };

  return (
    <StyledFormControl
      className={`${formControlClass ?? ""} ${!label ? "no-label" : ""}`}
    >
      {!!label && !!name && (
        <StyledFormLabelWrapper $disabled={disabled ?? false}>
          <StyledInputLabel htmlFor={name} $hasError={hasError}>
            <Typography>{label}</Typography>
          </StyledInputLabel>
        </StyledFormLabelWrapper>
      )}
      <StyledFormInput $hasError={hasError ?? false}>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={cs}>
          <DatePicker
            className={hasError ? "Mui-error" : ""}
            format={"dd.MM.yyyy"}
            value={
              isValid(value)
                ? value
                : isValid(parseISO(value as string))
                ? parseISO(value as string)
                : null
            }
            onChange={(e: unknown) => handleChange(e as Date)}
            disablePast={disabledPast}
            disabled={disabled}
            slots={{ field: Field }}
            slotProps={{
              field: { readOnly: readOnlyField },
            }}
            {...rest}
          />
        </LocalizationProvider>
      </StyledFormInput>
      <StyledValidationText>{hasError && errorMessage}</StyledValidationText>
    </StyledFormControl>
  );
};
