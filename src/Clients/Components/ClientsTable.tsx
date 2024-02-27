import { Box } from "@mui/material";
import { useClientsQuery } from "Clients/Api/Queries/useClientsQuery";
import { BlDataTable } from "Shared/DataTable/BlDataTable";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { AppRouting, getPath } from "Infrastructure/Utils/UrlUtils";
import { UnstyledLink } from "Shared/Routing/UnstyledLink";
import { ExpandArrowIcon } from "Shared/Icons";
import { BlDefaultButton } from "Shared/Buttons/BlDefaultButton";
import { ClientDto } from "Infrastructure/Api/Api";

const StyledButton = styled(BlDefaultButton)`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;

  svg {
    color: ${(props) => props.theme.palette.text.secondary};
    width: 12px;
    height: auto;
    transform: rotate(-90deg);
  }
`;

const StyledCell = styled(Box)``;

type Props = {};

export const ClientsTable: React.FunctionComponent<Props> = () => {
  const { data, isLoading } = useClientsQuery();

  const clients: ClientDto[] = data?.data || [];
  const navigate = useNavigate();

  return (
    <>
      <BlDataTable
        rows={clients.map((x) => ({ data: x }))}
        rowEntityID="id"
        isLoading={isLoading}
        columns={[
          { id: "id", label: "ID" },
          { id: "name", label: "Name" },
          { id: "email", label: "Email" },
          { id: "phone", label: "Phone" },
          { id: "address", label: "Address" },
          { id: "action", label: "", maxWidth: 0, justifySelf: "flex-end" },
        ]}
        getHeaderCell={(column) => <div>{column.label ?? column.id}</div>}
        rowsPerPage={5}
        onRowClick={(row) => {
          navigate(getPath(AppRouting.ClientDetail, row.id));
        }}
        getCell={(id, data) => {
          switch (id) {
            case "id":
              return <StyledCell>{data.id}</StyledCell>;
            case "name":
              return <StyledCell>{data.name}</StyledCell>;
            case "email":
              return <StyledCell>{data.email}</StyledCell>;
            case "phone":
              return <StyledCell>{data.phone}</StyledCell>;
            case "address":
              return <StyledCell>{data.address}</StyledCell>;
            case "action":
              return (
                <StyledCell>
                  <UnstyledLink to={getPath(AppRouting.ClientDetail, data.id)}>
                    <StyledButton>
                      <ExpandArrowIcon />
                    </StyledButton>
                  </UnstyledLink>
                </StyledCell>
              );
            default:
              return <StyledCell>{data[id as keyof ClientDto]}</StyledCell>;
          }
        }}
      />
    </>
  );
};

export default ClientsTable;
