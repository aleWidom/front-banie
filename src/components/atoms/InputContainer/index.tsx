import { PropsWithChildren } from "react";
import styles from "./InputContainer.module.scss";

type InputContainerProps =  PropsWithChildren <{
  title: string;
}>

export const InputContainer = ({ title, children }: InputContainerProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.header} >{title}</label>
      {children}
    </div>
  );
};
