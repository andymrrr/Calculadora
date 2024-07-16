import { useEffect, useRef, useState } from 'react';

enum Operadores {
  Sumar = '+',
  Restar = '-',
  Multiplicar = 'x',
  divide = '÷',
}




export const useCalculadora = () => {

  const [ formula, setFormula ] = useState( '' );

  const [ numero, setNumero ] = useState( '0' );
  const [ numeroAnterior, setNumeroAnterior ] = useState( '0' );

  const lastOperation = useRef<Operadores>();

  useEffect( () => {
    if ( lastOperation.current ) {
      const firstFormulaPart = formula.split( ' ' ).at( 0 );
      setFormula( `${ firstFormulaPart } ${ lastOperation.current } ${ numero }` );
    } else {
      setFormula( numero );
    }

  }, [ numero ] );


  useEffect(() => {
    const subResult = calculateSubResult();
    setNumeroAnterior( `${ subResult }`);    
  }, [formula])
  





  const Limpiar = () => {
    setNumero( '0' );
    setNumeroAnterior( '0' );
    lastOperation.current = undefined;
    setFormula( '' );
  };

  // Borrar el último número
  const EliminarOperacion = () => {

    let signoActual = '';
    let Numerotemporal = numero;

    if ( numero.includes( '-' ) ) {
      signoActual = '-';
      Numerotemporal = numero.substring( 1 ); // 88
    }

    if ( Numerotemporal.length > 1 ) {
      return setNumero( signoActual + Numerotemporal.slice( 0, -1 ) ); // 
    }

    setNumero( '0' );

  };


  const alternarSimbolo = () => {
    if ( numero.includes( '-' ) ) {
      return setNumero( numero.replace( '-', '' ) );
    }

    setNumero( '-' + numero );
  };


  const ConstruirNumero = ( numberString: string ) => {

    if ( numero.includes( '.' ) && numberString === '.' ) return;

    if ( numero.startsWith( '0' ) || numero.startsWith( '-0' ) ) {

      // Punto decimal
      if ( numberString === '.' ) {
        return setNumero( numero + numberString );
      }

      // Evaluar si es otro cero y no hay punto
      if ( numberString === '0' && numero.includes( '.' ) ) {
        return setNumero( numero + numberString );
      }

      // Evaluar si es diferente de cero, no hay punto, y es el primer numero
      if ( numberString !== '0' && !numero.includes( '.' ) ) {
        return setNumero( numberString );
      }

      // Evitar 000000.00
      if ( numberString === '0' && !numero.includes( '.' ) ) {
        return;
      }

      return setNumero( numero + numberString );
    }


    setNumero( numero + numberString );

  };

  const establecerUltimoNumero = () => {
    Resultado();
    
    if ( numero.endsWith( '.' ) ) {
      setNumeroAnterior( numero.slice( 0, -1 ) );
    } else {
      setNumeroAnterior( numero );
    }

    setNumero( '0' );
  };

  const Dividir = () => {
    establecerUltimoNumero();
    lastOperation.current = Operadores.divide;
  };

  const Multiplicar = () => {
    establecerUltimoNumero();
    lastOperation.current = Operadores.Multiplicar;
  };

  const Restar = () => {
    establecerUltimoNumero();
    lastOperation.current = Operadores.Restar;
  };

  const Sumar = () => {
    establecerUltimoNumero();
    lastOperation.current = Operadores.Sumar;
  };


  const Resultado = () => {

    const result = calculateSubResult();
    setFormula( `${ result }` );

    lastOperation.current = undefined;
    setNumeroAnterior( '0' );
  };

  const calculateSubResult = (): number => {

    const [ firstValue, operation, secondValue ] = formula.split( ' ' );

    const num1 = Number( firstValue );
    const num2 = Number( secondValue ); //NaN

    if ( isNaN( num2 ) ) return num1;

    switch ( operation ) {

      case Operadores.Sumar:
        return num1 + num2;

      case Operadores.Restar:
        return num1 - num2;

      case Operadores.Multiplicar:
        return num1 * num2;

      case Operadores.divide:
        return num1 / num2;

      default:
        throw new Error( 'Operation not implemented' );
    }

  };



  return {
    // Properties
    numero,
    numeroAnterior,
    formula,

    // Methods
    ConstruirNumero,
    alternarSimbolo,
    Limpiar,
    EliminarOperacion,
    Dividir,
    Multiplicar,
    Restar,
    Sumar,
    Resultado,
  };
}
