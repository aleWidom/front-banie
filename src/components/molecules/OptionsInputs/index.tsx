"use client";
import { useContext } from "react";
import { InputContext } from "@/context/input";
import { OptionsInputsView } from "./OptionsInputsView";


const styleInputBase = {
	border: "black 1px solid",
}

const styleInputError = {
	border: "red 1px solid",
    color: "red"
}

const styleInputSuccess = {
	border: "green 1px solid",
}

const styleInputWithLeft = {
	border: "black 1px solid",
}

const styleInputDisabled= {
	border: "black 1px solid",
     opacity: 0.5
}

const styleInputSecurity= {
	border: "black 1px solid",
}


export const OptionsInputs = () => {
  
  const { inputState, setInputState } = useContext(InputContext);

  const handleClickBaseEmail = () => {
    setInputState({
      type: "Text",
      placeholder: "Base",
      value: "",
      styleInput:styleInputBase
    });
  };

 const handleClickErrorEmail = () => {
  setInputState({
    type: "Text",
    placeholder: "Error",
    value: "",
    styleInput:styleInputError
  });
  };

  const handleClickSuccessEmail = () => {
    setInputState({
      type: "Text",
      placeholder: "Success",
      value: "",
      styleInput:styleInputSuccess
    });
 };

  const handleClickLeftEmail = () => {
    setInputState({
      type: "Text",
      placeholder: "Left Component",
      value: "",
      styleInput:styleInputWithLeft
    });
   };

  const handleDisabledEmail = () => {
    setInputState({
      type: "Text",
      placeholder: "Disabled",
      value: "",
      styleInput: styleInputDisabled 
    });
  };

   const handleSecuredEmail = () => {
    setInputState({
      type: "Text",
      placeholder: "Secured",
      value: "",
      styleInput:styleInputSecurity
    });
};

   const handleClickBasePassword = () => {
    setInputState({
      type: "Text",
      placeholder: "Base",
      value: "",
      styleInput:styleInputBase
    });
  };

   const handleClickErrorPassword = () => {
    setInputState({
      type: "Text",
      placeholder: "Base",
      value: "",
      styleInput:styleInputBase
    });
  };


 const handleClickSuccessPassword = () => {
  setInputState({
    type: "Text",
    placeholder: "Base",
    value: "",
    styleInput:styleInputBase
  });
   };

  const handleClickLeftPassword = () => {
    setInputState({
      type: "Text",
      placeholder: "Base",
      value: "",
      styleInput:styleInputBase
    });
 };

   const handleDisabledPassword = () => {
    setInputState({
      type: "Text",
      placeholder: "Base",
      value: "",
      styleInput:styleInputBase
    });
 };

   const handleSecuredPassword = () => {
    setInputState({
      type: "Text",
      placeholder: "Base",
      value: "",
      styleInput:styleInputBase
    });
   };


  return (
    <>
      <OptionsInputsView
        title={"Botón estado Email"}
        handleClickBaseEmail={handleClickBaseEmail}
         handleClickErrorEmail={handleClickErrorEmail}
        handleClickSuccessEmail={handleClickSuccessEmail}
         handleClickLeftEmail={handleClickLeftEmail}
        handleDisabledEmail={handleDisabledEmail}
         handleSecuredEmail={handleSecuredEmail}
      />
    </>
  );
};
