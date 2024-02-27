import styled from "@emotion/styled";

const StyledFormRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${(props) => props.theme.spacing(5, 4)};
  padding-left: ${(props) => props.theme.spacing(20)};
  margin-top: ${(props) => props.theme.spacing(1)};

  .checkbox {
    margin-top: ${(props) => props.theme.spacing(7)};
  }

  label {
    white-space: nowrap;
  }
`;

const StyledFormTitle = styled.div`
  margin: ${(props) => props.theme.spacing(5, 0)};
  text-transform: uppercase;
`;

const StyledFormControl = styled.div`
  &.long {
    flex: 0 0 360px;
    max-width: 360px;
  }

  &.medium {
    flex: 0 0 235px;
    max-width: 235px;
  }

  &.tiny {
    flex: 0 0 85px;
    max-width: 85px;
  }

  &.no-label:not(.filter):not(.no-padding) {
    padding-top: 26px;
  }

  &.no-label {
    .MuiFormControl-root {
      margin-top: 0;
    }

    .bl-text-input__unit {
      top: 0;
    }
  }
`;

const StyledFormLabelWrapper = styled.div<{ $disabled: boolean }>`
  margin-bottom: ${(props) => props.theme.spacing(0.5)};
  display: flex;
  align-items: center;
  z-index: 1;

  label {
    display: flex;
    align-items: center;
    margin: 0;
    color: ${(props) =>
      props.$disabled
        ? props.theme.palette.text.disabled
        : props.theme.palette.text.primary};
  }
`;

const StyledFormInput = styled.div`
  & > div {
    display: flex;
  }
`;

const StyledValidationText = styled.div<{
  $hasFilterStyle?: boolean;
  $fontSize?: string;
}>`
  font-size: ${(props) => props.$fontSize ?? "12px"};
  color: ${(props) => props.theme.palette.error.main};
  min-height: ${(props) => (props.$hasFilterStyle ? "0px" : "20px")};
`;

export {
  StyledFormControl,
  StyledFormInput,
  StyledFormLabelWrapper,
  StyledFormRow,
  StyledFormTitle,
  StyledValidationText,
};
