import { useState } from "react"

export const useCalculadora = () => {

    const [numero, setNumero] = useState("0")

    const ConstruirNumero = (numeroString: string)=>{
        if(numero.includes(".") && numeroString ===".")
        {
            return;
        }
        setNumero(numero + numeroString)
    }
  return{
    numero,

    ConstruirNumero
  }
}
