import { Dispatch } from "react";

export type TCourseData = {
  isPersonFormValid: boolean;
  isBirthFormValid: boolean;
  isWorkFormValid: boolean;
};

export type TCourseInputs = {
  firstName: string;
  lastName: string;
  birthDate: Date;
  birthCity: string;
  work: string;
  workDetails: string;
};

export type TCourseContext = {
  data: TCourseData;
  setData: Dispatch<React.SetStateAction<TCourseData>>;
  inputs: TCourseInputs;
  setInputs: Dispatch<React.SetStateAction<TCourseInputs>>;
};
