import { FormEvent, useState } from "react";
import { Input } from "../input/input";

import styles from "./styles.module.css";

type TFormEvent = FormEvent<HTMLFormElement>["target"];
type TFormElements = TFormEvent & {
  elements: {
    firstName: HTMLInputElement;
    lastName: HTMLInputElement;
  }
};

export const Form = () => {
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const onSubmitEvent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as TFormElements;

    setFirstNameError(target.elements.firstName.value.length < 3);
    setLastNameError(target.elements.lastName.value.length < 3);

    console.log(firstNameError, lastNameError)
  }

  return (
    <form
      className={styles['fullName']}
      onSubmit={onSubmitEvent}>
      <Input
        name="firstName"
        placeholder="First name..."
        errorMessage="First name is too short."
        errorShow={firstNameError} />
      <Input
        name="lastName"
        placeholder="Last name..."
        errorMessage="Last name is too short."
        errorShow={lastNameError} />
      <button
        className={styles['submitButton']}
        type="submit">Submit</button>
    </form>
  )
}