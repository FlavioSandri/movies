import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Cabeçalho from './src/componentes/cabecalho';
import Banner from './src/componentes/banner';
import Filmes from './src/componentes/src/filmes';
import Pesquisa from './src/componentes/pesquisa';
import CardMovies from './src/componentes/cardFilmes';

export default function App() {
  const imagem = Math.floor(Math.random() * 4 + 1);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView>
        <Cabeçalho />
        <Pesquisa />
        <Banner />

        <View style={{ width: "90%", marginTop: 10 }}>
          <FlatList
            horizontal={true}
            data={Filmes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CardMovies 
                titulo={item.nome} 
                nota={item.nota} 
                imagem={item.imagem} 
              />
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: "center",
  },
});

