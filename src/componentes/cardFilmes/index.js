import React  from 'react'
import {View,Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles'

export default function CardMovies(){

    return(
        <TouchableOpacity style={styles.containerJogos} >
            <Image style={styles.images} source ={require(`/assets/freira.png`)} />
            <Text style={styles.titulo}>TITULO DO FILME</Text>

            <Text style={styles.textNota}>NOTA DO FILME</Text>

        </TouchableOpacity>
    );
}