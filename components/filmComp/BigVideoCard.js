import { StyleSheet, Image, Text, Pressable, Dimensions  } from 'react-native';
import styled from 'styled-components/native'
//import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient'

import Clock from '../../assets/icons/clock'

let marginBlock=30

const BigVideoCard=({data, margin})=>{
//const  {imgURL, title, currentEpisode, timeCode, maxEpisodes}=data

const onClickCard=()=>{
console.log("PRESS!")
}

    return (
        <Pressable onPress={onClickCard} style={styles.container}>
        <Image 
         source={{uri: 'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/The_Batman_Poster.jpg/800px-The_Batman_Poster.jpg'
         }} style={styles.image} />

<LinearGradient colors={[ '#FD7461', '#BA4274']} start={[0,1]}
end={[1,0]} style={styles.TimeBlock}>
 {/* <View style={styles.TimeCode} > */}
          <Clock style={{marginRight:5}} width={24} height={24}/>
          <Text style={styles.text}>1:</Text>
          <Text style={styles.text}>12:</Text>
          <Text style={styles.text}>20</Text>

</LinearGradient>

<LinearGradient colors={[ '#FD7461', '#BA4274']} start={[0,1]}
end={[1,0]} style={styles.EpisodeBlock}>
          <Text style={styles.EpisodeText}>Ep8/</Text>
          <Text style={styles.EpisodeText}>44</Text>
</LinearGradient>
<LinearGradient colors={[  'rgba(10, 10, 17, 1)','rgba(10, 10, 17, 0.6)', 'rgba(10, 10, 17, 0)']} start={[0,1]}
end={[0,0.1]} style={styles.titleBlock}>
          <Text style={styles.title}>Batman 2022</Text>
          </LinearGradient>
      </Pressable>
      
    )
}

const textColor='white'

const styles = StyleSheet.create(
  
  {

    container: {
width:Dimensions.get('window').width-20,
marginRight:marginBlock
    },
    title: {
fontWeight: 'bold',
      fontSize: 30,
      color: textColor,
    },
    titleBlock:{
      width:'100%',
      bottom:0,
      padding: 30,
    //  left:30,
position: 'absolute',
   borderRadius:26,
    },
    EpisodeText:{
      fontSize: 20,
           fontWeight: 'bold',
      color: textColor,
      lineHeight:30,
      textAlign: 'center'
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: textColor,
      textAlign: 'center'
    },
    image: {
   height:244,
   borderRadius:26,
    },

    TimeBlock:{
      top:20,
      alignItems: 'center',
      flexDirection: "row",
      position: 'absolute',
      padding:6,
      //  borderWidth:  1,
      //  borderColor: 'rgba(255, 255, 255, 0.5)',
       borderBottomRightRadius:12,
       borderTopRightRadius: 12,
       blurRadius:10
    },
    EpisodeBlock:{
      top: 20,
      right: 10,
      height:93,
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      position: 'absolute',
      padding:8,
      borderRadius:26,
       blurRadius:10
    },
  });
  
  export default BigVideoCard;