import { Typography } from "@mui/material";
import { useClientDetailQuery } from "Clients/Api/Queries/useClientDetailQuery";
import { UnstyledLink } from "Shared/Routing/UnstyledLink";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AppRouting, getPath } from "Infrastructure/Utils/UrlUtils";
type Props = { id: number };

export const ClientDetail: React.FunctionComponent<Props> = (props) => {
  const { id } = props;

  const { data, isLoading, error } = useClientDetailQuery(id);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (!data?.data || !!error) {
    return <>Client nenalezen: {error?.message}</>;
  }

  return (
    <>
      <UnstyledLink to={getPath(AppRouting.Clients)}>
        <ArrowBackIcon />
      </UnstyledLink>
      <div>
        <Typography variant="h1">{data?.data.name}</Typography>
        <Typography>{data?.data.email}</Typography>
        <Typography>{data?.data.phone}</Typography>
        <Typography>{data?.data.address}</Typography>
      </div>
    </>
  );
};
