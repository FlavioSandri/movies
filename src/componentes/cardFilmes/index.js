import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from '../cardFilmes/styles.js';

export default function CardMovies({titulo, nota, imagem}) {
  return (
    <TouchableOpacity style={styles.Filmes}>

      <Image style={styles.images} source={{uri:(imagem)}}/>
      <Text style={styles.titulo}>{titulo}</Text>

      <Text style={styles.textNota}>{nota}</Text>
    </TouchableOpacity>
  );
}
