import { Input } from "@/components/atoms";
import styles from "./InputLabelView.module.scss";

interface InputLabelProps {
  titleLabel: string;
  htmlFor: string;
  register: any;
  validation: any;
  errors: any
}

export const InputLabelView = ({ titleLabel,htmlFor, register, validation, errors }: InputLabelProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.header} htmlFor={htmlFor}>{titleLabel}</label>
      <Input htmlFor={htmlFor} register={register} validation={validation} errors={errors} />
    </div>
  );
};
