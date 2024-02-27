import { Typography } from "@mui/material";
import { DateTimeField, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ExtractProps } from "Infrastructure/Utils/ObjectUtils";
import { isValid, parseISO } from "date-fns";
import cs from "date-fns/locale/cs";
import styled from "@emotion/styled";
import { datePickerFieldStyles } from "Shared/Inputs/DatePickers/Styles";
import { StyledInputLabel } from "Shared/StyledComponents";
import {
  StyledFormControl,
  StyledFormLabelWrapper,
  StyledFormInput,
  StyledValidationText,
} from "Forms/Components/FormStyles";

type DateTimePickerProps = ExtractProps<typeof DateTimePicker>;

export type Props = {
  value: Date | string | null | undefined;
  label?: string | JSX.Element;
  name?: string;

  hasError?: boolean;
  disabledPast?: boolean;
  disableFuture?: boolean;
  errorMessage?: string;
  formControlClass?: "long" | "medium" | "tiny";
  disabled?: boolean;
  minDateTime?: Date;
  readOnlyField?: boolean;
  onChange?: (date: Date | null) => void;
};

const StyledDateTimeField = styled(DateTimeField)`
  ${() => {
    return datePickerFieldStyles;
  }}
`;

type FieldProps = DateTimePickerProps & { readOnly?: boolean };

const Field: React.FunctionComponent<FieldProps> = (props) => {
  const { readOnly, ...rest } = props;
  return <StyledDateTimeField readOnly={readOnly} {...rest} />;
};

export const BlDateTimePicker: React.FunctionComponent<Props> = (props) => {
  const {
    label,
    value,
    name,
    hasError,
    errorMessage,
    disabledPast,
    disableFuture,
    formControlClass,
    disabled,
    onChange,
    minDateTime,
    readOnlyField,
  } = props;

  const handleChange = (date: Date | null) => {
    onChange?.(isValid(date) ? date : null);
  };

  return (
    <StyledFormControl
      className={`${formControlClass} ${!label && "no-label"}`}
    >
      {!!label && !!name && (
        <StyledFormLabelWrapper $disabled={disabled ?? false}>
          <StyledInputLabel htmlFor={name} $hasError={hasError}>
            <Typography>{label}</Typography>
          </StyledInputLabel>
        </StyledFormLabelWrapper>
      )}
      <StyledFormInput>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={cs}>
          <DateTimePicker
            format={"dd.MM.yyyy HH:mm"}
            value={value instanceof Date ? value : parseISO(value ?? "")}
            onChange={(e: unknown) => {
              handleChange(e as Date);
            }}
            disablePast={disabledPast}
            disableFuture={disableFuture}
            disabled={disabled}
            minDateTime={minDateTime}
            slots={{ field: Field }}
            slotProps={{
              field: { readOnly: readOnlyField },
            }}
          />
        </LocalizationProvider>
      </StyledFormInput>
      <StyledValidationText>{hasError && errorMessage}</StyledValidationText>
    </StyledFormControl>
  );
};
