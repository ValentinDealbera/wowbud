import { useFonts, Roboto_900Black, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { StyleSheet, TextInput, View, ImageBackground, Image, Button, Text, ScrollView } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import IndividualCard from '../../../../components/ui/IndividualCard';
import { classes } from '../../../../assets/FakeDb/Classes';

export default function Talents() {

  const params = useLocalSearchParams()
  console.log(params);
  
  const actualClass = classes.find((cl)=>{
    return cl.URL === params.class
  })
  

  let [fontsLoaded] = useFonts({
    Roboto_900Black,
    Roboto_400Regular,
  });
  
  if (!fontsLoaded) {
    return null;
  }
  return (
      <ImageBackground source={require('../../../../assets/images/bgg.jpeg')} style={styles.bgimage}>
        <LinearGradient
        colors={['rgba(0, 0, 0, 0.144)', 'rgba(0, 0, 0, 0.9)']}
        start={[0, 0]}
        end={[0, 1]}
        style={styles.gradient}
      >
        <View style={{flex: 1, height: '100%'}}>
            <ScrollView>
        <View style={{paddingVertical: 15,
    alignItems: 'center',
    gap: 30}}>
            <Text style={{borderRadius: 10,backgroundColor: '#232323', paddingHorizontal: 10, paddingVertical:5 , fontSize: 28, color: '#fff', textAlign: 'center'}}>{params.spec}</Text>
        </View>
    <View style={styles.container}>
    <IndividualCard URL={`/nowhere`} name={'Talentus'} image={require('../../../../assets/images/bgg.jpeg')} />
    </View>
    </ScrollView>
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
    gap: 30,
    paddingBottom: 100
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