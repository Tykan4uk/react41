import styles from "./styles.module.css";

interface InputProps {
  name: string,
  placeholder: string,
  errorMessage: string,
  errorShow: boolean
}

export const Input = ({ name, placeholder, errorMessage, errorShow }: InputProps) => {
  return (
    <>
      <input className={styles['inputField']}
        type="text"
        name={name}
        placeholder={placeholder} />
      {errorShow && <span className={styles['error']}>{errorMessage}</span>}
    </>
  )
}