import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { Colores, EstiloGlobales } from '../../Config/theme/Tema-App'
import { Boton } from '../Componentes/Boton';

export const CalculadoraPantalla = () => {
  return (
    <View style={EstiloGlobales.CalculadoraContenedor}>
      <View style={{paddingHorizontal: 30, marginBottom: 20}}>
        <Text style={EstiloGlobales.Resultado}>1500</Text>
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
        <Boton onPress={() => {}} titulo="7" />
        <Boton onPress={() => {}} titulo="8" />
        <Boton onPress={() => {}} titulo="9" />
        <Boton onPress={() => {}} titulo="X" color={Colores.Naranja} />
      </View>
      <View style={EstiloGlobales.Fila}>
        <Boton onPress={() => {}} titulo="4" />
        <Boton onPress={() => {}} titulo="5" />
        <Boton onPress={() => {}} titulo="6" />
        <Boton onPress={() => {}} titulo="-" color={Colores.Naranja} />
      </View>
      <View style={EstiloGlobales.Fila}>
        <Boton onPress={() => {}} titulo="1" />
        <Boton onPress={() => {}} titulo="2" />
        <Boton onPress={() => {}} titulo="3" />
        <Boton onPress={() => {}} titulo="+" color={Colores.Naranja} />
      </View>
      <View style={EstiloGlobales.Fila}>
        <Boton onPress={() => {}} titulo="0" tamanoDoble={true} />
        <Boton onPress={() => {}} titulo="." />
        <Boton onPress={() => {}} titulo="+" color={Colores.Naranja} />
      </View>
    </View>
  );
}
