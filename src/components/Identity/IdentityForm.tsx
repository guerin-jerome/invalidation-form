import { BirthForm } from "./BirthForm";
import { PersonForm } from "./PersonForm";

export const IdentityForm = () => (
  <>
    <PersonForm />
    {true && <BirthForm />}
  </>
);
