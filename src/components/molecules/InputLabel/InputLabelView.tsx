import { Input } from "@/components/atoms";
import styles from "./InputLabelView.module.scss";

interface InputLabelProps {
  titleLabel: string;
  htmlFor: string;
  register: any
}

export const InputLabelView = ({ titleLabel,htmlFor, register }: InputLabelProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.header} htmlFor={htmlFor}>{titleLabel}</label>
      <Input htmlFor={htmlFor} register={register} />
    </div>
  );
};
