import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { Colores, EstiloGlobales } from '../../Config/theme/Tema-App'
import { Boton } from '../Componentes/Boton';
import { useCalculadora } from '../Hooks/useCalculadora';

export const CalculadoraPantalla = () => {
    const {numero,ConstruirNumero} = useCalculadora()
  return (
    <View style={EstiloGlobales.CalculadoraContenedor}>
      <View style={{paddingHorizontal: 30, marginBottom: 20}}>
        <Text style={EstiloGlobales.Resultado}>{numero}</Text>
        <Text style={EstiloGlobales.SubResultado}>15</Text>
      </View>
      <View style={EstiloGlobales.Fila}>
        <Boton
          onPress={() => {}}
          titulo="C"
          color={Colores.GrisClaro}
          textoNegro
        />
        <Boton
          onPress={() => {}}
          titulo="+/-"
          color={Colores.GrisClaro}
          textoNegro
        />
        <Boton
          onPress={() => {}}
          titulo="del"
          color={Colores.GrisClaro}
          textoNegro
        />
        <Boton onPress={() => {}} titulo="/" color={Colores.Naranja} />
      </View>
      <View style={EstiloGlobales.Fila}>
        <Boton onPress={() => ConstruirNumero("7")} titulo="7" />
        <Boton onPress={() => ConstruirNumero("8")} titulo="8" />
        <Boton onPress={() => ConstruirNumero("9")} titulo="9" />
        <Boton onPress={() => {}} titulo="X" color={Colores.Naranja} />
      </View>
      <View style={EstiloGlobales.Fila}>
        <Boton onPress={() => ConstruirNumero("4")} titulo="4" />
        <Boton onPress={() => ConstruirNumero("5")} titulo="5" />
        <Boton onPress={() => ConstruirNumero("6")} titulo="6" />
        <Boton onPress={() => {}} titulo="-" color={Colores.Naranja} />
      </View>
      <View style={EstiloGlobales.Fila}>
        <Boton onPress={() => ConstruirNumero("1")} titulo="1" />
        <Boton onPress={() => ConstruirNumero("2")} titulo="2" />
        <Boton onPress={() => ConstruirNumero("3")} titulo="3" />
        <Boton onPress={() => {}} titulo="+" color={Colores.Naranja} />
      </View>
      <View style={EstiloGlobales.Fila}>
        <Boton onPress={() => ConstruirNumero("0")} titulo="0" tamanoDoble={true} />
        <Boton onPress={() => ConstruirNumero(".")} titulo="." />
        <Boton onPress={() => {}} titulo="=" color={Colores.Naranja} />
      </View>
    </View>
  );
}
