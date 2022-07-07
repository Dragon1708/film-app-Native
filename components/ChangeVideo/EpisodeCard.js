import { StyleSheet, View, TextInput, Text, Pressable } from 'react-native';
import {useEffect, useState} from 'react'
import { Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import {LinearGradient} from 'expo-linear-gradient'


export default function EpisodeCard({NumEpisode, Season, SelectEpisode}) {
 
 const route=useRoute()
const data=route.params.allData

const [selectedEpisode, setSelectedEpisode] = useState(false);


const onChangeMin=() => {

}
const onChangeSec=() => {

  //console.log(DB)
  }
const onSelect=() => {
  SelectEpisode(Season,NumEpisode)
  setSelectedEpisode(true)
}

  return (
   
    <View style={styles.container}>
     <Pressable onPress={onSelect} >
      { selectedEpisode?  <LinearGradient colors={[ '#FD7461', '#BA4274']} start={[0,1]}
end={[1,0]} style={styles.btn}>
          <Text style={styles.title}>{NumEpisode}</Text>
</LinearGradient> : 
  <View style={styles.unSelected}>
  <Text style={styles.title}>{NumEpisode}</Text>
  </View>}
           {/* <LinearGradient colors={[ '#FD7461', '#BA4274']} start={[0,1]}
end={[1,0]} style={styles.btn}>
          <Text style={styles.title}>{NumEpisode}</Text>
</LinearGradient> */}
           </Pressable>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
  width:110,
  height:80,
  padding:10,
    backgroundColor: '#1D1D27'
  },
  unSelected:{
    width:100,
    height:70,
    borderRadius:10,
backgroundColor: 'rgba(43, 43, 53, 0.7)'
  },
  btn:{
    width:100,
    height:70,
    borderRadius:10,

  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
          fontSize: 28,
          color: "#ffff",
        },
});
