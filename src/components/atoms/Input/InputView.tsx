import styles from "./InputView.module.scss";

interface InputProps {
  type: string;
  textPlaceHolder: string;
  valueInput: string;
  handleChange: any;
  styleInput: any;
  error?: string;
  children?: React.ReactNode;
}

export const InputView = ({
  textPlaceHolder,
  valueInput,
  handleChange,
  styleInput,
  type,
  error,
  children,
}: InputProps) => {
  return (
    <div className={styles.position}>
      <div className={styles.container}>
        <input
          type={type}
          placeholder={textPlaceHolder}
          value={valueInput}
          onChange={handleChange}
          style={styleInput}
          className={styles.input}
        />
        <span className={styles.children}>{children}</span>
      </div>
      <span className={styles.error}>{error}</span>
    </div>
  );
};
