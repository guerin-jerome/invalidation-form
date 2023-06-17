export type TPersonForm = {
  firstName: string;
  lastName: string;
};

export type TBirthValues = "Paris" | "Marseille" | "Lyon";

export type TBirthForm = {
  birthDate: Date;
  birthPlace: TBirthValues;
};
