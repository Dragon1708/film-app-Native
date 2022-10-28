import { StyleSheet, View,Image, ScrollView, Text, Pressable } from 'react-native';
import {useEffect, useState} from 'react'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native';

import {LinearGradient} from 'expo-linear-gradient'


export default function ChangeVideoScreen() {
 //   consoleconst JsonAPI='https://nodal-linker-349809-default-rtdb.europe-west1.firebasedatabase.app/bookmark.json'
 const [indexForm, SetIndexForm]= useState(0)
 const [tempData, SetTempData]= useState({})

 const {id, imgURL, title, timeCode, currentEpisode}=useSelector(state=>state.VideosReducer.currentVideo)
 const Navigation=useNavigation()

const dispatch=useDispatch()

const renderSwitch=(indexForm)=> {
  switch(indexForm) {
    case 0:
      return ( <Step1 handleIndexForm={handleIndexForm} changeVideoData={changeVideoData}/>);
      case 1:
        return ( <Step2  videoData={currentVideo} changeVideoData={changeVideoDone}/>);
    default:
      return 'foo';
  }
}

  
const onDone=() => {


}

  return (
   
    <View style={styles.container}>

        <Text style={styles.title}>
    Select Episode
      </Text>
      <Image  source={{uri: imgURL}} style={styles.image} />
      <ScrollView>

   
      {/* <FlatList
data={getSeasons().Seasons}
renderItem={({item})=>   <SeasonGroup/>}
/> */}

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
    alignItems: 'center',
    paddingTop:40,
    justifyContent: 'center',
  height:'100%',
    backgroundColor: '#01080D'
  },
  image:{
height:260,
width:211,
borderRadius:14
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
