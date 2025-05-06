import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import Cabeçalho from '../../componentes/cabecalho';
import Banner from '../../componentes/banner';
import Filmes from '../../componentes/src/filmes';
import Pesquisa from '../../componentes/pesquisa';
import CardMovies from '../../componentes/cardFilmes';


export default function Home(){
    return(
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
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#141a29',
      alignItems: "center",
    },
  });