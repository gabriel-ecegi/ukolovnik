import { Typography } from "@mui/material";
import { useResource, Resources } from "Infrastructure/Translations/Resources";
import { BlButton } from "Shared/Buttons/BlButton";
import { UnauthenticatedLayout } from "Shared/Layouts/UnauthenticatedLayout";
import { UnstyledLink } from "Shared/Routing/UnstyledLink";
import HomeIcon from "@mui/icons-material/Home";
import { FallbackProps } from "react-error-boundary";

export const ApplicationErrorPage: React.FunctionComponent<FallbackProps> = (
  props
) => {
  const { error } = props;
  const { t } = useResource();
  console.log("error", error);

  return (
    <UnauthenticatedLayout title={"Chyba"}>
      <Typography variant="h4">
        Je nám líto v aplikaci došlo k chybě.
      </Typography>
      <br />
      <Typography>
        Naši programátoři již o chybě byli informování a na opravě už pracují.
      </Typography>
      <br />

      <UnstyledLink to="/">
        <BlButton
          startIcon={<HomeIcon />}
          size="large"
          variant="contained"
          color="primary"
        >
          {t(Resources.Errors.ApplicationError.Home)}
        </BlButton>
      </UnstyledLink>

      <br />

      <Typography>Jste programátor? Koukněte v čem byla chyba.</Typography>

      <pre>
        <code>{JSON.stringify(error?.name)}</code>
      </pre>
      <pre>
        <code>{JSON.stringify(error?.message)}</code>
      </pre>
    </UnauthenticatedLayout>
  );
};
