import styles from './OptionsInputsView.module.scss'

interface OptionsInputsProps {
    handleClickBase?:any;
    handleClickError?:any;
    handleClickSuccess?: any;
    handleClickLeft?: any;
    handleDisabled?: any;
    handleSecured?: any
}

export const OptionsInputsView= ({handleClickBase, handleClickError, handleClickSuccess, handleClickLeft, handleDisabled, handleSecured}: OptionsInputsProps) => {
    return (
        <div>
        <button onClick={handleClickBase} className={styles.button}>Base</button>
        <button onClick={handleClickError} className={styles.button}>Error</button>
        <button onClick={handleClickSuccess} className={styles.button}>Success</button>
        <button onClick={handleClickLeft} className={styles.button}>With Left Component </button>
        <button onClick={handleDisabled} className={styles.button}>Disabled</button>
        <button onClick={handleSecured} className={styles.button}>Secured</button> 
        </div>
        
    )
}

