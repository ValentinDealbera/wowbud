import React from "react";
import { ImageSourcePropType } from "react-native/types";
import { View } from "../Themed";
import { StyleSheet, Text, Image } from "react-native";
import { useFonts, Roboto_900Black, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Link } from "expo-router";

interface props {
  image: ImageSourcePropType;
  name: string;
  URL: string;
}

const IndividualCard: React.FC<props> = ({ image, URL, name }) => {
    let [fontsLoaded] = useFonts({
        Roboto_900Black,
        Roboto_400Regular,
      });
      
      if (!fontsLoaded) {
        return null;
      }
  return (
    
      <View style={styles.container}>
        <View style={styles.containerImg}>
            <Image source={image} style={{width: '100%',height:'100%', resizeMode: 'cover'}}/>
            <View style={styles.containerTxt}>
                <Text style={styles.text}>{name}</Text>
            </View>
        </View>
        <Link style={{position: "absolute",width: '100%',height:'100%', margin: 10}} href={URL} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232323",
    width: "100%",
    height: 180,
    borderRadius: 10,
    padding: 10,
    position: "relative"
  },
  containerImg: {
    backgroundColor: "#fff",
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  containerTxt: {
    backgroundColor: '#232323',
    position: "absolute",
    paddingVertical: 5,
    paddingHorizontal:10,
    bottom: 0,
    right: 0,
    borderTopStartRadius: 10
  },
  text:{
    color: '#fff',
    fontSize: 20
  }
});

export default IndividualCard;
