import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [numero, setNumero] = useState(0);

  function handleNumero() {
    const novoNumero = Math.floor(Math.random() * 10);
    setNumero(novoNumero);
  }

  return(
  <SafeAreaView style = {style.container}>
    <Text style = {style.titulo}> Número Randômico </Text>
    <Text style = {style.numero}> {numero} </Text>
    <TouchableOpacity onPress={handleNumero}>
      <Text style = {style.botao}> Gerar Número </Text>
    </TouchableOpacity>
  </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container:{
    backgroundColor: '#FF9999',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontStyle: 'italic',
    fontSize: 24,
    color: 'black',
    fontWeight: 'normal',
  },
  numero: {
    marginTop: 20,
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  botao: {
    color: 'black',
    marginTop: 20,
    width: '60%',
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  //   padding: 20,
  },
});

export default App;
