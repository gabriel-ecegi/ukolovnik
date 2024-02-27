import { BlButton } from "Shared/Buttons/BlButton";
import { BlDefaultButton } from "Shared/Buttons/BlDefaultButton";
import { BlConfirmDialog } from "Shared/Dialogs/BlConfirmDialog";
import { PropsWithChildren, useState } from "react";

type Props = {
  tooltip?: string | JSX.Element;
  modalTitle: string | JSX.Element;
  modalContent: string | JSX.Element;
  onResult: (result: boolean) => void;
  confirmButtonText?: string;
  disabled?: boolean;
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "default" | "error" | "warning";
};

export const BlConfirmButton: React.FunctionComponent<
  PropsWithChildren<Props>
> = (props) => {
  const {
    onResult,
    tooltip,
    modalContent,
    modalTitle,
    children,
    disabled,
    confirmButtonText,
    isLoading,
  } = props;
  const variant = props.variant ?? "default";

  const [isOpen, setIsOpen] = useState(false);

  const handleResult = (result: boolean) => {
    setIsOpen(false);
    onResult(result);
  };

  return (
    <>
      {variant === "default" ? (
        <BlDefaultButton
          title={tooltip}
          disabled={disabled}
          isLoading={isLoading}
          onClick={() => setIsOpen(true)}
        >
          {children}
        </BlDefaultButton>
      ) : (
        <BlButton
          color={variant}
          disabled={disabled}
          isLoading={isLoading}
          onClick={() => setIsOpen(true)}
        >
          {children}
        </BlButton>
      )}

      <BlConfirmDialog
        isOpen={isOpen}
        handleResult={handleResult}
        modalContent={modalContent}
        modalTitle={modalTitle}
        confirmButtonText={confirmButtonText}
      />
    </>
  );
};
