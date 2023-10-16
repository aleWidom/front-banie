"use client";
import { useState } from "react";
import { InputContext } from "./InputContext";
import { InfoButtonsState } from "@/interfaces";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const InputProvider = ({ children }: Props) => {
  const [inputState, setInputState] = useState<InfoButtonsState>({
    type: "Text",
    placeholder: "Base",
    value: "",
    styleInput: {},
  });

  return (
    <InputContext.Provider
      value={{
        inputState,
        setInputState,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};
