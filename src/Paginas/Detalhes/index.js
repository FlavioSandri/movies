import { View,Text } from "react-native-web";
import { useRoute } from "@react-navigation/native";

export default function Detalhes(){
    const route = useRoute()
    return(
        <View>
            <Text style= {{color: "black"}}> {route.params.nota} </Text>
            <Text style= {{color: "black"}}> {route.params.titulo} </Text>
            <Text>teste</Text>
        </View>
    )
}