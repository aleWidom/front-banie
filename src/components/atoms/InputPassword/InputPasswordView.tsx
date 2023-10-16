import styles from "./InputPasswordView.module.scss";

interface InputProps {
  type: string;
  textPlaceHolder: string;
  valueInputPassword: string;
  handleChangePassword: any;
  styleInput: any;
  error?: string;
  children?: React.ReactNode;
}

export const InputPasswordView = ({
  textPlaceHolder,
  valueInputPassword,
  handleChangePassword,
  styleInput,
  type,
  error,
  children,
}: InputProps) => {
  return (
    <div className={styles.containerInputError}>
      <div className={styles.containerInput}>
        <input
          type={type}
          placeholder={textPlaceHolder}
          value={valueInputPassword}
          onChange={handleChangePassword}
          style={styleInput}
          className={styles.input}
        />
        <span className={styles.children}>{children}</span>
      </div>
      <span className={styles.error}>{error}</span>
    </div>
  );
};
