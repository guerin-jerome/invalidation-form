import { createContext, useMemo, useState } from "react";
import {
  TCourseContext,
  TCourseData,
  TCourseInputs,
} from "../types/context/CourseContext";

const initialData = {
  isPersonFormValid: false,
  isBirthFormValid: false,
  isWorkFormValid: false,
};

const initialInputs = {
  firstName: "",
  lastName: "",
  birthDate: new Date(),
  birthCity: "",
  work: "",
  workDetails: "",
};

const initialState: TCourseContext = {
  data: { ...initialData },
  setData: () => {},
  inputs: { ...initialInputs },
  setInputs: () => {},
};

export const CourseReactContext = createContext<TCourseContext>(initialState);

export const CourseContext = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<TCourseData>({ ...initialData });
  const [inputs, setInputs] = useState<TCourseInputs>({ ...initialInputs });

  const stateContext = {
    data,
    setData,
    inputs,
    setInputs,
  };

  return (
    <CourseReactContext.Provider value={stateContext}>
      {children}
    </CourseReactContext.Provider>
  );
};
