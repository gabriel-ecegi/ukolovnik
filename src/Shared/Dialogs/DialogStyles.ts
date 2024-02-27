import { Dialog } from "@mui/material";
import styled from "@emotion/styled";

export const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    width: 90%;
    max-width: 550px;
    border-radius: 32px;
    padding: ${(props) => props.theme.spacing(2.4)};
    background-color: ${(props) => props.theme.colors.gray};
    box-shadow: none;
    border: 1px solid ${(props) => props.theme.colors.border};
  }

  .MuiDialogTitle-root {
    padding: 0;
    padding-bottom: ${(props) => props.theme.spacing(1)};
  }

  .MuiDialogContent-root {
    padding: ${(props) => props.theme.spacing(1, 0)};
  }

  .MuiDialogActions-root {
    padding: 0;
    padding-top: ${(props) => props.theme.spacing(1)};

    & > * {
      margin: 0;
      margin-right: ${(props) => props.theme.spacing(1.5)};

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
