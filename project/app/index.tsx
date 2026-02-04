import { TextInput, StyleSheet, Text, View, TouchableOpacity, Alert} from "react-native";
import { Image } from "expo-image";
import React, {useState} from "react";

export default function Index() {
  const [userText, setUserText] = useState('');

  function HandleClick(){
    const userInt = parseInt(userText)
    let message = '';

    if (userInt == 16){
      message = "Acertou! Adele é GI GAN TES CA";
    } else if (userInt < 16) {
      message = "Subestimou a diva..."
    } else {
      message = "Calma... Ela nem lançou tanto álbum assim..."
    }
    Alert.alert(message)
  }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Hello, Native world!</Text>

      <View style={styles.adele_container}>
        <Image 
          source={{
            uri: "https://www.billboard.com/wp-content/uploads/2021/02/Adele-2012-grammys-billboard-1548-1614205035.jpg"}
          } 
          style={styles.image}>
        </Image>
        <TextInput 
          placeholder="Digite quantos grammys Adele possui..." 
          placeholderTextColor={"gray"} 
          value={userText}
          onChangeText={text => setUserText(text)}
          style={styles.input}/>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => HandleClick()}> 
        <Text>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create(
  {
    container: {
      width: "100%",
      height: "50%",
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    adele_container:{
      width: "80%",
      height: "23%",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    },
    text: {
      color: "gray",
      fontSize: 25
    },
    image: {
      width: 100,
      height: 100
    },
    input: {
      borderWidth: 1,
      padding: 10,
      color: "black",
      width: "100%"
    },
    button: {
      borderWidth: 1,
      width:100,
      height: 30,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 3,
      backgroundColor: "lightblue"
    }
  }
)