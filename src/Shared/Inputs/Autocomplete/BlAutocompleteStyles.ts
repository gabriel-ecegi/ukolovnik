import { StyledFlex } from "Shared/StyledComponents";
import { BlDefaultButton } from "Shared/Buttons/BlDefaultButton";
import { CircularProgress } from "@mui/material";

import { SearchIcon } from "Shared/Icons";
import styled from "@emotion/styled";

type StyledAutocompleteType = {
  $allowCustomValue: boolean;
  $open: boolean;
  $hasError: boolean;
};

const StyledPopupIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  svg {
    width: 12px;
    height: auto;
    opacity: 0.5;
  }
`;

const StyledInput = styled(StyledFlex)`
  position: relative;
  & > div {
    width: 100%;
  }
`;

const StyledAddIcon = styled(BlDefaultButton)`
  position: absolute;
  right: 10px;
  top: 8px;
  padding: 2px;
  border-radius: 50%;

  svg {
    width: 25px;
    height: 25px;
  }
`;

const StyledValidation = styled.div`
  position: absolute;
  top: calc(100% - 12px);
  left: 15px;
  color: ${(props) => props.theme.palette.error.main};
  font-size: 12px;
`;

const StyledAutocomplete = styled.div<StyledAutocompleteType>`
  position: relative;

  .MuiAutocomplete-inputRoot {
    padding: 0 !important;
    background-color: ${(props) => props.theme.colors.fieldBackground};

    .MuiAutocomplete-input {
      padding: ${(props) => props.theme.spacing(1.2, 0)};
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: ${(props) =>
        props.$hasError ? props.theme.palette.error.main : ""};
    }
  }
  .MuiAutocomplete-endAdornment {
    right: ${(props) => (props.$allowCustomValue ? 50 : 12)}px !important;
    top: 50%;
    transform: translateY(-50%);
  }

  .MuiAutocomplete-popupIndicatorOpen {
    transform: ${(props) => (props.$allowCustomValue ? "rotate(0)" : "")};
  }

  .MuiAutocomplete-paper {
    margin: 0;
  }

  .MuiAutocomplete-clearIndicator {
    margin-right: ${(props) => props.theme.spacing(1)};
    height: 33px;
  }

  .MuiAutocomplete-clearIndicator {
    padding: ${(props) => (props.$allowCustomValue ? "0" : "")};
  }
`;

const StyledLoadingIcon = styled(CircularProgress)`
  position: absolute;
  right: 50px;
`;

const StyledSearchIcon = styled(SearchIcon)`
  color: ${(props) => props.theme.palette.text.secondary};
  margin-left: ${(props) => props.theme.spacing(1.6)};
  margin-right: ${(props) => props.theme.spacing(1.6)};
`;

export {
  StyledAddIcon,
  StyledAutocomplete,
  StyledInput,
  StyledPopupIcon,
  StyledValidation,
  StyledLoadingIcon,
  StyledSearchIcon,
};
