import { TWorkForm } from "../components/Work";

export type TUseWorkForm = {
  onSubmitWorkForm: (workForm: TWorkForm) => void;
  onClickGoBack: () => void;
};
