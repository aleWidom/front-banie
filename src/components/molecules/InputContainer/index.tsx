import React, { PropsWithChildren } from "react";

import { Label } from "@/components/atoms/Label";

import styles from "./InputContainer.module.scss";

type InputContainerProps = PropsWithChildren<{
  label: string;
  errorsMessage?: string;
}>;

export const InputContainer = ({
  label,
  children,
  errorsMessage,
}: InputContainerProps) => (
  <div className={styles.container}>
    <Label label={label} />
    {children}
    {!!errorsMessage && <span className={styles.error}>{errorsMessage}</span>}
  </div>
);


export default InputContainer;