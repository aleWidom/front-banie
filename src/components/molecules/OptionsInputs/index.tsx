
"use client"
import { useContext } from "react"
import { InputContext } from "@/context/input"
import { OptionsInputsView } from "./OptionsInputsView"


export const OptionsInputs= () => {

    const {setTypeInput} = useContext(InputContext)

    const handleClickBase = () => {
      setTypeInput({
        type: "Base"
      })
    }
  
    const handleClickError = () => {
      setTypeInput({
        type: "Error"
      })
    }

    const handleClickSuccess = () => {
        setTypeInput({
          type: "Success"
        })
      }
    
      const handleClickLeft = () => {
        setTypeInput({
          type: "Left Component"
        })
      }

      const handleDisabled = () => {
        setTypeInput({
          type: "Disabled"
        })
      }

      const handleSecured= () => {
        setTypeInput({
          type: "Secured"
        })
      }
  

    return (
        <OptionsInputsView handleClickBase={handleClickBase} handleClickError={handleClickError} handleClickSuccess={handleClickSuccess} handleClickLeft={handleClickLeft} handleDisabled={handleDisabled} handleSecured={handleSecured}/>
    )
}

