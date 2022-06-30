import { StyleSheet, Image, Text, View, Pressable  } from 'react-native';
import styled from 'styled-components/native'
//import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient'

import Clock from '../../assets/icons/clock'
import Bookmark from '../../assets/icons/BookMarked'
import AddBookmark from '../../assets/icons/NoneBookMark'



const cardVideo=({data, isTimeCode=false, isBookmark=false, isViewed=false})=>{
const  {imgURL, title, currentEpisode, timeCode, maxEpisodes}=data


const onBookmark=()=>{

}

const onClickCard=()=>{
console.log("PRESS!")
}

    return (
        <Pressable onPress={onClickCard} style={styles.container}>
  {isTimeCode?  <View>
        <Image 
         source={{uri: 'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/The_Batman_Poster.jpg/800px-The_Batman_Poster.jpg'
         }} style={styles.image} />

<LinearGradient colors={[ '#FD7461', '#BA4274']} start={[0,1]}
end={[1,0]} style={styles.StickedBlock}>
 <View style={styles.TimeCode} >
          <Clock style={{marginRight:2}} width={24} height={24}/>
          <Text style={styles.text}>1:</Text>
          <Text style={styles.text}>12:</Text>
          <Text style={styles.text}>20</Text>
</View>
</LinearGradient>

<LinearGradient colors={[ '#FD7461', '#BA4274']} start={[0,1]}
end={[1,0]} style={styles.EpisodeBlock}>
   <LinearGradient colors={[ '#FD7461', '#BA4274']} start={[0,1]}
end={[1,0]} style={styles.TimeCode} >
          <Text style={styles.text}>8</Text>
          </LinearGradient>
</LinearGradient>
</View> : null}

{isBookmark?  <View>
        <Image 
         source={{uri: 'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/The_Batman_Poster.jpg/800px-The_Batman_Poster.jpg'
         }} style={styles.image} />
<Pressable onPress={onBookmark} style={styles.Bookmark} >
<Bookmark width={55} height={60}/>
</Pressable>
</View> : null}

{isViewed?  <View>
        <Image 
         source={{uri: 'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/The_Batman_Poster.jpg/800px-The_Batman_Poster.jpg'
         }} style={styles.image} />

<LinearGradient colors={[ '#62D85F', '#42E83F']} start={[0,1]}
end={[1,0]} style={styles.StickedBlock}>
 <View style={styles.TimeCode} >
          <Text style={styles.text}>Viewed</Text>
</View>
</LinearGradient>
</View> : null}
          <Text style={styles.title}>Bata44</Text>
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