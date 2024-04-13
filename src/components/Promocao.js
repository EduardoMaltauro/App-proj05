import React, { useState } from "react"
import { View, Text, ImageBackground, Pressable } from "react-native"
import { setStringAsync } from "expo-clipboard"

//Importando o estilo
import estilo from "../styles/Promocao.js"

export default function Promocao(props) {
    const [estadoCodigo, mudarEstadoCodigo] = useState(false)

    async function AlterarEstado() {
        mudarEstadoCodigo(!estadoCodigo)
        await setStringAsync(props.codigo)
    }
    return <Pressable onPress={AlterarEstado}>
        <View style={estilo.desconto}>
            <Text style={estilo.descontoTitulo}> {props.titulo} </Text>

            <ImageBackground style={estilo.descontoImagem} source={props.imagem}>
                <Text style={estilo.descontoDados}> {props.promocao}% </Text>
            </ImageBackground>

            {estadoCodigo &&
                <Text style={estilo.descontoCodigo}>
                    {props.codigo}
                </Text>
            }
        </View>

    </Pressable>
}