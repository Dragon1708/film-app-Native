import { StyleSheet, Image, Text, View, Pressable,Dimensions  } from 'react-native';

//import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient'

import Point from '../../assets/icons/point'


const miniCategoryCard=()=>{
  //  const  {imgURL, title, currentEpisode, timeCode, maxEpisodes}=data

const onClickCard=()=>{
  console.log("PRESS!")
  }
  
      return (
          <Pressable onPress={onClickCard} style={styles.container}>
    <Text style={styles.title}>Ananas</Text>
        </Pressable>
        
      )
  }
  
  const textColor='white'
  
  const styles = StyleSheet.create(
    
    {
      container: {
        marginRight:8,
      borderRadius:18,
      borderWidth:  1,
      borderColor: textColor,
      padding:6,
      alignItems: 'center',
      justifyContent: 'center',
      },
      title: {
 // fontWeight: 'bold',
        fontSize: 22,
        color: textColor,
      },
    });
      
      export default miniCategoryCard;