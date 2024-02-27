import { ClickAwayListener, Grow, Popper } from "@mui/material";
import * as React from "react";
import styled from "@emotion/styled";
import { isNoU } from "Infrastructure/Utils/ObjectUtils";

type Props = {
  btnEl: JSX.Element;
  translateY?: number;
  noPadding?: boolean;
  isOpen?: boolean;
  onOpen?: () => void;
};

const StyledMenu = styled.div<{ translateY?: number; noPadding?: boolean }>`
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.colors.radioBtnDisabled};
  background-color: ${(props) => props.theme.palette.common.white};
  color: ${(props) => props.theme.palette.text.secondary};
  padding: ${(props) => (props.noPadding ? 0 : props.theme.spacing(1, 2))};
  transform: translateY(${(props) => props.translateY ?? 5}px) !important;
`;

export const BlPopper: React.FunctionComponent<
  React.PropsWithChildren<Props>
> = (props) => {
  const { btnEl, translateY, onOpen, noPadding } = props;

  const [isOpen, setIsOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    onOpen && !isOpen && onOpen();
    setIsOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current?.contains(event.target as HTMLElement)) {
      return;
    }

    setIsOpen(false);
  };

  React.useEffect(() => {
    if (!isNoU(props.isOpen)) {
      setIsOpen(!!props.isOpen);
    }
  }, [props.isOpen]);

  return (
    <div>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div onClick={handleToggle} ref={anchorRef}>
        {btnEl}
      </div>

      <Popper
        open={isOpen}
        anchorEl={anchorRef.current}
        placement={"bottom-end"}
        transition
        style={{ zIndex: 1100 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <StyledMenu translateY={translateY} noPadding={noPadding}>
              <ClickAwayListener onClickAway={(e) => handleClose(e)}>
                <div>{props.children}</div>
              </ClickAwayListener>
            </StyledMenu>
          </Grow>
        )}
      </Popper>
    </div>
  );
};
