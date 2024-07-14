import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import { EstiloGlobales } from './Config/theme/Tema-App';
import { CalculadoraPantalla } from './Presentacion/Pantallas/Calculadora-Pantalla';




function App(){
 

  return (
    <View style={EstiloGlobales.Fondo} >
      <StatusBar
        barStyle={ 'light-content'}
        backgroundColor={"black"}
      />
      <CalculadoraPantalla/>
    </View>
  );
}


export default App;
