import { useForm } from "react-hook-form";
import { TWorkForm } from "../../types/components/Work";
import { useWorkForm } from "../../hooks/useWorkForm";

export const WorkForm = () => {
  const { onSubmitWorkForm } = useWorkForm();
  const { register, handleSubmit } = useForm<TWorkForm>({});

  const workInput = register("work");
  const workDetailsInput = register("workDetails");

  return (
    <>
      <h2>Work informations</h2>
      <form onSubmit={handleSubmit(onSubmitWorkForm)}>
        <label>
          Denomination
          <input type="text" {...workInput} />
        </label>

        <label>
          Details
          <textarea {...workDetailsInput} rows={5} cols={33} />
        </label>

        <button type="submit">Validate</button>
      </form>
    </>
  );
};
