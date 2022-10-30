import { StyleSheet, View,Image, TouchableOpacity, Text, Pressable } from 'react-native';
import {useEffect, useState} from 'react'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient'

import ChangeEpisode from "../ChangeVideo/ChangeEpisode"
import ChangeTime from "../ChangeVideo/ChangeTime"
import {UpdateWatchingVideo  } from "../../redux/slices/VideosSlice";


export default function UpdateVideoScreen() {
 //   consoleconst JsonAPI='https://nodal-linker-349809-default-rtdb.europe-west1.firebasedatabase.app/bookmark.json'
 const [indexForm, SetIndexForm]= useState(0)



 const Video=useSelector(state=>state.VideosReducer.currentVideo)
 const Navigation=useNavigation()
 const [NewCurrentEpisode, SetNewCurrentEpisode]= useState([Video.currentEpisode[0],Video.currentEpisode[1]])
 const [NewTimeCode, SetNewTimeCode]= useState([Video.timeCode[0],Video.timeCode[1], Video.timeCode[2]])

const dispatch=useDispatch()



const changeVideoData = (NewData) => {

}

const renderSwitch=(indexForm)=> {
  switch(indexForm) {
    case 0:
      return ( <ChangeEpisode CurrentEpisode={NewCurrentEpisode} SetNewCurrentEpisode={SetNewCurrentEpisode}/>);
      case 1:
        return ( <ChangeTime  TimeCode={NewTimeCode} SetNewTimeCode={SetNewTimeCode}/>);
    default:
      return 'foo';
  }
}
const GoToNextStep=() => {
  if (indexForm==1) {
const UpdatedVideo={
...Video,
timeCode:NewTimeCode,
currentEpisode:NewCurrentEpisode,
updatedTime: Date.now()
}
// console.log(UpdatedVideo)

    dispatch(UpdateWatchingVideo(UpdatedVideo))
   Navigation.navigate('Home')
  } else{
     SetIndexForm(indexForm+1)
    console.log(NewCurrentEpisode)
  }

  }
  


  return (
   
    <View style={styles.container}>

<View style={{marginBottom:40, marginTop:"-40%" }}>
<Text style={styles.title}>
 {Video.title}
      </Text>
      <Image  source={{uri: Video.imgURL}} style={styles.image} />
</View>
     
      {renderSwitch(indexForm)}

      <View style={styles.toggleBlock}>
      
      <Pressable onPress={()=>  Navigation.goBack()} style={styles.cancelBTN}>
    
     <Text style={styles.cancelBTN_text}>
    Cancel
      </Text>
     
      </Pressable>
      
      <TouchableOpacity onPress={GoToNextStep} style={styles.applyBTNwrapper}>
      <LinearGradient colors={['#FF2C7D', '#FF59AA']}
           start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.applyBTN}>
     <Text style={styles.applyBTN_text}>
   Next
      </Text>
    </LinearGradient>
     
      </TouchableOpacity>
         </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    //  paddingTop:40,
    
    justifyContent: 'center',
  height:'100%',
    backgroundColor: '#01080D'
  },
  image:{
    marginTop:16,
height:260,
width:211,
borderRadius:14
  },
  btnNext:{
    padding:10,
    borderRadius:10,
// width:Dimensions.get('window').width-60,
marginTop:20,
marginLeft:30,
marginRight:30,
  },
  title: {
    fontWeight: 'bold',
textAlign: 'center',
          fontSize: 28,
          color: "#ffff",
        },
        toggleBlock:{
          bottom:0,
          position: 'absolute',
alignItems: 'center',
backgroundColor: '#01080D',
flexDirection: "row",
justifyContent:'space-between',
marginBottom:26
        },
        cancelBTN:{
    left:-30,
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
          width: '60%',
          right:-40,
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
