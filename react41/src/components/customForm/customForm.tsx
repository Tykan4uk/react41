import { Input } from "../input/input";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";

import styles from "./styles.module.css";

export interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const initialValues: IFormValues = {
  firstName: "",
  lastName: "",
  email: ""
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Name must be more than one letter.")
    .max(32, "Too long name. Sorry, change your name."),
  lastName: Yup.string()
    .min(2, "Surname must be more than one letter.")
    .max(32, "Too long surname. Sorry, change your name."),
  email: Yup.string().email("Incorrect email.")
});

export const CustomForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={true}
      validateOnChange={false}
      onSubmit={() => { console.log() }}
      className={styles['registration']}>
      {() => {
        return (
          <Form>
            <Input
              name="firstName"
              label="First name">
              <Field name="firstName" className={styles['inputField']} />
            </Input>
            <Input
              name="lastName"
              label="Last name">
              <Field name="lastName" className={styles['inputField']} />
            </Input>
            <Input
              name="email"
              label="Email">
              <Field name="email" className={styles['inputField']} />
            </Input>
            <button
              className={styles['submitButton']}
              type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  )
}