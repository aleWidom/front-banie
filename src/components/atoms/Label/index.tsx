import styles from "./Label.module.scss";

interface LabelProps {
    label: string;
}

export const Label = ({ label }: LabelProps) => (
    <label className={styles.header}>{label}</label>
);
