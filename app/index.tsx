import { useFonts, Roboto_900Black, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { StyleSheet, TextInput, View, ImageBackground, Image, Button, Text } from 'react-native';
import { regions } from '../assets/FakeDb/Regions';
import SelectDropdown from 'react-native-select-dropdown';
import { Link } from 'expo-router';

export default function App() {
  const [text, setText] = useState('')

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
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/logo.png')} />
      </View>
      <TextInput style={styles.textInput} value={text} onChangeText={setText} placeholder={'Character Name...'} />
      <SelectDropdown buttonStyle={styles.textInput} data={regions[0].servers} onSelect={()=>console.log('holi')} searchPlaceHolder='Select a Region'/>
      <SelectDropdown buttonStyle={styles.textInput} data={regions[1].servers} onSelect={()=>console.log('holi')} searchPlaceHolder='Select a Server'/>
      <View style={styles.btnbox}>
        <View style={{
    width: '100%',
    position: 'relative'
  }}>
        <Text style={styles.btn1}>ENTER</Text>
        <Link style={{height: '100%', width: '100%', position: 'absolute'}} href={'/home'}/>
        </View>
        <View style={{
    width: '100%',
    position: 'relative'
  }}>
        <Text style={styles.btn2}>ENTER AS GUEST</Text>
        <Link style={{height: '100%', width: '100%', position: 'absolute'}} href={'/home'}/>
      </View>
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
    letterSpacing: 2,
    position: 'relative'
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
    letterSpacing: 2,
    position: 'relative'

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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    gap: 46,
    flexDirection: 'column'
  },
  image: {
    resizeMode:'contain',
    height: '100%',
    width: '100%'
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