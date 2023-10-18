import styles from "./InputView.module.scss";

interface InputProps {
  type: string;
  textPlaceHolder: string;
  styleInput: any;
  errors: any;
  register:any;
  htmlFor: string;
  validation?: any;
  children?: React.ReactNode;
}

export const InputView = ({
  textPlaceHolder,
  styleInput,
  type,
  errors,
  children,
  register,
  htmlFor,
  validation,
}: InputProps) => {

  return (
    <div className={styles.containerInputError}>
      <div className={styles.containerInput}>
        <input
          type={type}
          placeholder={textPlaceHolder}
          style={styleInput}
          className={styles.input}
          {...register(htmlFor, validation)}
        />
        <span className={styles.children}>{children}</span>
      </div>
      {errors?.message && <span className={styles.error}>{errors.message}</span>}
    </div>
  );
};
