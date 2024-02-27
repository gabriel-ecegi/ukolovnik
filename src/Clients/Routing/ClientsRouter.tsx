import { ClientDetailPage } from "Clients/Pages/ClientDetailPage";
import { ClientsPage } from "Clients/Pages/ClientsPage";
import { Error404Page } from "Infrastructure/Pages/Error404Page";
import { AuthenticatedRoute } from "Infrastructure/Routing/AuthenticatedRoute";
import { getRoute, AppRouting } from "Infrastructure/Utils/UrlUtils";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: getRoute(AppRouting.Clients),
    element: (
      <AuthenticatedRoute>
        <ClientsPage />
      </AuthenticatedRoute>
    ),
  },
  {
    path: getRoute(AppRouting.ClientDetail),
    element: (
      <AuthenticatedRoute>
        <ClientDetailPage />
      </AuthenticatedRoute>
    ),
  },
  {
    path: "*",
    element: <Error404Page />,
  },
];

export const clientsRouter = createBrowserRouter(routes, {
  basename: "/remote-client-app",
});
