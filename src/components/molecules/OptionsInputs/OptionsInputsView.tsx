import styles from "./OptionsInputsView.module.scss";

interface OptionsInputsProps {
  title: string;
  handleClickBaseEmail?: React.MouseEventHandler<HTMLButtonElement>;
  handleClickErrorEmail?: React.MouseEventHandler<HTMLButtonElement>;
  handleClickSuccessEmail?: React.MouseEventHandler<HTMLButtonElement>;
  handleClickLeftEmail?: React.MouseEventHandler<HTMLButtonElement>;
  handleDisabledEmail?: React.MouseEventHandler<HTMLButtonElement>;
  handleSecuredEmail?: React.MouseEventHandler<HTMLButtonElement>;
}

export const OptionsInputsView = ({
  title,
  handleClickBaseEmail,
  handleClickErrorEmail,
  handleClickSuccessEmail,
  handleClickLeftEmail,
  handleDisabledEmail,
  handleSecuredEmail,
}: OptionsInputsProps) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <button onClick={handleClickBaseEmail} className={styles.button}>
        Base
      </button>
      <button onClick={handleClickErrorEmail} className={styles.button}>
        Error
      </button>
      <button onClick={handleClickSuccessEmail} className={styles.button}>
        Success
      </button>
      <button onClick={handleClickLeftEmail} className={styles.button}>
        With Left Component{" "}
      </button>
      <button onClick={handleDisabledEmail} className={styles.button}>
        Disabled
      </button>
      <button onClick={handleSecuredEmail} className={styles.button}>
        Secured
      </button>
    </div>
  );
};
