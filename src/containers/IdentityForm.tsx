import { BirthForm } from "../components/Identity/BirthForm";
import { PersonForm } from "../components/Identity/PersonForm";
import { useIdentityForm } from "../hooks/useIdentityForm";

export const IdentityForm = () => {
  const { isPersonFormValid } = useIdentityForm();

  return (
    <>
      <PersonForm />
      {isPersonFormValid && <BirthForm />}
    </>
  );
};
