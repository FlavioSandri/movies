import {Text, Image} from 'react-native';
import styles from '../banner/styles.js';

export default function Banner(){
    return(
        <>
        
        <Text style = {styles.textBanner}>Em Cartaz</Text>
        <Image style = {styles.imageBanner} source = {require(`../../../assets/freira.png`)}/>
        
        </>
    );
}