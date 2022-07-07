import { StyleSheet, View,FlatList, ScrollView, Text, Pressable } from 'react-native';
import {useEffect, useState} from 'react'
import { Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {fakeApi} from "../../assets/DB.json";

import {saveData, loadData} from '../../components/SaveLoadData'
import {LinearGradient} from 'expo-linear-gradient'

import SeasonGroup from "../../components/ChangeVideo/SeasonGroup";

export default function ChangeEpisode() {
 //   consoleconst JsonAPI='https://nodal-linker-349809-default-rtdb.europe-west1.firebasedatabase.app/bookmark.json'
 const route=useRoute()
 const Navigation=useNavigation()
 let newEpisodeData=[]
const Videodata=route.params
const SeasonGroups=[<SeasonGroup episodeCount={Videodata.data.EpisodeData[1]} seasonNum={1} SelectEpisode={SelectEpisode}/>]

const getSeasons=() => {
return  fakeApi.find((value, index)=>{
//  console.log(Videodata.data.id)
   return value.id==Videodata.data.id; 
  })
}

useEffect(()=>{
//console.log(getSeasons().Seasons,"--------")

},[])
//console.log(Videodata,'|||+++||')

const SelectEpisode=(Season, NumEpisode) => {
  newEpisodeData=[Season,NumEpisode]
  console.log(Videodata.newTime[0])
  }

  
const onDone=() => {
  const NewVideoData={
    ...Videodata.data,
    "timeCode":Videodata.newTime,
    "EpisodeData":[newEpisodeData[1],Videodata.data.EpisodeData[1]],
    "SeasonData":[newEpisodeData[0],Videodata.data.SeasonData[1]],
"updateDate": Date.now()
  }

 // console.log(NewVideodata)
  loadData().then(function (data) {
  let NewData=data
  NewData.timeCodes.splice(NewData.timeCodes.findIndex(item => item.id === NewVideoData.id), 1)

 NewData.timeCodes.unshift(NewVideoData)
      console.log("=============")
// // data.sections[0]
saveData(NewData)
// console.log( NewData.timeCodes)
  Navigation.navigate('HomeScreen')
  })
}

  return (
   
    <View style={styles.container}>
   
        <Text style={styles.title}>
    Select Episode
      </Text>
      <ScrollView>

   
      {/* <FlatList
data={getSeasons().Seasons}
renderItem={({item})=>   <SeasonGroup/>}
/> */}
<SeasonGroup episodeCount={Videodata.data.EpisodeData[1]} seasonNum={1} SelectEpisode={SelectEpisode}/>
    <Pressable onPress={onDone} >
           <LinearGradient colors={[ '#FD7461', '#BA4274']} start={[0,1]}
end={[1,0]} style={styles.btnNext}>
          <Text style={{...styles.title, textAlign:"center"}}>Done</Text>
</LinearGradient>
           </Pressable>
           </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    justifyContent: 'center',
  height:'100%',
    backgroundColor: '#1D1D27'
  },
  btnNext:{
    padding:10,
    borderRadius:10,
width:Dimensions.get('window').width-60,
marginTop:20,
marginLeft:30,
marginRight:30,
  },
  title: {
    fontWeight: 'bold',

          fontSize: 28,
          color: "#ffff",
        },
});
