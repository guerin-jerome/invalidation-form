export type TCourseInformation = Record<string, string | Date>;

export type TCourseContext = {
  data: TCourseInformation[];
  setData: (data: TCourseInformation[]) => void;
  inputs: TCourseInformation[];
  setInputs: (inputs: TCourseInformation[]) => void;
};
