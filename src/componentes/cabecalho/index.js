import {Text, View, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import styles from '../cabecalho/styles.js';

export default function Cabeçalho(){
    return(
        <View style= {styles.viewHeader}>
        
        <TouchableOpacity>
        
        <Feather style ={{marginleft:-70}} name = 'menu' size= {36} color="#FFF" />
        
        </TouchableOpacity>
        <Text style={styles.textHeader}> TEC FILMES </Text>
        
        </View>
    );
}