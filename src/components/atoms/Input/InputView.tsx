import styles from "./InputView.module.scss";

interface InputProps {
  type: string;
  textPlaceHolder: string;
  valueInputEmail: string;
  handleChangeEmail: any;
  valueInputPassword?: string;
  handleChangePassord?: any;
  styleInput: any;
  error: any;
  children?: React.ReactNode;
}

export const InputView = ({
  textPlaceHolder,
  valueInputEmail,
  handleChangeEmail,
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
          value={valueInputEmail}
          onChange={handleChangeEmail}
          style={styleInput}
          className={styles.input}
        />
        <span className={styles.children}>{children}</span>
      </div>
      <span className={styles.error}>{error}</span>
    </div>
  );
};
