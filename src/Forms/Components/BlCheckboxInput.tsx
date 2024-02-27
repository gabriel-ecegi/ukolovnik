import {
  Control,
  Controller,
  FieldErrors,
  FieldPath,
  FieldValues,
} from "react-hook-form";
import { BlCheckboxInput as Checkbox } from "Shared/Inputs/BlCheckboxInput";
import { CheckboxProps } from "@mui/material";
import { get } from "lodash-es";

type Props<FormType extends FieldValues> = Omit<CheckboxProps, "onChange"> & {
  name: FieldPath<FormType>;
  label?: string | JSX.Element;
  control: Control<FormType, object>;
  errors: FieldErrors<FormType>;
  isLabelFirst?: boolean;
  hasFilterStyle?: boolean;
  hasErrorMessage?: boolean;
  onChange?: (value: boolean) => void;
};

export const BlCheckboxInput = <T extends object>(props: Props<T>) => {
  const { control, errors, name, isLabelFirst, onChange, ...rest } = props;
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange: controllerOnChange, value } }) => {
          const onValueChange = (val: boolean) => {
            controllerOnChange(val);
            if (onChange) {
              onChange(val);
            }
          };

          const fieldError = get(errors, name as string);

          return (
            <Checkbox
              onChange={(e) => onValueChange(e.target.checked)}
              value={value}
              checked={value === true}
              name={name}
              fieldError={fieldError}
              isLabelFirst={isLabelFirst}
              {...rest}
            />
          );
        }}
      />
    </>
  );
};
