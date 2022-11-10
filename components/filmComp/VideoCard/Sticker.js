import { StyleSheet, Image, Text, View, Pressable  } from 'react-native';
import {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';

//import LinearGradient from 'react-native-linear-gradient';




const Sticker=({timeCode, currentEpisode})=>{
//const [videoData, setVideoData]= useState( data)

    return (
     <View style={{   borderBottomLeftRadius:12,
      borderTopLeftRadius: 12,
      backgroundColor: "#1D1D27",
      marginBottom:6,
     Left: -20
      }}>
   
   { timeCode ?
   <View style={styles.TimeCode}>
<Image source={require('../../../assets/icons/clockPNG.png')} />
 <Text style={styles.text}>{`${timeCode[0]!==0? `${timeCode[0]}:` :``} ${timeCode[1]}: ${timeCode[2]}`}</Text>
   </View> :  <Text style={styles.text}>{currentEpisode[1]}</Text>
  
   }
      </View>
      
    )
}



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
      padding:4,
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
   
       textAlign: 'center',
     padding:4
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
  
  export default Sticker;