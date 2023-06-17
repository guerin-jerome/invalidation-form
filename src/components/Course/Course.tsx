import { PropsWithChildren } from "react";

export const Course = ({ children }: PropsWithChildren) => {
  return (
    <>
      <h1>Course</h1>
      {children}
    </>
  );
};
