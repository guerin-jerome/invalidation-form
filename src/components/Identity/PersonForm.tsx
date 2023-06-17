import { useForm } from "react-hook-form";
import { TPersonForm } from "../../types/components/Identity";
import { usePersonForm } from "../../hooks/usePersonForm";

export const PersonForm = () => {
  const { onSubmitPersonForm } = usePersonForm();
  const { register, handleSubmit } = useForm<TPersonForm>({});

  const firstNameInput = register("firstName");
  const lastNameInput = register("lastName");

  return (
    <>
      <h2>Person informations</h2>
      <form onSubmit={handleSubmit(onSubmitPersonForm)}>
        <label>
          First Name
          <input type="text" {...firstNameInput} />
        </label>

        <label>
          Last Name
          <input type="text" {...lastNameInput} />
        </label>

        <button type="submit">Validate</button>
      </form>
    </>
  );
};
