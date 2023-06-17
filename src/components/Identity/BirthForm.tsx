import { useForm } from "react-hook-form";
import { TBirthForm } from "../../types/components/Identity";
import { useBirthForm } from "../../hooks/useBirthForm";
import { BIRTH_DATE_LABEL, BIRTH_PLACE_LABEL } from "./label";
import { VALIDATE_FORM_BUTTON_TEXT } from "../../common/label";

export const BirthForm = () => {
  const { onSubmitBirthForm } = useBirthForm();
  const { register, handleSubmit } = useForm<TBirthForm>({});

  const birthDateInput = register("birthDate");
  const birthPlaceInput = register("birthPlace");

  return (
    <>
      <h2>Birth informations</h2>
      <form onSubmit={handleSubmit(onSubmitBirthForm)}>
        <label>
          {BIRTH_DATE_LABEL}
          <input type="date" {...birthDateInput} />
        </label>

        <label>
          {BIRTH_PLACE_LABEL}
          <select {...birthPlaceInput}>
            <option value="paris">Paris</option>
            <option value="marseille">Marseille</option>
            <option value="lyon">Lyon</option>
          </select>
        </label>

        <button type="submit">{VALIDATE_FORM_BUTTON_TEXT}</button>
      </form>
    </>
  );
};
