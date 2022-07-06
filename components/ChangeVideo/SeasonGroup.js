import { StyleSheet, View, ScrollView, Text, Pressable } from 'react-native';
import {useEffect, useState} from 'react'
import { Dimensions } from 'react-native';


import {LinearGradient} from 'expo-linear-gradient'

import EpisodeCard from "./EpisodeCard";


export default function SeasonGroup({episodeCount,seasonNum}) {
 //   consoleconst JsonAPI='https://nodal-linker-349809-default-rtdb.europe-west1.firebasedatabase.app/bookmark.json'


const [hour, setHour] = useState("0");
const [minute, setMinute] = useState();
const [seconds, setSeconds] = useState("0");

const Episodes=() => {
  let episodesCard=[]
  for (let i = 0; i < episodeCount; i++) {
    episodesCard.push(<EpisodeCard key={i} NumEpisode={i+1}/>)
  }
  return episodesCard
}
const onChangeSec=() => {

  //console.log(DB)
  }
const onContinue=() => {

}

  return (
   
    <View style={styles.container}>
        <Text style={styles.title}>
     {'Season ' +seasonNum}
      </Text>

      <ScrollView >
{Episodes()}
</ScrollView>
        </View>
  

  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',

    backgroundColor: '#1D1D27'
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
