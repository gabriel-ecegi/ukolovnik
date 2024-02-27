import * as React from "react";
import { Box, Typography } from "@mui/material";
import { UnauthenticatedLayout } from "Shared/Layouts/UnauthenticatedLayout";
import { Resources, useResource } from "Infrastructure/Translations/Resources";
import { BlButton } from "Shared/Buttons/BlButton";
import { UnstyledLink } from "Shared/Routing/UnstyledLink";
import { useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export const Error404Page: React.FunctionComponent = (_) => {
  const location = useLocation();

  const { t } = useResource();

  return (
    <UnauthenticatedLayout title={"404"}>
      <Box>
        <Typography variant="h1" mb={2}>
          Error 404
        </Typography>
        <Typography variant="h6" mb={2}>
          {location.pathname}
        </Typography>
        <Typography variant="h2" mb={2}>
          {t(Resources.Errors.Error404.Subtitle)}
        </Typography>
        <UnstyledLink to="/">
          <BlButton
            startIcon={<HomeIcon />}
            size="large"
            variant="contained"
            color="primary"
          >
            {t(Resources.Errors.Error404.Home)}
          </BlButton>
        </UnstyledLink>
      </Box>
    </UnauthenticatedLayout>
  );
};
