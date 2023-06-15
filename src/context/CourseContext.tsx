import { createContext, useMemo, useState } from "react";
import {
  TCourseContext,
  TCourseInformation,
} from "../types/context/CourseContext";

const initialState: TCourseContext = {
  data: [],
  setData: function (data: TCourseInformation[]) {
    throw new Error("Function not implemented.");
  },
  inputs: [],
  setInputs: function (inputs: TCourseInformation[]) {
    throw new Error("Function not implemented.");
  },
};

const CourseReactContext = createContext<TCourseContext>(initialState);

export const CourseContext = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<TCourseInformation[]>([]);
  const [inputs, setInputs] = useState<TCourseInformation[]>([]);

  const stateContext = useMemo<TCourseContext>(
    () => ({
      data,
      setData,
      inputs,
      setInputs,
    }),
    []
  );

  return (
    <CourseReactContext.Provider value={stateContext}>
      {children}
    </CourseReactContext.Provider>
  );
};
