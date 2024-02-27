import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { CircularProgress } from "@mui/material";
import { BlSkeleton } from "Shared/BlSkeleton";
import { isNoU } from "Infrastructure/Utils/ObjectUtils";
import styled from "@emotion/styled";

export type PrimaryButtonProps = ButtonProps & {
  paddingLeftRight?: number;
  isLoading?: boolean;
  fetchProgress?: number | null;
};

const StyledButton = styled(({ ...rest }: PrimaryButtonProps) => (
  <Button {...rest} />
))`
  padding: ${(props) =>
    props.theme.spacing(0.9, props.paddingLeftRight ?? 2.5)};
  border: 1px solid transparent;
  box-shadow: ${(props) => props.theme.shadow.primary};
  border-radius: 28px;

  ${(props) =>
    props.color === "primary" &&
    `
      background-color: ${props.theme.palette.primary.main};
      color: ${props.theme.palette.primary.contrastText};

      &:hover {
        background-color: ${props.theme.palette.primary.main};
        box-shadow: ${props.theme.shadow.primaryHover};
      }

      &.Mui-disabled {
        background-color: ${props.theme.palette.primary.main};
        color: ${props.theme.palette.primary.contrastText};
      }
    `}

  ${(props) =>
    props.color === "secondary" &&
    `
      background-color: transparent;
      color: ${props.theme.palette.primary.main};
      border: 1px solid ${props.theme.palette.primary.main};

      &:hover {
        box-shadow: ${props.theme.shadow.primaryHover};
        background-color: transparent;
      }

      &.Mui-disabled {
        background-color: transparent;
        color: ${props.theme.palette.primary.main};
      }

    `}

  .MuiButton-label {
    z-index: 1;
  }

  &.Mui-disabled {
    opacity: ${(props) => (props.fetchProgress ? 1 : 0.5)};
  }
`;

const StyledLoadingIconWrapper = styled.div`
  min-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: ${(props) => props.theme.palette.primary.main};
  border-radius: 28px;

  svg {
    color: ${(props) => props.theme.palette.primary.contrastText};
  }
`;

const StyledProgress = styled(BlSkeleton)`
  &.MuiSkeleton-root {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    background-color: ${(props) => props.theme.palette.primary.main};
    z-index: -1;
    border-radius: 28px;
  }
`;

export const BlButton: React.FunctionComponent<PrimaryButtonProps> = (
  props
) => {
  const { isLoading, fetchProgress, ...rest } = props;

  return (
    <StyledButton
      paddingLeftRight={props.paddingLeftRight}
      fetchProgress={fetchProgress}
      {...rest}
      color={props.color ?? "secondary"}
      variant={"contained"}
      disabled={rest.disabled || isLoading}
    >
      {isLoading && (
        <StyledLoadingIconWrapper>
          <CircularProgress size={18} />
        </StyledLoadingIconWrapper>
      )}
      {props.children}
      {!isNoU(fetchProgress) && <StyledProgress width={`${fetchProgress}%`} />}
    </StyledButton>
  );
};
