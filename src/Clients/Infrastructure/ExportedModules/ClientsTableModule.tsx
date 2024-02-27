import { clientsRouter } from "Clients/Routing/ClientsRouter";
import { AppBootstrapper } from "Infrastructure/Configuration/AppBootstrapper";
import { AuthenticatedLayoutContext } from "Shared/Layouts/AuthenticatedLayout";
import { RouterProvider } from "react-router-dom";

export const ClientsTableModule: React.FunctionComponent = () => {
  return (
    <AppBootstrapper>
      <AuthenticatedLayoutContext.Provider value={{ isMenuShown: false }}>
        <RouterProvider router={clientsRouter} />
      </AuthenticatedLayoutContext.Provider>
    </AppBootstrapper>
  );
};

export default ClientsTableModule;
