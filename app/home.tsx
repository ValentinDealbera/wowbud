import { useFonts, Roboto_900Black, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { StyleSheet, TextInput, View, ImageBackground, Image, Button, Text, ScrollView } from 'react-native';
import { regions } from '../assets/FakeDb/Regions';
import SelectDropdown from 'react-native-select-dropdown';
import { Link } from 'expo-router';
import IndividualCard from '../components/ui/IndividualCard';

export default function Home() {

  let [fontsLoaded] = useFonts({
    Roboto_900Black,
    Roboto_400Regular,
  });
  
  if (!fontsLoaded) {
    return null;
  }
  return (
      <ImageBackground source={require('../assets/images/bgg.jpeg')} style={styles.bgimage}>
        <LinearGradient
        colors={['rgba(0, 0, 0, 0.144)', 'rgba(0, 0, 0, 0.9)']}
        start={[0, 0]}
        end={[0, 1]}
        style={styles.gradient}
      >
        <View style={{flex: 1, height: '100%'}}>
        <View style={{paddingVertical: 15,
    alignItems: 'center',
    gap: 30}}>
            <Text style={{borderRadius: 10,backgroundColor: '#232323', paddingHorizontal: 10, paddingVertical:5 , fontSize: 24, color: '#fff', textAlign: 'center'}}>What do you wanna know adventurer?</Text>
        </View>
    <View style={styles.container}>
        <IndividualCard URL='/classes' name='Classes' image={require('../assets/images/warlock.png')} />
        <IndividualCard URL='/' name='Raids' image={require('../assets/images/raids.png')} />
        <IndividualCard URL='/' name='Dungeons' image={require('../assets/images/dungeons.png')} />
    </View>
    </View>
    </LinearGradient>
      </ImageBackground>
  );
  
}

const styles = StyleSheet.create({
  btnbox:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 20,
    width: '60%'
  },
  btn1:{
    backgroundColor: '#232323',
    borderRadius: 10,
    width: '100%',
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 24,
    fontFamily: 'Roboto_400Regular',
    color: '#FFF',
    letterSpacing: 2
  },
  btn2:{
    backgroundColor: '#232323',
    borderRadius: 10,
    width: '100%',
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 20,
    fontFamily: 'Roboto_400Regular',
    color: '#FFF',
    letterSpacing: 2
  },
  textInput: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 24,
    width: '85%',
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
  imageContainer: {
    width: '100%',
    display:'flex',
    height:'20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    flexDirection: 'column',
    gap: 30
  },
  image: {
    resizeMode:'contain',
    height: '100%',
  },
  bgimage: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Roboto_900Black'
  },
  gradient: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
});