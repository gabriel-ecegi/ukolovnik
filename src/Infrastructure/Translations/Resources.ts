import { ObjPathProxy, createProxy, getPath } from "ts-object-path";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { logError } from "Infrastructure/Utils/LoggingUtils";
import { ResourceDictionary } from "Infrastructure/Translations/ResourceDictionary";

export const Resources = createProxy<ResourceDictionary>();

export function getResourcePath(
  proxy: ObjPathProxy<ResourceDictionary, string>
): string {
  const path = getPath(proxy);

  if (!path || path.length === 0) return "";
  if (path.length === 1) return path[0].toString();
  return `${path[0].toString()}:${path.slice(1).join(".")}`;
}

export function useResource() {
  const { t: i18Translation } = useTranslation();

  return {
    t: (
      resourcePath: ObjPathProxy<ResourceDictionary, string>,
      options?: any
    ) =>
      i18Translation(
        getResourcePath(resourcePath),
        options
      ) as unknown as string,
  };
}

export function useServerError(
  parentObject: ObjPathProxy<ResourceDictionary, object>,
  fallbackProperty: ObjPathProxy<ResourceDictionary, string>
) {
  const { t } = useResource();
  return {
    translateError: (code: string | null | undefined) => {
      if (!code) {
        return null;
      }

      const newCode = `${getResourcePath(parentObject as any)}.${code}`;

      const isCodeTranslated = i18next.exists(newCode);

      if (!isCodeTranslated) {
        console.log(`Not found serverError translation for ${newCode}`);
        logError(
          new Error(`Not found serverError translation for ${newCode}`),
          null,
          false
        );
      }

      const resource = isCodeTranslated
        ? i18next.t(newCode)
        : t(fallbackProperty);

      return resource as string;
    },
  };
}

export function getTranslation(
  resourcePath: ObjPathProxy<ResourceDictionary, string>
) {
  return i18next.t(getResourcePath(resourcePath));
}
