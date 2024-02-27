import { ClientDetail } from "Clients/Components/ClientDetail";
import { AuthenticatedLayout } from "Shared/Layouts/AuthenticatedLayout";
import { useParams } from "react-router-dom";

export const ClientDetailPage: React.FunctionComponent = () => {
  //get id from url

  const params = useParams();

  const id = Number(params.id);
  console.log(id);

  if (Number.isNaN(id)) {
    return <>V url chybí ID klienta</>;
  }

  return (
    <AuthenticatedLayout title="Detail klienta">
      <ClientDetail id={id} />
    </AuthenticatedLayout>
  );
};
