import { useContext } from "react";
import { BirthForm, PersonForm } from "../components";
import { CourseReactContext } from "../context/CourseContext";

export const IdentityFormContainer = () => {
  const { data } = useContext(CourseReactContext);
  const { isPersonFormValid } = data;

  return (
    <>
      <PersonForm />
      {isPersonFormValid && <BirthForm />}
    </>
  );
};
