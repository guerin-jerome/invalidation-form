import { useContext } from "react";
import { CourseReactContext } from "../context/CourseContext";
import { TCourseData } from "../types/context/CourseContext";
import { TUseWorkForm } from "../types/hooks/useWorkForm";
import { useNavigate } from "react-router-dom";
import { HOME_PAGE } from "../routes/Router";

export const useWorkForm = (): TUseWorkForm => {
  const navigate = useNavigate();
  const { setData } = useContext(CourseReactContext);

  const onClickGoBack = () => navigate(HOME_PAGE);

  const onSubmitWorkForm = () => {
    setData((currentData: TCourseData) => ({
      ...currentData,
      isWorkFormValid: true,
    }));
  };

  return { onClickGoBack, onSubmitWorkForm };
};
