import { ErrorBoundary } from "react-error-boundary";
import { ApplicationErrorPage } from "Infrastructure/Pages/ApplicationErrorPage";

type Props = {};

export const AuthenticatedRoute: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  // const { data, isLoading } = useUserInfoQuery();

  // if (isLoading) return <div />;

  // if (data?.status === 401) {
  //   return <Navigate to={getPath(AppRouting.SignIn)} replace />;
  // }

  return (
    <ErrorBoundary FallbackComponent={ApplicationErrorPage}>
      {children}
    </ErrorBoundary>
  );
};
