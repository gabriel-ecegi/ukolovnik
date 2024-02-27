import { useUserInfoQuery } from "Auth/Api/Queries/useUserInfoQuery";
import { ApplicationErrorPage } from "Infrastructure/Pages/ApplicationErrorPage";
import { AppRouting, getPath } from "Infrastructure/Utils/UrlUtils";
import { Navigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

type Props = {};

export const UnauthenticatedRoute: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  // const { data, isLoading } = useUserInfoQuery();

  // if (isLoading) return <div />;

  // if (data?.status === 200) {
  //   return <Navigate to={getPath(AppRouting.Dashboard)} replace />;
  // }

  return (
    <ErrorBoundary FallbackComponent={ApplicationErrorPage}>
      {children}
    </ErrorBoundary>
  );
};
