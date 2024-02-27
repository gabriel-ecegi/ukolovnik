import { DashboardPage } from "Dashboard/Pages/DashboardPage";
import { Error403Page } from "Infrastructure/Pages/Error403Page";
import { Error404Page } from "Infrastructure/Pages/Error404Page";
import { AppRouting, getRoute } from "Infrastructure/Utils/UrlUtils";
import { createBrowserRouter } from "react-router-dom";
import { ClientDetailPage } from "Clients/Pages/ClientDetailPage";
import { ClientsPage } from "Clients/Pages/ClientsPage";
import { TasksPage } from "Tasks/Pages/TasksPage";

const appRoutes = [
  {
    path: getRoute(AppRouting.Dashboard),
    element: <DashboardPage />,
  },
  {
    path: getRoute(AppRouting.Clients),
    element: <ClientsPage />,
  },
  {
    path: getRoute(AppRouting.ClientDetail),
    element: <ClientDetailPage />,
  },
  {
    path: getRoute(AppRouting.Error403),
    element: <Error403Page />,
  },
  {
    path: getRoute(AppRouting.Tasks),
    element: <TasksPage />,
  },
  {
    path: "*",
    element: <Error404Page />,
  },
];

export const appRouter = createBrowserRouter(appRoutes, {
  basename: import.meta.env.VITE_BASE_URL,
});
