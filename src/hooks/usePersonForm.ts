import { useContext } from "react";
import { TUsePersonForm } from "../types/hooks/usePersonForm";
import { CourseReactContext } from "../context/CourseContext";
import { TCourseData } from "../types/context/CourseContext";

export const usePersonForm = (): TUsePersonForm => {
  const { setData } = useContext(CourseReactContext);

  const onSubmitPersonForm = () => {
    setData((currentData: TCourseData) => ({
      ...currentData,
      isPersonFormValid: true,
    }));
  };

  return { onSubmitPersonForm };
};
