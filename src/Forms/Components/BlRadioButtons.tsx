import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Stack,
  Box,
  TypographyProps,
} from "@mui/material";
import {
  Control,
  Controller,
  FieldError,
  FieldErrors,
  FieldPath,
  FieldValues,
} from "react-hook-form";
import { get } from "lodash-es";
import {
  StyledFormControl,
  StyledFormInput,
  StyledFormLabelWrapper,
  StyledValidationText,
} from "Forms/Components/FormStyles";
import { useFieldError } from "Forms/Hooks/useFieldError";
import { CodeListItem } from "Infrastructure/Models/ICodeListDto";
import styled from "@emotion/styled";

type Props<FormType extends FieldValues> = {
  codeList: CodeListItem[];
  name: FieldPath<FormType>;
  control: Control<FormType, object>;
  label?: string;
  useCodesAsLabels?: boolean;
  disabled?: boolean;
  errors: FieldErrors<FormType>;
  row?: boolean;
  slotProps?: {
    typography?: TypographyProps;
  };
  onChange?: (value: string) => void;
};

const StyledFormControlLabel = styled(FormControlLabel)`
  display: flex;
  flex-flow: row;
  align-items: center;
  margin-right: ${(props) => props.theme.spacing(5)};

  .Mui-checked + span p:first-of-type {
    font-weight: 600;
  }
`;

const StyledIcon = styled.div<{ $isDisabled: boolean }>`
  width: 24px;
  min-width: 24px;
  height: 24px;
  position: relative;
  border-radius: 50%;
  border: 1px solid
    ${(props) =>
      props.$isDisabled
        ? props.theme.colors.radioBtnDisabled
        : props.theme.palette.primary.main};
`;

const StyledIconChecked = styled(StyledIcon)<{ $isDisabled: boolean }>`
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background-color: ${(props) =>
      props.$isDisabled
        ? props.theme.colors.radioBtnDisabled
        : props.theme.palette.primary.main};
    border-radius: 50%;
  }
`;

const Description = styled(Typography)`
  color: ${(props) => props.theme.palette.text.secondary};
  font-weight: 400;
`;

export const BlRadioButtons = <T extends object>(props: Props<T>) => {
  const {
    codeList,
    name,
    control,
    useCodesAsLabels,
    label,
    disabled,
    errors,
    row,
    slotProps,
    onChange: propsOnChange,
  } = props;
  const defaultValue = codeList[0]?.code;
  const { hasError, errorMessage } = useFieldError({
    fieldError: get(errors, name) as FieldError,
  });

  return (
    <StyledFormControl>
      {!!label && (
        <StyledFormLabelWrapper $disabled={disabled ?? false}>
          <label htmlFor={"name"}>{label}</label>
        </StyledFormLabelWrapper>
      )}
      <StyledFormInput>
        <Controller
          control={control}
          defaultValue={defaultValue as any}
          name={name}
          render={({ field: { value, name, onChange, onBlur } }) => (
            <RadioGroup
              value={value ?? ""}
              name={name}
              onChange={(e) => {
                const value = e.target.value;
                propsOnChange?.(value);
                onChange(value);
              }}
              onBlur={onBlur}
              row={row ?? true}
            >
              {codeList.map((item) => (
                <StyledFormControlLabel
                  className="bl-radio-buttons__label"
                  disabled={disabled}
                  key={item.code.toString()}
                  value={item.code.toString()}
                  control={
                    <Radio
                      icon={<StyledIcon $isDisabled={disabled ?? false} />}
                      checkedIcon={
                        <StyledIconChecked $isDisabled={disabled ?? false} />
                      }
                    />
                  }
                  slotProps={slotProps}
                  label={
                    <Box className="bl-radio-buttons__label-content">
                      <Stack direction={"row"}>
                        <Typography fontSize={16}>
                          {useCodesAsLabels === true ? item.code : item.name}
                        </Typography>
                        <Box ml={0.5}>{item.endAdornment}</Box>
                      </Stack>

                      {!!item.description && (
                        <>
                          {typeof item.description === "string" ? (
                            <Description>{item.description}</Description>
                          ) : (
                            <Box>{item.description}</Box>
                          )}
                        </>
                      )}
                    </Box>
                  }
                />
              ))}
            </RadioGroup>
          )}
        />
      </StyledFormInput>
      <StyledValidationText>{hasError && errorMessage}</StyledValidationText>
    </StyledFormControl>
  );
};
