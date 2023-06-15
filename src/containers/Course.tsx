import { WorkForm } from "../components/Work/WorkForm";
import { IdentityForm } from "./IdentityForm";

export const Course = () => {
  return (
    <>
      <h1>Course</h1>
      <IdentityForm />
      {false && <WorkForm />}
    </>
  );
};
