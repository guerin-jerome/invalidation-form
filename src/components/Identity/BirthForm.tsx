import { useForm } from "react-hook-form";
import { TBirthForm } from "../../types/components/Identity";
import { useBirthForm } from "../../hooks/useBirthForm";

export const BirthForm = () => {
  const { onSubmitBirthForm } = useBirthForm();
  const { register, handleSubmit } = useForm<TBirthForm>({});

  const birthDateInput = register("birthDate");
  const birthCityInput = register("birthCity");

  return (
    <>
      <h2>Birth informations</h2>
      <form onSubmit={handleSubmit(onSubmitBirthForm)}>
        <label>
          Date
          <input type="date" {...birthDateInput} />
        </label>

        <label>
          City
          <select {...birthCityInput}>
            <option value="paris">Paris</option>
            <option value="marseille">Marseille</option>
            <option value="lyon">Lyon</option>
          </select>
        </label>

        <button type="submit">Validate</button>
      </form>
    </>
  );
};
