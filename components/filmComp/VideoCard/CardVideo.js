import { StyleSheet, Image, Text, View, Pressable  } from 'react-native';
import {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux'
import { SetCurrentVideo } from '../../../redux/slices/VideosSlice'

//import LinearGradient from 'react-native-linear-gradient';
import Sticker from "./Sticker";


import Clock from '../../../assets/icons/clock.svg'
import unBookmark from '../../../assets/icons/png/unBookmarkPNG.png'
import AddBookmark from '../../../assets/icons/NoneBookMark.svg'



const cardVideo=({data, isTimeCode=false, isBookmark=false, isViewed=false})=>{

const  {imgURL, title, timeCode, currentEpisode}=data
//const [videoData, setVideoData]= useState( data)
const dispatch=useDispatch()
const Navigation=useNavigation()

const onBookmark=()=>{

}

const onClickCard=()=>{

  // Navigation.navigate('VideoDataScreen', {data})
  dispatch(SetCurrentVideo({...data}))
  Navigation.navigate('VideoDataScreen')
  
}

    return (
        <Pressable onPress={onClickCard} style={styles.container}>
              <Image 
         source={{uri: imgURL!=='' ? imgURL : 'https://images.genius.com/af1e9db30786db68b4a8698a9536a4a8.999x999x1.jpg'
         }} style={styles.image} />
  {isTimeCode? 
         <View style={styles.StickedBlock}>
         <Sticker 
          timeCode={timeCode}/>
       <Sticker currentEpisode={currentEpisode}/>
         </View> : null}

{isBookmark?  <View style={styles.Bookmark} >
<Pressable onPress={onBookmark}  >
<Image source={unBookmark} />
</Pressable>
</View> : null}

{isViewed?  
 <View style={styles.ViewedSticker} >
          <Text style={styles.text}>Viewed</Text>
</View> : null}
          <Text style={styles.title}>{title}</Text>
      </Pressable>
      
    )
}



const widhBlock=175

const styles = StyleSheet.create(
  
  {

    container: {
      width:widhBlock,
      marginRight:26,
      position: 'relative',
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
    ViewedSticker:{
      borderRadius: 6,
      top: 30,
      right: -5,
      padding:6,
      backgroundColor: "#41DB3E",
      position: 'absolute',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      marginBottom:6
    }

  });
  
  export default cardVideo;