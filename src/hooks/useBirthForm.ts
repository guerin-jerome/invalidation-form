import { useNavigate } from "react-router-dom";
import { WORK_PAGE } from "../routes/Router";
import { TUseBirthForm } from "../types/hooks/useBirthForm";

export const useBirthForm = (): TUseBirthForm => {
  const navigate = useNavigate();

  const onSubmitBirthForm = () => navigate(WORK_PAGE);

  return { onSubmitBirthForm };
};
