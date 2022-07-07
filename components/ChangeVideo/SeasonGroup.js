import { StyleSheet, View, ScrollView, Text, Pressable } from 'react-native';
import {useEffect, useState} from 'react'
import { Dimensions } from 'react-native';


import {LinearGradient} from 'expo-linear-gradient'

import EpisodeCard from "./EpisodeCard";


export default function SeasonGroup({episodeCount,seasonNum, SelectEpisode}) {
 //   consoleconst JsonAPI='https://nodal-linker-349809-default-rtdb.europe-west1.firebasedatabase.app/bookmark.json'


const [hour, setHour] = useState("0");
const [minute, setMinute] = useState();
const [seconds, setSeconds] = useState("0");


const Episodes=() => {
  let episodesCard=[]
  for (let i = 0; i < episodeCount; i++) {
    episodesCard.push(
 
 <EpisodeCard key={i} NumEpisode={i+1} Season={seasonNum} SelectEpisode={SelectEpisode}/>
   
    )
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

      <ScrollView   style={styles.episodesGrid}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap',
      justifyContent: 'center',

     }}>
      {Episodes()}
      </View>
</ScrollView>
        </View>
  

  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',

    backgroundColor: '#1D1D27'
  },
  episodesGrid:{
  //  justifyContent: 'flex-start',

  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
          fontSize: 28,
          color: "#ffff",
        },
});
