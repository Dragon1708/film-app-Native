import { StyleSheet, Image, ScrollView, TextInput,Pressable, AsyncStorage  } from 'react-native';
import {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';

//import RNFS from 'react-native-fs';

import axios from 'axios';
import { Text, View } from '../../components/Themed';
import CategorySlider from "../../components/Categories/CategorySlider";


import {LinearGradient} from 'expo-linear-gradient'

import Arrow from "../../assets/icons/arrow";
//import SearchIcon from '../../assets/icons/SearchIcon'


export default function AddVideoPage2({ navigation }) {
  const [text, onChangeText] = useState("Useless Text");
  const Navigation=useNavigation()

  
const Pressi=()=>{

}
let UID123_delta = {
  age: 31,
  traits: { eyes: 'blue', shoe_size: 10 }
};

const _storeData = async () => {
  try {

    await AsyncStorage.setItem(
      'BAta',
      JSON.stringify(UID123_delta)
    );
  } catch (error) {
    console.log(error);
    // Error saving data
  }
};
const _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('BAta');
    if (value !== null) {
      // We have data!!
      console.log(JSON.parse(value));
    }
  } catch (error) {
    console.log(error);
    // Error retrieving data
  }
};
const GoBack=()=>{
 // Navigation.goBack()
 _retrieveData()
}

const GoToSectionPage=()=>{
  //Navigation.navigate('SelectSectionPage')
  _storeData()

}

  return (
   
    <View style={styles.container}>
      
        <Text style={styles.title}>
         Add video
        </Text>
        <ScrollView style={styles.ScrollView}>
        <View style={styles.inputContainer}>
    
          <Text style={styles.inputTitle}>
         Add Image URL
        </Text>
        <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        value={text}
      />
        </View>
        <View style={styles.inputContainer}>
    
    <Text style={styles.inputTitle}>
   Name
  </Text>
  <TextInput
  style={styles.textInput}
  onChangeText={onChangeText}
  value={text}
/>
  </View>

  <View style={styles.episodeContainer}>
    
    <Text style={styles.inputTitle}>
    Number of episodes:
  </Text>
  <TextInput
  style={styles.textInputEpisodes}
  onChangeText={onChangeText}
  value={text}
/>
  </View>

  <Pressable onPress={Pressi} style={styles.selectSectionBTN}>
  <LinearGradient colors={[ '#FD7461', '#BA4274']} start={[0,1]}
end={[1,0]} style={styles.gradientBlock}>
 <Text style={styles.inputTitle}>
  Select section
  </Text>
<Arrow style={{marginLeft: 10}} width={26} height={16}/>
</LinearGradient>
 
  </Pressable>
  <CategorySlider/>
      </ScrollView>

     <View style={styles.toggleBlock}>
      
  <Pressable onPress={GoBack} style={styles.cancelBTN}>

 <Text style={styles.cancelBTN_text}>
Cancel
  </Text>
 
  </Pressable>
  
  <Pressable onPress={GoToSectionPage} style={styles.applyBTNwrapper}>
  <LinearGradient colors={[ '#FD7461', '#BA4274']} start={[0,1]}
end={[1,0]} style={styles.applyBTN}>
 <Text style={styles.applyBTN_text}>
 Apply
  </Text>
</LinearGradient>
 
  </Pressable>
     </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  //  marginTop:80,
height:"100%",
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#1D1D27'
  },
  ScrollView:{
    paddingLeft:10,
    paddingRight:10,
  },
  title: {
    marginTop:40,
    paddingLeft:10,
    paddingRight:10,
    fontWeight: 'bold',
          fontSize: 28,
          color: "#ffff",
          marginBottom:16
        },
        inputTitle:{
          marginLeft:10,
          fontWeight: 'bold',
          fontSize: 16,
          color: "#ffff",
     
        },
        textInput:{
          marginTop: 10,
borderRadius:16,
backgroundColor: 'rgba(118, 118, 128, 0.12)',
height:52,
color: "#ffff",
paddingLeft:16,
paddingRight:16,
        },
        textInputEpisodes:{
          marginTop: 10,
borderRadius:16,
backgroundColor: 'rgba(118, 118, 128, 0.12)',
height:52,
width:150,
fontSize: 18,
textAlign: 'center',
fontWeight: 'bold',
color: "#ffff",
paddingLeft:16,
paddingRight:16,
        },
        inputContainer:{
          backgroundColor: '#1D1D27',
          marginTop:20,
        },
        episodeContainer:{
          flexDirection: "row",
          backgroundColor: '#1D1D27',
          marginTop:20,
          justifyContent:'space-between',
          alignItems: "center",
        },
        selectSectionBTN:{
marginTop:18,
        },
        gradientBlock:{
          height: 62,
          justifyContent: 'center',
          borderRadius:16,
          flexDirection: "row",
          alignItems: 'center',
        },
////////////////////////////
        toggleBlock:{
          bottom:0,
alignItems: 'center',
backgroundColor: '#1D1D27',
flexDirection: "row",
justifyContent:'space-between',
marginBottom:26
        },
        cancelBTN:{
      
          width: '30%',
          height:85,
          backgroundColor: '#272732',
          alignItems: "center",
          justifyContent: 'center',

          borderBottomRightRadius:22,
          borderTopRightRadius:22,
        },
        cancelBTN_text:{
          color: '#FFFFFF',
          fontSize: 18,
        },
        applyBTNwrapper:{
          width: '50%',
          
        },
        applyBTN:{
          height:85,
          alignItems: "center",
          justifyContent: 'center',

          borderBottomLeftRadius:22,
          borderTopLeftRadius:22,
        },
        applyBTN_text:{
          marginRight:60,
          color: '#FFFFFF',
          fontSize: 18,
        },

});
