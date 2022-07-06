import { StyleSheet, View,FlatList, ScrollView, Text, Pressable } from 'react-native';
import {useEffect, useState} from 'react'
import { Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {fakeApi} from "../../assets/DB.json";

import {LinearGradient} from 'expo-linear-gradient'

import SeasonGroup from "../../components/ChangeVideo/SeasonGroup";

export default function ChangeEpisode() {
 //   consoleconst JsonAPI='https://nodal-linker-349809-default-rtdb.europe-west1.firebasedatabase.app/bookmark.json'
 const route=useRoute()
const Videodata=route.params

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
const [hour, setHour] = useState("0");


const onChangeMin=() => {

}
const onChangeSec=() => {

  //console.log(DB)
  }
const onContinue=() => {

}

  return (
   
    <View style={styles.container}>
   
        <Text style={styles.title}>
    Select Episode
      </Text>
      {/* <FlatList
data={getSeasons().Seasons}
renderItem={({item})=>   <SeasonGroup/>}
/> */}
<SeasonGroup episodeCount={10} seasonNum={1}/>
    <Pressable onPress={onContinue} >
           <LinearGradient colors={[ '#FD7461', '#BA4274']} start={[0,1]}
end={[1,0]} style={styles.btnNext}>
          <Text style={styles.title}>Next</Text>
</LinearGradient>
           </Pressable>
  
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

          fontSize: 28,
          color: "#ffff",
        },
});
