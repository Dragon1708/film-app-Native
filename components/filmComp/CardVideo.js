import { StyleSheet, Image, Text, View, Pressable  } from 'react-native';
import {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components/native'
//import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient'

import Clock from '../../assets/icons/clock'
import Bookmark from '../../assets/icons/BookMarked'
import AddBookmark from '../../assets/icons/NoneBookMark'



const cardVideo=({data, isTimeCode=false, isBookmark=false, isViewed=false})=>{
const  {imgURL, title, currentEpisode, timeCode, maxEpisodes}=data
//const [videoData, setVideoData]= useState( data)
const Navigation=useNavigation()

useEffect(() => {
 // videoData.imgURL= videoData.imgURL!=='' ? videoData.imgURL : 'https://images.genius.com/af1e9db30786db68b4a8698a9536a4a8.999x999x1.jpg'

},[])

const onBookmark=()=>{

}

const onClickCard=()=>{
  console.log("===================")
  Navigation.navigate('VideoDataScreen', {data})
}

    return (
        <Pressable onPress={onClickCard} style={styles.container}>
  {isTimeCode?  <View>
        <Image 
         source={{uri: imgURL!=='' ? imgURL : 'https://images.genius.com/af1e9db30786db68b4a8698a9536a4a8.999x999x1.jpg'
         }} style={styles.image} />

<LinearGradient colors={[ '#FD7461', '#BA4274']} start={[0,1]}
end={[1,0]} style={styles.StickedBlock}>
 <View style={styles.TimeCode} >
          <Clock style={{marginRight:2}} width={24} height={24}/>
          { timeCode[0]!==0? <Text style={styles.text}>{timeCode[0]+':'}</Text> : null}
          {timeCode[2]!==0?   <Text style={styles.text}>{timeCode[1]+':'}</Text>: 
          <Text style={styles.text}>{timeCode[1]}</Text> }
        { timeCode[2]!==0?  <Text style={styles.text}>{timeCode[2]}</Text> : null }
</View>
</LinearGradient>
{maxEpisodes!==1 ? 
<LinearGradient colors={[ '#FD7461', '#BA4274']} start={[0,1]}
end={[1,0]} style={styles.EpisodeBlock}>
   <LinearGradient colors={[ '#FD7461', '#BA4274']} start={[0,1]}
end={[1,0]} style={styles.TimeCode} >
      <Text style={styles.text}>{currentEpisode}</Text>  
          </LinearGradient>
</LinearGradient>
: null}
</View> : null}

{isBookmark?  <View>
  <Image 
         source={{uri:  imgURL!=='' ? imgURL : 'https://images.genius.com/af1e9db30786db68b4a8698a9536a4a8.999x999x1.jpg'
         }} style={styles.image} />
<Pressable onPress={onBookmark} style={styles.Bookmark} >
<Bookmark width={55} height={60}/>
</Pressable>
</View> : null}

{isViewed?  <View>
  <Image 
         source={{uri:  imgURL!=='' ? imgURL : 'https://images.genius.com/af1e9db30786db68b4a8698a9536a4a8.999x999x1.jpg'
         }} style={styles.image} />

<LinearGradient colors={[ '#62D85F', '#42E83F']} start={[0,1]}
end={[1,0]} style={styles.StickedBlock}>
 <View style={styles.TimeCode} >
          <Text style={styles.text}>Viewed</Text>
</View>
</LinearGradient>
</View> : null}
          <Text style={styles.title}>{title}</Text>
      </Pressable>
      
    )
}

const Time=styled.View`
display: flex;
flex-direction: row;
top: 28px;
right: 10px;
position:  absolute;
align-items: center;

`;

const widhBlock=175

const styles = StyleSheet.create(
  
  {

    container: {
      width:widhBlock,
      marginRight:26
    },
    title: {
      marginLeft: 10,
      marginTop:5,
      fontSize: 20,
      color: 'white',

    },
    text: {
   
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    },
    image: {
   height:240,
   borderRadius:12,
    },
    TimeCode:{
      maxWidth:widhBlock,
      flexDirection: "row",
      alignItems: 'center',
      borderBottomLeftRadius:12,
       borderTopLeftRadius: 12,
       textAlign: 'center',
       blurRadius:50
    },
    StickedBlock:{
  
      top: 28,
      right: -5,
      position: 'absolute',
      padding:5,
      //  borderWidth:  1,
      //  borderColor: 'rgba(255, 255, 255, 0.5)',
       borderBottomLeftRadius:12,
       borderTopLeftRadius: 12,
       blurRadius:10
    },
    EpisodeBlock:{
      top: 70,
      right: -5,
      position: 'absolute',
      padding:5,
       borderBottomLeftRadius:12,
       borderTopLeftRadius: 12,
       blurRadius:10
    },
    Bookmark:{
      flexDirection: "row",
      position: 'absolute',
      top: -15,
      right: 5,
      
    },
    Episode:{
      flexDirection: "row",
      borderWidth:  1,
      alignItems: 'center',
      textAlign: 'center',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      borderBottomLeftRadius:12,
      borderTopLeftRadius: 12
    },
    GlowEpisode:{
      top: 68,
      right: 10,
      alignItems: 'center',
      position: 'absolute',
      borderWidth:  1,
      borderColor: 'rgba(255, 255, 255, 0.5)',
      borderBottomLeftRadius:12,
      borderTopLeftRadius: 12,
      blurRadius:10
    },

  });
  
  export default cardVideo;