import { StyleSheet, View, TextInput, Text, Pressable } from 'react-native';
import {useEffect, useState} from 'react'
import { Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import {LinearGradient} from 'expo-linear-gradient'


export default function EpisodeCard({NumEpisode}) {
 
 const route=useRoute()
const data=route.params.allData

const [hour, setHour] = useState("0");
const [minute, setMinute] = useState();
const [seconds, setSeconds] = useState("0");

const onChangeMin=() => {

}
const onChangeSec=() => {

  //console.log(DB)
  }
const onContinue=() => {

}

  return (
   
    <View style={styles.container}>
     <Pressable onPress={onContinue} >
           <LinearGradient colors={[ '#FD7461', '#BA4274']} start={[0,1]}
end={[1,0]} style={styles.btnNext}>
          <Text style={styles.title}>{NumEpisode}</Text>
</LinearGradient>
           </Pressable>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
  height:70,
    backgroundColor: '#1D1D27'
  },
 
  btnNext:{
    padding:10,
    borderRadius:10,
width:100,
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
