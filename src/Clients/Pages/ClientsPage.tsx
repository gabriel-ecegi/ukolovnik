import { Typography } from "@mui/material";
import { ClientsTable } from "Clients/Components/ClientsTable";
import { AuthenticatedLayout } from "Shared/Layouts/AuthenticatedLayout";

export const ClientsPage: React.FunctionComponent = () => {
  return (
    <AuthenticatedLayout title="Klienti">
      <Typography variant="h1">Klienti</Typography>
      <ClientsTable />
    </AuthenticatedLayout>
  );
};
