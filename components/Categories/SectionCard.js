import { StyleSheet, Image, Text, View, Pressable,Dimensions  } from 'react-native';

//import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient'



const SectionCard=()=>{
  //  const  {imgURL, title, currentEpisode, timeCode, maxEpisodes}=data

const onClickCard=()=>{
  console.log("PRESS!")
  }
  
      return (
    //       <Pressable onPress={onClickCard} style={styles.container}>
    // <Text style={styles.title}>Ananas</Text>
    //     </Pressable>
    
    <LinearGradient colors={[ '#FD7461', '#BA4274']} start={[0,1]}
    end={[1,0]}  style={styles.container}>
             <Pressable onPress={onClickCard}>
             
  <Text style={styles.title}>Ananas</Text>

                 </Pressable>
                 </LinearGradient>
      )
  }
  
  const textColor='white'
  
  const styles = StyleSheet.create(
    
    {
      container: {

        marginBottom:18,
      borderRadius:18,
   height:90,
   width:187,
      padding:6,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1F1F32'
      },
      title: {
 // fontWeight: 'bold',
        fontSize: 22,
        color: textColor,
      },
    });
      
      export default SectionCard;