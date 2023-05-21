import { ReactNode } from "react";
import { ErrorMessage, useFormikContext } from "formik";
import { IFormValues } from "../customForm/customForm";

import styles from "./styles.module.css";

interface InputProps {
  name: keyof IFormValues,
  label: string,
  children: ReactNode
}

export const Input = ({ name, label, children }: InputProps) => {
  const { errors } = useFormikContext<IFormValues>();
  const isValid = !errors[name];

  return (
    <>
      <div className={styles[isValid ? "validBorder" : "invalidBorder"]}>
        <label className={styles["label"]}>{label}</label>
        {children}
      </div >
      <ErrorMessage
        name={name}
        component="div"
        className={styles["error"]}
      />
    </>
  )
}