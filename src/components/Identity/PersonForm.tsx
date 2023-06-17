import { useForm } from "react-hook-form";
import { TPersonForm } from "../../types/components/Identity";
import { usePersonForm } from "../../hooks/usePersonForm";
import { FIRST_NAME_LABEL, LAST_NAME_LABEL } from "./label";
import { useContext } from "react";
import { CourseReactContext } from "../../context/CourseContext";
import { VALIDATE_FORM_BUTTON_TEXT } from "../../common/label";

export const PersonForm = () => {
  const { onSubmitPersonForm } = usePersonForm();
  const { register, handleSubmit } = useForm<TPersonForm>({});
  const { data } = useContext(CourseReactContext);
  const { isPersonFormValid } = data;

  const firstNameInput = register("firstName");
  const lastNameInput = register("lastName");

  return (
    <>
      <h2>Person informations</h2>
      <form onSubmit={handleSubmit(onSubmitPersonForm)}>
        <label>
          {FIRST_NAME_LABEL}
          <input type="text" {...firstNameInput} />
        </label>

        <label>
          {LAST_NAME_LABEL}
          <input type="text" {...lastNameInput} />
        </label>

        {!isPersonFormValid && (
          <button type="submit">{VALIDATE_FORM_BUTTON_TEXT}</button>
        )}
      </form>
    </>
  );
};
