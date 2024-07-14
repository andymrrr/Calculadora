import { Pressable, Text } from "react-native"
import { Colores, EstiloGlobales } from "../../Config/theme/Tema-App"

interface Propiedad{
    titulo:string,
    color?: string,
    tamanoDoble?:boolean,
    textoNegro?: boolean,
    onPress: ()=> void
}
export const Boton = ({
    titulo,
    color = Colores.GrisOscuro, 
    tamanoDoble= false, 
    textoNegro= false,
    onPress
}:Propiedad) => {
  return (
    <Pressable 
    onPress={()=> onPress()}
    style={({pressed}) => ({
        ...EstiloGlobales.Boton,
        backgroundColor: color,
        width: (tamanoDoble) ? 180 : 80,
        opacity: (pressed) ? 0.8: 1
    })}>
      <Text style={{
        ...EstiloGlobales.BotonTexto,
        color: (textoNegro) ? 'black' : "white"
      }}>{titulo}</Text>
    </Pressable>
  );
}
