import { VALIDATE_FORM_BUTTON_TEXT } from "./common/label";
import {
  BIRTH_DATE_LABEL,
  BIRTH_PLACE_LABEL,
  FIRST_NAME_LABEL,
  LAST_NAME_LABEL,
} from "./components/Identity/label";
import { SUCCESS_TEXT } from "./components/Success/label";
import { WORK_DETAILS_LABEL, WORK_NAME_LABEL } from "./components/Work/label";
import { CourseContext } from "./context/CourseContext";
import { Router } from "./routes/Router";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TBirthValues } from "./types/components/Identity";

const fillingAndValidatePersonFormScenario = async (
  firstNameValue: string,
  lastNameValue: string
) => {
  const firstNameInput = screen.getByRole("textbox", {
    name: FIRST_NAME_LABEL,
  });
  await userEvent.type(firstNameInput, firstNameValue);

  const lastNameInput = screen.getByRole("textbox", {
    name: LAST_NAME_LABEL,
  });
  await userEvent.type(lastNameInput, lastNameValue);

  const submitPersonFormButton = screen.getByRole("button", {
    name: VALIDATE_FORM_BUTTON_TEXT,
  });
  await userEvent.click(submitPersonFormButton);
};

const fillingAndValidateBirthFormScenario = async (
  birthDateValue: string,
  birthPlaceValue: TBirthValues
) => {
  const birthDateDatepicker = screen.getByLabelText(BIRTH_DATE_LABEL);
  await userEvent.type(birthDateDatepicker, birthDateValue);

  const birthPlaceSelect = screen.getByRole("combobox", {
    name: BIRTH_PLACE_LABEL,
  });
  await userEvent.selectOptions(birthPlaceSelect, birthPlaceValue);

  const submitBirthFormButton = screen.getByRole("button", {
    name: VALIDATE_FORM_BUTTON_TEXT,
  });
  await userEvent.click(submitBirthFormButton);
};

const fillingAndValidateWorkFormScenario = async (
  workNameValue: string,
  workDetailsValue: string
) => {
  const workNameInput = screen.getByRole("textbox", {
    name: WORK_NAME_LABEL,
  });
  await userEvent.type(workNameInput, workNameValue);

  const workDetailsInput = screen.getByRole("textbox", {
    name: WORK_DETAILS_LABEL,
  });
  await userEvent.type(workDetailsInput, workDetailsValue);

  const submitWorkFormButton = screen.getByRole("button", {
    name: VALIDATE_FORM_BUTTON_TEXT,
  });
  await userEvent.click(submitWorkFormButton);
};

describe("<App />", () => {
  it("should render all interactive parcours - nominal case", async () => {
    render(
      <CourseContext>
        <Router />
      </CourseContext>
    );

    expect(screen.queryByText(BIRTH_DATE_LABEL)).toBeNull();

    await fillingAndValidatePersonFormScenario("John", "Doe");

    expect(screen.queryByText(WORK_NAME_LABEL)).toBeNull();

    await fillingAndValidateBirthFormScenario("18/01/1999", "Paris");

    expect(screen.queryByText(SUCCESS_TEXT)).toBeNull();

    await fillingAndValidateWorkFormScenario(
      "Developer",
      "Fullstack developer since three years"
    );

    expect(screen.getByText(SUCCESS_TEXT)).toBeDefined();
  });
});
