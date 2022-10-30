import { StyleSheet, View, TextInput, Text, Pressable } from 'react-native';
import {useEffect, useState} from 'react'
import { Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import {LinearGradient} from 'expo-linear-gradient'

import NumberButtonInput from "../../components/NumberButtonInput";


export default function ChangeTime({TimeCode, SetNewTimeCode}) {
 //   consoleconst JsonAPI='https://nodal-linker-349809-default-rtdb.europe-west1.firebasedatabase.app/bookmark.json'


const Navigation=useNavigation()



const onChangeHour=(value) => {
  // TimeCode[0]=value
  SetNewTimeCode([value, TimeCode[1],TimeCode[2] ])
}
const onChangeMin=(value) => {
  SetNewTimeCode([TimeCode[0], value,TimeCode[2] ])
}
const onChangeSec=(value) => {
  SetNewTimeCode([TimeCode[0],TimeCode[1],value])
  //console.log(DB)
  }


  return (
   
    <View style={styles.container}>
        <View style={styles.wrapper}>
        <Text style={styles.title}>
      Where did you stay?
      </Text>
     <View style={styles.inputsContainer}>
     <NumberButtonInput ClickHandler={onChangeHour}
     
 startNumber={TimeCode[0]}
 />
<Text style={styles.title}>
      :
      </Text>
      <NumberButtonInput ClickHandler={onChangeMin}
      maxValue={60}
 startNumber={TimeCode[1]}
 />
<Text style={styles.title}>
      :
      </Text>
      <NumberButtonInput ClickHandler={onChangeSec}
           maxValue={60}
 startNumber={TimeCode[2]}
 />
     </View>
  
        </View>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#01080D'
  },
  wrapper:{
alignItems:'center',
justifyContent: 'center',
  },
  inputsContainer:{
    marginTop:15,
    marginBottom:15,
    alignItems: 'center',
flexDirection: "row"
  },
  textInputTime:{
    height: 60,
    backgroundColor: 'rgba(118, 118, 128, 0.2)',
    borderRadius:16,
    textAlign: 'center',
    placeholderTextColor:'rgba(255, 255, 255, 0.54)',
    fontSize: 28,
    width: 110,
    color: 'white'
  },
  btnNext:{
    padding:10,
    borderRadius:10,
width:Dimensions.get('window').width-60,
marginLeft:30,
marginRight:30,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
          fontSize: 28,
          color: "#ffff",
        },
});
