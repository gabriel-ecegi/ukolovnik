import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { BlTooltip } from "Shared/BlTooltip";
import { CircularProgress, TooltipProps } from "@mui/material";
import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";

export type DefaultButtonProps = Omit<ButtonProps, "title"> & {
  title?: string | JSX.Element;
  placement?: TooltipProps["placement"];
  tooltipColor?: {
    background: string;
    text: string;
  };
  isSquare?: boolean;
  isLoading?: boolean;
};

const StyledButton = styled(Button, { shouldForwardProp: isPropValid })<{
  $isSquare: boolean;
}>`
  min-width: 0;
  ${(props) => props.$isSquare && "aspect-ratio: 1;"}

  &.Mui-disabled {
    opacity: 0.5;
  }
`;

export const BlDefaultButton: React.FunctionComponent<DefaultButtonProps> = (
  props
) => {
  const { title, tooltipColor, isSquare, isLoading, ...rest } = props;
  const t = title || "";

  return (
    <>
      {t ? (
        <BlTooltip
          title={t}
          placement={props.placement ?? "top"}
          tooltipColor={tooltipColor}
        >
          <div>
            <StyledButton
              {...rest}
              children={
                isLoading ? <CircularProgress size={18} /> : props.children
              }
              color={props.color ?? "primary"}
              $isSquare={isSquare ?? false}
            />
          </div>
        </BlTooltip>
      ) : (
        <div>
          <StyledButton
            {...rest}
            children={
              isLoading ? <CircularProgress size={18} /> : props.children
            }
            color={props.color ?? "primary"}
            $isSquare={isSquare ?? false}
          />
        </div>
      )}
    </>
  );
};
