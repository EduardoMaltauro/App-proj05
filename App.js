import { StatusBar } from 'expo-status-bar';
import React from "react"
import { ScrollView, View } from "react-native"

import Promocao from './src/components/Promocao.js';

export default function App() {
  return <ScrollView>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />

    <View>
      <Promocao
        titulo="Promoção em Tênis!"
        imagem={require("./src/data/Tenis.jpeg")}
        promocao={8}
        codigo="TENISC"
      />

      <Promocao
        titulo="Promoção para Eletrônicos!"
        imagem={require("./src/data/Eletronicos.jpeg")}
        promocao={5}
        codigo="ELETR05"
      />

      <Promocao
        titulo="DESCONTO Cremes!"
        imagem={require("./src/data/Cremes.jpeg")}
        promocao={10}
        codigo="PELECUIDAR" 
      />
    </View>

  </ScrollView>
}


