import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import {Feather} from '@expo/vector-icons';
import Cabeçalho from './src/componentes/cabecalho';
import Banner from './src/componentes/banner';
import Pesquisa from './src/componentes/pesquisa';

export default function App() {
const imagem = Math.floor(Math.random() * 4 +1);

  return (
    <View style={styles.container}>

        <Cabeçalho/>

        <Pesquisa/>

        <Banner/>

{/*INICIO BANNER*/}

{/*FIM DO BANNER*/}

</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#141a29',
    alignItems:"center",
  },
 
})
