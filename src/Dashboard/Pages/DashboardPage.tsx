import { Grid, Typography } from "@mui/material";
import { ClientsTable } from "Clients/Components/ClientsTable";
import { AuthenticatedLayout } from "Shared/Layouts/AuthenticatedLayout";

export const DashboardPage: React.FunctionComponent = (_) => {
  return (
    <AuthenticatedLayout title="Dashboard">
      <Typography variant="h1">Dashboard</Typography>

      <Grid container>
        <Grid item xs={7}>
          <ClientsTable />
        </Grid>
      </Grid>
    </AuthenticatedLayout>
  );
};
