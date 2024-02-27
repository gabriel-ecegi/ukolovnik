import { ApiCallError } from "Infrastructure/Models/Errors/ApiCallError";
import {
  useServerError,
  useResource,
  Resources,
} from "Infrastructure/Translations/Resources";
import { nameof } from "Infrastructure/Utils/ObjectUtils";
import { useEffect, useCallback, useRef } from "react";
import { FieldPath, FieldValues, UseFormReturn } from "react-hook-form";

type UseHandleErrorsProps<T extends FieldValues> = {
  form: UseFormReturn<T, any>;
  formKey: FieldPath<T>;
  error: Error | null | undefined;
  resource: Resource;
};

type Resource = {
  General: string;
  [key: string]: string;
};

const useHandleServerError = <T extends FieldValues>({
  error,
  resource,
  formKey: key,
  form,
}: UseHandleErrorsProps<T>) => {
  const wasErrorSetByServer = useRef(false);
  const { translateError } = useServerError(resource, resource.General);
  const { t } = useResource();
  const {
    setError,
    clearErrors,
    formState: { errors },
  } = form;

  const errorsKey = errors[key];

  const handleErrors = useCallback(() => {
    if (error && !errorsKey) {
      const message = transformMessage(translateError, t, error)!;

      setError(key, {
        type: "required",
        message,
      });
      wasErrorSetByServer.current = true;
      return;
    }

    if (!error && !!errorsKey && wasErrorSetByServer.current) {
      clearErrors(key);
      wasErrorSetByServer.current = false;
    }
  }, [error, setError, translateError, t, clearErrors, errorsKey, key]);

  useEffect(() => {
    handleErrors();
  }, [handleErrors]);
};

const transformMessage = (
  translateError: ReturnType<typeof useServerError>["translateError"],
  t: ReturnType<typeof useResource>["t"],
  error: Error
) => {
  if (!!error && error instanceof ApiCallError) {
    if (!!error.errors) {
      const firstError = Object.keys(error.errors)[0];
      console.log("firstError", firstError);

      if (!!firstError) {
        return translateError(firstError);
      }
    }

    if (error.status === 500) {
      return t(Resources.Errors.Error500);
    }
  }

  return translateError(nameof<Resource>("General") as string);
};

export default useHandleServerError;
