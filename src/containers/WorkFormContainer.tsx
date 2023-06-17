import { useContext } from "react";
import { WorkForm, Success } from "../components";
import { CourseReactContext } from "../context/CourseContext";

export const WorkFormContainer = () => {
  const { data } = useContext(CourseReactContext);
  const { isWorkFormValid } = data;

  return (
    <>
      <WorkForm />
      {isWorkFormValid && <Success />}
    </>
  );
};
