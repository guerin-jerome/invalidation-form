import { IdentityForm } from "./Identity/IdentityForm";
import { WorkForm } from "./Work/WorkForm";

export const Course = () => (
  <>
    <h1>Course</h1>
    <IdentityForm />
    {true && <WorkForm />}
  </>
);
