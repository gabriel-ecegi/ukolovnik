import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { Resources, useResource } from "Infrastructure/Translations/Resources";
import { BlButton } from "Shared/Buttons/BlButton";
import { StyledDialog } from "Shared/Dialogs/DialogStyles";

type Props = {
  isOpen: boolean;
  handleResult: (result: boolean) => void;
  modalTitle: string | JSX.Element;
  modalContent: string | JSX.Element;
  confirmButtonText?: string;
};

export const BlConfirmDialog: React.FunctionComponent<Props> = (props) => {
  const { t } = useResource();
  const { modalContent, modalTitle, confirmButtonText, handleResult, isOpen } =
    props;

  return (
    <StyledDialog open={isOpen} onClose={() => handleResult(false)}>
      <DialogTitle variant="h2">{modalTitle}</DialogTitle>

      <DialogContent dividers>{modalContent}</DialogContent>

      <DialogActions>
        <BlButton onClick={() => handleResult(false)}>
          {t(Resources.Common.Cancel)}
        </BlButton>
        <BlButton color="primary" onClick={() => handleResult(true)}>
          {confirmButtonText ?? t(Resources.Common.Confirm)}
        </BlButton>
      </DialogActions>
    </StyledDialog>
  );
};
