// import { captureException } from "@sentry/react";

const logError = (
  error?: Error,
  additionalInfo?: any,
  _isUserDialogShown = true
) => {
  // captureException(error, {
  //   extra: {
  //     additionalInfo: additionalInfo,
  //     doNotShowDialog: !isUserDialogShown,
  //   },
  // });
  console.error(error, additionalInfo);
};

export { logError };
