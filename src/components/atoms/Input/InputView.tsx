import styles from "./InputView.module.scss";

interface InputProps {
  type: string;
  textPlaceHolder: string;
  styleInput: any;
  error: any;
  register:any;
  htmlFor: string;
  children?: React.ReactNode;
}

export const InputView = ({
  textPlaceHolder,
  styleInput,
  type,
  error,
  children,
  register,
  htmlFor,
}: InputProps) => {

  console.log(register)

  return (
    <div className={styles.containerInputError}>
      <div className={styles.containerInput}>
        <input
          type={type}
          placeholder={textPlaceHolder}
          style={styleInput}
          className={styles.input}
          {...register(htmlFor)}
        />
        <span className={styles.children}>{children}</span>
      </div>
      <span className={styles.error}>{error}</span>
    </div>
  );
};
