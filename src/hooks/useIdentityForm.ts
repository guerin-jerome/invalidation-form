import { useContext } from "react";
import { CourseReactContext } from "../context/CourseContext";

export const useIdentityForm = () => {
  const { data } = useContext(CourseReactContext);
  const { isPersonFormValid } = data;

  return { isPersonFormValid };
};
