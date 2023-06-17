import { Dispatch } from "react";
import { TBirthForm, TPersonForm } from "../components/Identity";
import { TWorkForm } from "../components/Work";

export type TCourseData = {
  isPersonFormValid: boolean;
  isBirthFormValid: boolean;
  isWorkFormValid: boolean;
};

export type TCourseInputs = TPersonForm & TBirthForm & TWorkForm;

export type TCourseContext = {
  data: TCourseData;
  setData: Dispatch<React.SetStateAction<TCourseData>>;
  inputs: TCourseInputs;
  setInputs: Dispatch<React.SetStateAction<TCourseInputs>>;
};
