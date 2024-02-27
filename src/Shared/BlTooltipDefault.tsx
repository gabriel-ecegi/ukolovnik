import { TooltipProps } from "@mui/material/Tooltip";
import { BlTooltip } from "Shared/BlTooltip";
import { InfoIcon } from "Shared/Icons";
import * as React from "react";
import styled from "@emotion/styled";

type Props = Omit<TooltipProps, "children"> & {
  tooltipColor?: {
    background: string;
    text: string;
  };
};

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 16px;
    height: auto;
  }
`;

export const BlDefaultTooltip: React.FunctionComponent<Props> = (props) => {
  return (
    <BlTooltip {...props}>
      <StyledIcon>
        <InfoIcon />
      </StyledIcon>
    </BlTooltip>
  );
};
