"use client";
import { useState } from "react";
import { InputContext } from "./InputContext";
import { InfoButtonsState } from "@/interfaces";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const InputProvider = ({ children }: Props) => {
  const [inputState, setInputState] = useState<InfoButtonsState>({
    type: "text",
    placeholder: "Base",
    value: "",
    styleInput: {},
  });


  const [visiblePassword, setVisiblePassword]= useState(false)

  return (
    <InputContext.Provider
      value={{
        inputState,
        setInputState,
        visiblePassword, 
        setVisiblePassword
      }}
    >
      {children}
    </InputContext.Provider>
  );
};
