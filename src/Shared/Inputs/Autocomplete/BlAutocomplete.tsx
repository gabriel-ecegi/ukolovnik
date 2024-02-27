import {
  Autocomplete as MuiAutocomplete,
  AutocompleteRenderInputParams,
} from "@mui/material";
import { createFilterOptions } from "@mui/material/useAutocomplete";
import {
  StyledAddIcon,
  StyledAutocomplete,
  StyledInput,
  StyledLoadingIcon,
  StyledPopupIcon,
  StyledSearchIcon,
  StyledValidation,
} from "Shared/Inputs/Autocomplete/BlAutocompleteStyles";
import { BlTextInput } from "Shared/Inputs/BlTextInput";
import * as React from "react";
import { useFieldError, FieldErrorProps } from "Forms/Hooks/useFieldError";
import { StyledInputLabel } from "Shared/StyledComponents";
import { Typography } from "@mui/material";
import useDebounce from "Infrastructure/Hooks/useDebounce";
import { usePrevious } from "Infrastructure/Hooks/usePrevious";
import { ExpandArrowIcon } from "Shared/Icons";
import { Resources, useResource } from "Infrastructure/Translations/Resources";

export type LookupItem = {
  id: number | string;
  name: string;
  data?: string;
};

type Props = FieldErrorProps & {
  options: LookupItem[];
  value?: LookupItem | null;
  allowCustomValue?: boolean;
  onOptionSelected?: (val: LookupItem | null) => void;
  onInputValueChange?: (val: string) => void;
  onAddValue?: (val: string) => void;
  inputName?: string;
  label?: string;
  placeholder?: string;
  isLoading?: boolean;
  debounceTime?: number;
  onSearch?: (searchString: string) => void;
  onBlur?: React.FocusEventHandler;
  disabled?: boolean;
};

const filterOptions = createFilterOptions({
  matchFrom: "any",
  stringify: (option: LookupItem) => `${option.name} + ${option.data}`,
});

const formatOption = (option: LookupItem) => {
  return `${option.name}`;
};

const popupIcon = () => {
  return (
    <StyledPopupIcon>
      <ExpandArrowIcon />
    </StyledPopupIcon>
  );
};

const closeIcon = () => {
  return <StyledPopupIcon />;
};

export const BlAutocomplete: React.FunctionComponent<Props> = (props) => {
  const { hasError, errorMessage, originalProps } = useFieldError(props);
  const {
    onInputValueChange,
    onOptionSelected,
    onAddValue,
    allowCustomValue,
    inputName,
    placeholder,
    label,
    debounceTime,
    onSearch,
    onBlur,
    disabled,
  } = originalProps;

  const { t } = useResource();

  const [autocompleteValue, setAutocompleteValue] =
    React.useState<LookupItem | null>(null);
  const [highlightedValue, setHighlightedValue] =
    React.useState<LookupItem | null>(null);
  const [inputValue, setInputValue] = React.useState<string>("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(props.isLoading);
  const [options, setOptions] = React.useState(props.options);

  const [searchTerm, setSearchTerm] = React.useState("");
  const prevSearchTerm = usePrevious(searchTerm);
  const [lastSearchTerm, setLastSearchTerm] = React.useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, debounceTime ?? 500);

  React.useEffect(() => {
    if (debouncedSearchTerm !== lastSearchTerm && onSearch) {
      onSearch(debouncedSearchTerm);
      setLastSearchTerm(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, onSearch, lastSearchTerm]);

  React.useEffect(() => {
    setIsLoading(props.isLoading);
  }, [props.isLoading]);

  React.useEffect(() => {
    setOptions(props.options);
  }, [props.options]);

  React.useEffect(() => {
    setAutocompleteValue((v) =>
      v?.id === originalProps.value?.id ? v : originalProps.value ?? null
    );
  }, [originalProps.value]);

  const onChange = (
    _: React.ChangeEvent<{}>,
    val: LookupItem | string | null
  ) => {
    setAutocompleteValue(val as LookupItem);
    onOptionSelected?.(val as LookupItem);
    setIsLoading(false);
    setHighlightedValue(null);
  };

  const onInputChange = (_: React.ChangeEvent<{}>, val: string | null) => {
    setInputValue(val ?? "");
    onInputValueChange?.(val ?? "");
    if (onSearch) {
      setSearchTerm((val as string) ?? "");

      if (prevSearchTerm && prevSearchTerm !== val) {
        setOptions([]);
      }
    }
  };

  const handleAddValue = () => {
    onAddValue?.(inputValue);
    setInputValue("");
    setAutocompleteValue(null);
  };

  const getInput = (params: AutocompleteRenderInputParams) => {
    return (
      <StyledInput>
        <BlTextInput
          {...params}
          name={inputName}
          placeholder={placeholder}
          disabled={disabled}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading && isOpen && <StyledLoadingIcon size={25} />}
                {params.InputProps.endAdornment}
              </>
            ),
            startAdornment: <StyledSearchIcon />,
          }}
        />
        {allowCustomValue && <StyledAddIcon onClick={handleAddValue} />}
      </StyledInput>
    );
  };

  return (
    <>
      {label && (
        <StyledInputLabel htmlFor={inputName} $hasError={hasError}>
          <Typography>{label}</Typography>
        </StyledInputLabel>
      )}
      <StyledAutocomplete
        $allowCustomValue={!!allowCustomValue}
        $open={isOpen}
        $hasError={hasError}
      >
        <MuiAutocomplete
          value={autocompleteValue}
          inputValue={inputValue}
          options={options}
          onChange={onChange}
          onInputChange={onInputChange}
          renderInput={(params) => getInput(params)}
          filterOptions={filterOptions}
          forcePopupIcon={true}
          getOptionLabel={(option) => formatOption(option)}
          getOptionKey={(option) => option.id.toString()}
          isOptionEqualToValue={(option, val) => option.id === val.id}
          popupIcon={popupIcon()}
          clearIcon={allowCustomValue || isLoading ? null : closeIcon()}
          disabled={disabled}
          onOpen={() => {
            setIsOpen(true);
            if (onSearch) {
              onSearch(debouncedSearchTerm);
            }
          }}
          onClose={() => {
            setIsOpen(false);
            setSearchTerm("");
          }}
          autoHighlight
          clearText={t(Resources.Autocomplete.ClearText)}
          closeText={t(Resources.Autocomplete.CloseText)}
          openText={t(Resources.Autocomplete.OpenText)}
          noOptionsText={t(Resources.Autocomplete.NoOptionsText)}
          loadingText={t(Resources.Autocomplete.LoadingText)}
          loading={false}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              e.stopPropagation();
              !highlightedValue && handleAddValue();
            }
          }}
          onHighlightChange={(_, val: LookupItem | null) => {
            setHighlightedValue(val);
          }}
          onBlur={onBlur}
        />
        {hasError && <StyledValidation>{errorMessage}</StyledValidation>}
      </StyledAutocomplete>
    </>
  );
};
