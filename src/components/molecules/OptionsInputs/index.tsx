"use client";
import { useContext } from "react";
import { InputContext } from "@/context/input";
import { OptionsInputsView } from "./OptionsInputsView";

export const OptionsInputs = () => {
  
  const { inputState, setInputState } = useContext(InputContext);

  const handleClickBaseEmail = () => {
    setInputState({
      ...inputState,
      email: "Base",
    });
  };

  const handleClickErrorEmail = () => {
    setInputState({
      ...inputState,
      email: "Error",
    });
  };

  const handleClickSuccessEmail = () => {
    setInputState({
      ...inputState,
      email: "Success",
    });
  };

  const handleClickLeftEmail = () => {
    setInputState({
      ...inputState,
      email: "Left Component",
    });
  };

  const handleDisabledEmail = () => {
    setInputState({
      ...inputState,
      email: "Disabled",
    });
  };

  const handleSecuredEmail = () => {
    setInputState({
      ...inputState,
      email: "Secured",
    });
  };

  const handleClickBasePassword = () => {
    setInputState({
      ...inputState,
      password: "Base",
    });
  };

  const handleClickErrorPassword = () => {
    setInputState({
      ...inputState,
      password: "Error",
    });
  };


  const handleClickSuccessPassword = () => {
    setInputState({
      ...inputState,
      password: "Success",
    });
  };

  const handleClickLeftPassword = () => {
    setInputState({
      ...inputState,
      password: "Left Component",
    });
  };

  const handleDisabledPassword = () => {
    setInputState({
      ...inputState,
      password: "Disabled",
    });
  };

  const handleSecuredPassword = () => {
    setInputState({
      ...inputState,
      password: "Secured",
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
        handleClickBasePassword={handleClickBasePassword}
        handleClickErrorPassword={handleClickErrorPassword}
        handleClickSuccessPassword={handleClickSuccessPassword}
        handleClickLeftPassword={handleClickLeftPassword}
        handleDisabledPassword={handleDisabledPassword}
        handleSecuredPassword={handleSecuredPassword}
      />
      {/* <OptionsInputsView title={"Botón estado Password"} handleClickBase={handleClickBase} handleClickError={handleClickError} handleClickSuccess={handleClickSuccess} handleClickLeft={handleClickLeft} handleDisabled={handleDisabled} handleSecured={handleSecured}/>*/}
    </>
  );
};
