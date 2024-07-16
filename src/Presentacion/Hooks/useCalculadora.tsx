import { useRef, useState } from "react"

enum Operador {
  suma,
  resta,
  multiplicar,
  dividir
}
export const useCalculadora = () => {

    const [numero, setNumero] = useState("0")
    const [numeroAnterior, setNumeroAnterior] = useState("0")
    const operacionAnterior = useRef<Operador>();

    const ConstruirNumero = (numeroString: string) => {
      if (numero.includes('.') && numeroString === '.') return;

      if (numero.startsWith('0') || numero.startsWith('-0')) {
        // Punto decimal
        if (numeroString === '.') {
          return setNumero(numero + numeroString);
        }

        // Evaluar si es otro cero y no hay punto
        if (numeroString === '0' && numero.includes('.')) {
          return setNumero(numero + numeroString);
        }

        // Evaluar si es diferente de cero, no hay punto, y es el primer numero
        if (numeroString !== '0' && !numero.includes('.')) {
          return setNumero(numeroString);
        }

        // Evitar 000000.00
        if (numeroString === '0' && !numero.includes('.')) {
          return;
        }

        return setNumero(numero + numeroString);
      }

      setNumero(numero + numeroString);
    };
  const alternarSimbolo = () => {
    if ( numero.includes( '-' ) ) {
      return setNumero( numero.replace( '-', '' ) );
    }

    setNumero( '-' + numero );
  };
  const limpiar = ()=>{
    setNumero("0")
    setNumeroAnterior("0")
  }

  const eliminarOperacion = ()=>{
    let operacionActual = ''
    let numeroTemporal = numero
    if(numero.includes("-")){
      operacionActual ='-'
      numeroTemporal = numero.substring(1)
    }
    if(numeroTemporal.length > 1){
      return setNumero(operacionActual + numeroTemporal.slice(0,-1))
    }
    setNumero("0")
  }
  const asignarNumeroAnterior = ()=> {
    if (numero.endsWith(".")) {
      setNumeroAnterior(numero.slice(0,-1))
    } else {
      setNumeroAnterior(numero)
    }
    setNumero("0")
  }

  const operacionDividir =()=>{
    asignarNumeroAnterior()
    operacionAnterior.current = Operador.dividir;

  }
  const operacionMultiplicar =()=>{
    asignarNumeroAnterior()
    operacionAnterior.current = Operador.multiplicar;
    
  }
  const operacionSumar =()=>{
    asignarNumeroAnterior()
    operacionAnterior.current = Operador.suma;
    
  }
  const operacionResta =()=>{
    asignarNumeroAnterior()
    operacionAnterior.current = Operador.resta;
    
  }
  return{
    numero,
    numeroAnterior,

    ConstruirNumero,
    alternarSimbolo,
    limpiar,
    eliminarOperacion,
    operacionDividir,
    operacionMultiplicar,
    operacionSumar,
    operacionResta
  }
}
