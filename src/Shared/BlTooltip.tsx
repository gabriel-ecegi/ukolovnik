import * as React from "react";
import Tooltip, { TooltipProps } from "@mui/material/Tooltip";
import { useTheme } from "@mui/material/styles";
import { css } from "@emotion/react";

type Props = TooltipProps & {
  tooltipColor?: {
    background: string;
    text: string;
  };
};

// Emotion Styled Tooltip
const StyledTooltip = ({ tooltipColor, ...props }: Props) => {
  const theme = useTheme(); // Using MUI's theme
  const customStyle = css`
    .MuiTooltip-tooltip {
      padding: ${theme.spacing(1, 1.5)};
      font-size: "12px";
      font-weight: 400;
      background-color: ${tooltipColor?.background ?? theme.colors.darkGrey};
      color: ${tooltipColor?.text ?? theme.palette.common.white};
      & * {
        font-size: 12px;
      }
      margin-bottom: ${props.placement?.startsWith("top")
        ? "4px !important"
        : ""};
      margin-left: ${props.placement === "top-start" ? "5px !important" : ""};
    }
  `;

  return <Tooltip {...props} css={customStyle} />;
};

export const BlTooltip: React.FunctionComponent<Props> = (props) => {
  return <StyledTooltip {...props} />;
};
