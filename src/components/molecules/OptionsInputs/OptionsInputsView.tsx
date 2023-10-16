import styles from "./OptionsInputsView.module.scss";

interface OptionsInputsProps {
  title: string;
  handleClickBaseEmail?: React.MouseEventHandler<HTMLButtonElement>;
  handleClickErrorEmail?: React.MouseEventHandler<HTMLButtonElement>;
  handleClickSuccessEmail?: React.MouseEventHandler<HTMLButtonElement>;
  handleClickLeftEmail?: React.MouseEventHandler<HTMLButtonElement>;
  handleDisabledEmail?: React.MouseEventHandler<HTMLButtonElement>;
  handleSecuredEmail?: React.MouseEventHandler<HTMLButtonElement>;
  handleClickBasePassword?: React.MouseEventHandler<HTMLButtonElement>;
  handleClickErrorPassword ?: React.MouseEventHandler<HTMLButtonElement>;
  handleClickSuccessPassword?: React.MouseEventHandler<HTMLButtonElement>;
  handleClickLeftPassword?: React.MouseEventHandler<HTMLButtonElement>;
  handleDisabledPassword?: React.MouseEventHandler<HTMLButtonElement>;
  handleSecuredPassword?: React.MouseEventHandler<HTMLButtonElement>;
}

export const OptionsInputsView = ({
  title,
  handleClickBaseEmail,
  handleClickErrorEmail,
  handleClickSuccessEmail,
  handleClickLeftEmail,
  handleDisabledEmail,
  handleSecuredEmail,
  handleClickBasePassword,
  handleClickErrorPassword,
  handleClickSuccessPassword,
  handleClickLeftPassword,
  handleDisabledPassword,
  handleSecuredPassword
}: OptionsInputsProps) => {
  return (
  <>
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
    <div className={styles.container}>
    <h2>Botón Estado Password</h2>
    <button onClick={handleClickBasePassword} className={styles.button}>
      Base
    </button>
    <button onClick={handleClickErrorPassword}  className={styles.button}>
      Error
    </button>
    <button  onClick={handleClickSuccessPassword} className={styles.button}>
      Success
    </button>
    <button onClick={handleClickLeftPassword}  className={styles.button}>
      With Left Component{" "}
    </button>
    <button onClick={handleDisabledPassword}  className={styles.button}>
      Disabled
    </button>
    <button onClick={handleSecuredPassword} className={styles.button}>
      Secured
    </button>
  </div>
  </>
  );
};
