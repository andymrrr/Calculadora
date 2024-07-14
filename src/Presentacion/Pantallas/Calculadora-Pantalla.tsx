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
        <Boton titulo='C' color={Colores.GrisClaro} textoNegro/>
        <Boton titulo='+/-'color={Colores.GrisClaro} textoNegro/>
        <Boton titulo='del'color={Colores.GrisClaro} textoNegro/>
        <Boton titulo='/' color={Colores.Naranja}/>
      </View>
      <View style={EstiloGlobales.Fila}>
      <Boton titulo='7' />
        <Boton titulo='8'/>
        <Boton titulo='9'/>
        <Boton titulo='X' color={Colores.Naranja}/>
      </View>
      <View style={EstiloGlobales.Fila}>
      <Boton titulo='4' />
        <Boton titulo='5'/>
        <Boton titulo='6'/>
        <Boton titulo='-' color={Colores.Naranja}/>
      </View>
      <View style={EstiloGlobales.Fila}>
      <Boton titulo='1' />
        <Boton titulo='2'/>
        <Boton titulo='3'/>
        <Boton titulo='+' color={Colores.Naranja}/>
      </View>
      <View style={EstiloGlobales.Fila}>
      <Boton titulo='0' tamanoDoble={true} />
        <Boton titulo='.'/>
        <Boton titulo='+' color={Colores.Naranja}/>
      </View>
    </View>
  );
}
