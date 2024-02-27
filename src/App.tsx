import { RouterProvider } from "react-router-dom";
import { appRouter } from "./Infrastructure/Routing/AppRouter";
import { AppBootstrapper } from "Infrastructure/Configuration/AppBootstrapper";
import { AuthenticatedLayoutContext } from "Shared/Layouts/AuthenticatedLayout";

function App() {
  return (
    <AppBootstrapper>
      <AuthenticatedLayoutContext.Provider value={{ isMenuShown: true }}>
        <RouterProvider router={appRouter} />
      </AuthenticatedLayoutContext.Provider>
    </AppBootstrapper>
  );
}

export default App;
