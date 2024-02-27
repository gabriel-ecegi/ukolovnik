import { useEffect } from "react";
import { FieldErrors } from "react-hook-form";

const useScrollToError = (errors: FieldErrors) => {
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const firstErrorField = getFirstErrorField(errors);

      if (firstErrorField) {
        const firstErrorElement =
          document.querySelector(`[name="${firstErrorField}"]`) ??
          document.querySelector(`[data-name="${firstErrorField}"]`);

        if (firstErrorElement) {
          firstErrorElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }
    }
  }, [errors]);
};

function getFirstErrorField(
  errors: FieldErrors,
  parentPath = ""
): string | null {
  for (const key in errors) {
    // biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
    if (errors.hasOwnProperty(key)) {
      const error = errors[key];
      const currentPath = parentPath ? `${parentPath}.${key}` : key;
      if (typeof error === "object" && error !== null) {
        if (error.ref) {
          return currentPath;
        }
        const nestedPath = getFirstErrorField(
          error as FieldErrors,
          currentPath
        );
        if (nestedPath) {
          return nestedPath;
        }
      }
    }
  }
  return parentPath ?? null;
}

export default useScrollToError;
