import { Modal, Typography } from "@mui/material";
import * as React from "react";
import styled from "@emotion/styled";

type Props = {
  title: string;
  handleClose: () => void;
};

const StyledModal = styled(Modal)`
  display: grid;
  justify-content: center;
  align-items: center;

  & > div {
    &:first-of-type {
      background-color: rgba(255, 255, 255, 0.9) !important;
    }
  }
`;

const StyledBody = styled.div`
  outline: none;
`;

export const BlModal: React.FunctionComponent<
  React.PropsWithChildren<Props>
> = (props) => {
  return (
    <StyledModal open={true} onClose={props.handleClose}>
      <StyledBody>
        <Typography variant={"h2"}>{props.title}</Typography>
        {props.children}
      </StyledBody>
    </StyledModal>
  );
};
