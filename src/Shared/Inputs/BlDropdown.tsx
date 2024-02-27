import * as React from "react";
import styled from "@emotion/styled";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { LookupItem } from "Infrastructure/Models/LookupItem";
import { BlCheckboxInput } from "Shared/Inputs/BlCheckboxInput";
import { ExpandArrowIcon } from "Shared/Icons";
import { Resources, useResource } from "Infrastructure/Translations/Resources";

type valueType = string | number | string[] | number[];

type Props = {
  name: string;
  options: LookupItem[];
  value: valueType;
  defaultValue?: valueType;
  onChange?: (value: valueType) => void;
  onBlur?: () => void;
  disabled?: boolean;
  multiple?: boolean;
  label?: string;
  placeholder?: string;
  allSelectedText?: string;
  hasError?: boolean;
  hasFilterStyle?: boolean;
};

// Styled components
const StyledSelect = styled(Select)<{ $hasFilterStyle?: boolean }>`
  &:before,
  &:after {
    content: none;
  }

  .MuiSelect-select {
    padding: ${(props) =>
      props.theme.spacing(
        props.$hasFilterStyle ? 0 : 1.4,
        props.$hasFilterStyle ? 0 : 1.6
      )};
    background-color: ${(props) => props.theme.colors.fieldBackground};
    border-radius: ${(props) => props.theme.borderRadius};
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.colors.border};
    border-radius: ${(props) => props.theme.borderRadius};
  }

  &:hover {
    .MuiOutlinedInput-notchedOutline {
      border-color: ${(props) => props.theme.palette.primary.main};
    }
  }

  &.Mui-focused {
    .MuiOutlinedInput-notchedOutline {
      border-color: ${(props) => props.theme.palette.primary.main};
    }
  }

  &.Mui-disabled {
    .MuiSelect-select {
      background-color: ${(props) => props.theme.colors.gray}80;
      border-color: ${(props) => props.theme.colors.gray}80;
      color: ${(props) => props.theme.palette.text.primary}80;
    }
  }

  ${(props) =>
    props.$hasFilterStyle &&
    `
    .MuiSelect-select {
      color: ${props.theme.palette.primary.main};
      background-color: transparent;
    }

    .MuiOutlinedInput-notchedOutline {
      border: none;
    }
  `}
`;

const StyledLabel = styled.div`
  color: ${(props) => props.theme.palette.text.primary};
  margin-bottom: ${(props) => props.theme.spacing(1)};
`;

const StyledIcon = styled.div<{ $hasFilterStyle: boolean }>`
  position: absolute;
  right: 16px;
  pointer-events: none;
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.$hasFilterStyle
      ? props.theme.palette.primary.main
      : props.theme.palette.text.primary};

  svg {
    width: 12px;
    height: auto;
    opacity: ${(props) => (props.$hasFilterStyle ? 1 : 0.5)};
  }
`;

const StyledSelectedValue = styled.div<{
  $hasFilterStyle: boolean;
  $upperCase?: boolean;
}>`
  overflow: hidden;
  margin-right: ${(props) =>
    props.$hasFilterStyle ? props.theme.spacing(1) : props.theme.spacing(2)};
  text-overflow: ellipsis;
  text-transform: ${(props) => (props.$upperCase ? "uppercase" : "none")};
  min-height: 14px;
  font-size: ${(props) => (props.$hasFilterStyle ? "12px" : "16px")};
  font-weight: 600;
`;

const dropdownIcon = (hasFilterStyle: boolean) => {
  return (
    <StyledIcon $hasFilterStyle={hasFilterStyle}>
      <ExpandArrowIcon />
    </StyledIcon>
  );
};

const StyledPlaceholder = styled.div<{ $hasFilterStyle: boolean }>`
  font-size: ${(props) => (props.$hasFilterStyle ? "12px" : "16px")};
  margin-right: ${(props) =>
    props.$hasFilterStyle ? props.theme.spacing(1) : props.theme.spacing(2)};
  font-weight: ${(props) => (props.$hasFilterStyle ? 600 : 400)};
  opacity: ${(props) => (props.$hasFilterStyle ? 1 : 0.5)};
`;

const StyledMenuItem = styled(MenuItem)`
  font-size: 16px;
  .MuiTouchRipple-root {
    color: ${(props) => props.theme.palette.primary.main};
  }

  .MuiCheckbox-root {
    padding: 0;
  }
`;

const selectedValue = (
  value: valueType,
  props: Props,
  t: (resourcePath: string, options?: any) => string
): React.ReactNode => {
  const { placeholder, multiple, options, allSelectedText } = props;

  if (!value || (value as Array<string | number>).length === 0) {
    return placeholder ? (
      <StyledPlaceholder $hasFilterStyle={props.hasFilterStyle ?? false}>
        {placeholder}
      </StyledPlaceholder>
    ) : (
      <StyledSelectedValue $hasFilterStyle={props.hasFilterStyle ?? false} />
    );
  }

  if (multiple && (value as Array<string | number>).length === options.length) {
    return (
      <StyledSelectedValue $hasFilterStyle={props.hasFilterStyle ?? false}>
        {allSelectedText ?? t(Resources.Common.AllStatuses)}
      </StyledSelectedValue>
    );
  }
  const text = multiple
    ? options
        .filter((o) => (value as number[]).some((v) => v === o.Value))
        .map((x) => x.Name)
        .join(", ")
    : options.find((x) => x.Value.toString() === value.toString())?.Name;

  return (
    <StyledSelectedValue $hasFilterStyle={props.hasFilterStyle ?? false}>
      {text}
    </StyledSelectedValue>
  );
};

export const BlDropdown: React.FunctionComponent<Props> = (props) => {
  const {
    options,
    value,
    disabled,
    name,
    onChange,
    multiple,
    label,
    onBlur,
    hasError,
    hasFilterStyle,
  } = props;
  const { t } = useResource();
  const menuAnchorRef = React.useRef<HTMLDivElement>(null);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    onChange?.(event.target.value as valueType);
  };

  const anchorMenuProps =
    hasFilterStyle && menuAnchorRef.current
      ? {
          anchorEl: menuAnchorRef.current,
        }
      : {};

  return (
    <div>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledSelect
        value={value}
        defaultValue={props.defaultValue}
        onChange={handleChange}
        onBlur={onBlur}
        inputProps={{ "aria-label": "Without label" }}
        IconComponent={() => dropdownIcon(hasFilterStyle ?? false)}
        disabled={disabled}
        multiple={multiple}
        error={hasError}
        fullWidth
        displayEmpty
        MenuProps={{
          variant: "menu",
          style: {
            maxHeight: "300px",
          },
          ...anchorMenuProps,
        }}
        renderValue={(value) => selectedValue(value as valueType, props, t)}
        variant={"outlined"}
        $hasFilterStyle={hasFilterStyle}
      >
        {options.map((opt) => (
          <StyledMenuItem key={`${name}-${opt.Value}`} value={opt.Value}>
            {multiple ? (
              <BlCheckboxInput
                checked={(value as number[]).some((x) => x === opt.Value)}
                label={opt.Name}
              />
            ) : (
              <span>{opt.Name}</span>
            )}
          </StyledMenuItem>
        ))}
      </StyledSelect>
      <div ref={hasFilterStyle ? menuAnchorRef : undefined} />
    </div>
  );
};
