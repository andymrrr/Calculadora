import { StyleSheet } from "react-native"

export const Colores ={
    GrisOscuro: "#2D2D2D",
    GrisClaro: "#9B9B9B",
    Naranja: "#FF9427",

    TextoPrimario:"white",
    TextoSecundario:"#666666",
    Fondo:"#000000"
}

export const EstiloGlobales = StyleSheet.create({
  CalculadoraContenedor: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },
  Fondo: {
    flex: 1,
    backgroundColor: Colores.Fondo,
  },
  Fila:{
    flexDirection:"row",
    justifyContent:"center",
    marginBottom:18,
    paddingHorizontal:10
  },
  Resultado: {
    color: Colores.TextoPrimario,
    fontSize: 70,
    textAlign: 'right',
    marginBottom: 10,
    fontWeight: '400',
  },
  SubResultado: {
    color: Colores.TextoSecundario,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: '300',
  },
  Boton: {
    width: 80,
    height: 80,
    backgroundColor:Colores.GrisOscuro,
    borderRadius:100,
    justifyContent:"center",
    marginHorizontal:10
  },
  BotonTexto:{
    textAlign:"center",
    padding:10,
    fontSize:30,
    color:"white",
    fontWeight:"300"
  }
});