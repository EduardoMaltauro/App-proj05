import { StatusBar } from 'expo-status-bar';
import React from "react" 
import { ScrollView, View } from "react-native"

import { setStringAsync } from "expo-clipboard"

async function CopiarTexto() {
  await setStringAsync("Olá mundo!")
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return <ScrollView>
    <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
    <View>
    <Button title="Clique aqui para copiar!" onPress={ CopiarTexto } />
    </View>
  </ScrollView>
}


