import styled from "@emotion/styled";
import { Box, Card, Slider, Typography } from "@mui/material";
import { BlButton } from "Shared/Buttons/BlButton";

type AlignItemsType = "center" | "flex-end" | "flex-start";
type JustifyContentType =
  | "center"
  | "flex-end"
  | "flex-start"
  | "space-between"
  | "space-around";

export const StyledFlex = styled.div<{
  $alignItems?: AlignItemsType;
  $justifyContent?: JustifyContentType;
  $mdFlexFlow?: "row" | "column";
  $gap?: number;
  $fullHeight?: boolean;
  $flexDirection?: "column" | "row";
  $flexWrap?: "wrap" | "nowrap";
  $overflow?: "hidden" | "auto" | "scroll";
  $flexGrow?: number;
  $marginTop?: number;
  $marginBottom?: number;
}>`
  display: flex;
  max-width: 100%;
  flex-direction: ${(props) =>
    props.$flexDirection ? props.$flexDirection : ""};
  flex-wrap: ${(props) => (props.$flexWrap ? props.$flexWrap : "")};
  align-items: ${(props) => (props.$alignItems ? props.$alignItems : "")};
  justify-content: ${(props) =>
    props.$justifyContent ? props.$justifyContent : ""};
  gap: ${(props) => (props.$gap ? props.theme.spacing(props.$gap) : "")};
  overflow: ${(props) => (props.$overflow ? props.$overflow : "")};
  margin-top: ${(props) =>
    props.$marginTop ? props.theme.spacing(props.$marginTop) : ""};
  margin-bottom: ${(props) =>
    props.$marginBottom ? props.theme.spacing(props.$marginBottom) : ""};

  ${(props) => props.theme.breakpoints.down("lg")} {
    flex-flow: ${(props) => (props.$mdFlexFlow ? props.$mdFlexFlow : "")};
  }

  ${(props) => props.$flexGrow && `flex-grow: ${props.$flexGrow};`}
  ${(props) =>
    props.$fullHeight &&
    `
      height: 100%;
    `}

    .flex-1 {
    flex: 1;
  }
`;

export const StyledInputLabel = styled.label<{ $hasError?: boolean }>`
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.$hasError
      ? props.theme.colors.red
      : props.theme.palette.text.primary};
  margin-bottom: ${(props) => props.theme.spacing(0.5)};
  z-index: 1;
`;

export const StyledFilterWrapper = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing(2, 3)};
  align-items: flex-end;
  margin-bottom: ${(props) => props.theme.spacing(5)};
  margin-top: ${(props) => props.theme.spacing(6)};

  & > div {
    margin: 0;
  }

  .MuiFormControl-root {
    .MuiFormHelperText-root {
      display: none;
    }
  }
`;

export const StyledFilterSubmit = styled(BlButton)`
  color: ${(props) => props.theme.palette.primary.main};
  background-color: transparent;
  box-shadow: none;
  border: 1px solid ${(props) => props.theme.palette.primary.main};

  ${(props) => props.theme.breakpoints.up("md")} {
    &:hover {
      background-color: transparent;
    }
  }
`;

export const StyledPageWrapper = styled.div<{ $isNarrow?: boolean }>`
  margin: 0 auto;
  width: 100%;
  max-width: ${(props) => (props.$isNarrow ?? false ? "728px" : "1145px")};
  padding-top: ${(props) => props.theme.spacing(5)};
`;

export const StyledContentWrapper = styled.div<{ $fullPadding?: boolean }>`
  padding: ${(props) => props.theme.spacing(3, 2.5)};
  padding-bottom: ${(props) => props.theme.spacing(props.$fullPadding ? 3 : 1)};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.contentWrapperBorder};

  .bl-tabs {
    width: calc(100% + ${(props) => props.theme.spacing(5)});
    transform: translate(
      -${(props) => props.theme.spacing(2.5)},
      -${(props) => props.theme.spacing(3)}
    );

    &__tab-panel {
      width: calc(100% - ${(props) => props.theme.spacing(5)});
      margin-left: ${(props) => props.theme.spacing(2.5)};
    }
  }
`;

export const StyledButtonBox = styled(Box)`
  display: flex;
  gap: ${(props) => props.theme.spacing(2)};
  margin-top: ${(props) => props.theme.spacing(4)};
  flex-direction: column;
`;

export const FullWidthDiv = styled.div`
  width: 100%;
`;

export const StyledSlider = styled(Slider)`
  .MuiSlider-rail {
    background-color: ${(props) => props.theme.palette.secondary.main};
  }

  .MuiSlider-thumb {
    height: 25px;
    width: 25px;
  }
`;

export const StyledDarkCard = styled(Card)<{
  $withPadding?: boolean;
  $isActive?: boolean;
}>`
  position: relative;
  overflow: hidden;
  box-shadow: none;
  border: 1px solid
    ${({ theme, $isActive }) =>
      $isActive ? theme.palette.primary.main : theme.colors.border}80;
  border-radius: 16px;
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.colors.gray};

  .MuiCardContent-root {
    padding: ${(props) => props.theme.spacing(3)};
  }

  cursor: pointer;
`;

export const MultilineTypography = styled(Typography)`
  max-height: 100px;
  overflow-y: auto;
  overflow-x: hidden;
  white-space: pre-line;
  margin-top: ${(props) => props.theme.spacing(8)};
  padding-right: ${(props) => props.theme.spacing(2)};
`;
