import { SignInForm } from "Auth/Components/SignInForm";
import { UnauthenticatedLayout } from "Shared/Layouts/UnauthenticatedLayout";

export const SignInPage: React.FunctionComponent = (_) => {
  return (
    <UnauthenticatedLayout title="Přihlášení ">
      <SignInForm />
    </UnauthenticatedLayout>
  );
};
