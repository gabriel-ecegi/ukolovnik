import { FunctionComponent, PropsWithChildren, useEffect } from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useResource, Resources } from "Infrastructure/Translations/Resources";

const Layout = styled(Box)`
  margin-top: ${(props) => props.theme.spacing(10)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type Props = { title: string };

export const UnauthenticatedLayout: FunctionComponent<
  PropsWithChildren<Props>
> = (props) => {
  const { title, children } = props;

  const { t } = useResource();

  useEffect(() => {
    document.title = `${title} | ${t(Resources.Common.AppName)}`;
  }, [title, t]);

  return <Layout>{children}</Layout>;
};
