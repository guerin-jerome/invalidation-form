import { useContext } from "react";
import { CourseReactContext } from "../context/CourseContext";
import { TCourseData } from "../types/context/CourseContext";
import { TUseWorkForm } from "../types/hooks/useWorkForm";

export const useWorkForm = (): TUseWorkForm => {
  const { setData } = useContext(CourseReactContext);

  const onSubmitWorkForm = () => {
    setData((currentData: TCourseData) => ({
      ...currentData,
      isWorkFormValid: true,
    }));
  };

  return { onSubmitWorkForm };
};
