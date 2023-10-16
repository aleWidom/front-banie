import { Input } from "@/components/atoms";
import styles from "./InputLabelView.module.scss";

interface InputLabelProps {
  titleLabel: string;
}

export const InputLabelView = ({ titleLabel }: InputLabelProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.header}>{titleLabel}</label>
      <Input />
    </div>
  );
};
