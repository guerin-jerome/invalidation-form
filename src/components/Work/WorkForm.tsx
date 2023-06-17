import { useForm } from "react-hook-form";
import { TWorkForm } from "../../types/components/Work";
import { useWorkForm } from "../../hooks/useWorkForm";
import { WORK_DETAILS_LABEL, WORK_NAME_LABEL } from "./label";
import { VALIDATE_FORM_BUTTON_TEXT } from "../../common/label";
import { useContext } from "react";
import { CourseReactContext } from "../../context/CourseContext";

export const WorkForm = () => {
  const { onSubmitWorkForm } = useWorkForm();
  const { register, handleSubmit } = useForm<TWorkForm>({});
  const { data } = useContext(CourseReactContext);
  const { isWorkFormValid } = data;

  const workInput = register("work");
  const workDetailsInput = register("workDetails");

  return (
    <>
      <h2>Work informations</h2>
      <form onSubmit={handleSubmit(onSubmitWorkForm)}>
        <label>
          {WORK_NAME_LABEL}
          <input type="text" {...workInput} />
        </label>

        <label>
          {WORK_DETAILS_LABEL}
          <textarea {...workDetailsInput} rows={5} cols={33} />
        </label>

        {!isWorkFormValid && (
          <button type="submit">{VALIDATE_FORM_BUTTON_TEXT}</button>
        )}
      </form>
    </>
  );
};
