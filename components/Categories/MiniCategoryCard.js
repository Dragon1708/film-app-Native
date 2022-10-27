import { StyleSheet, Image, Text, View, Pressable,Dimensions  } from 'react-native';
import React from 'react'
//import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient'




const miniCategoryCard=({categoryData, SelectedCategory, unSelectCategory})=>{
  //  const  {imgURL, title, currentEpisode, timeCode, maxEpisodes}=data
const [isSelected, SetIsSelected]= React.useState(false)

const onClickCard=()=>{
  if (isSelected) {
    unSelectCategory(categoryData)
  } else {
    SelectedCategory(categoryData)

  }
  SetIsSelected(!isSelected)
  }
  
      return (
        
          <Pressable onPress={onClickCard} style={styles.container}>
        { isSelected? <LinearGradient colors={['#FF2C7D', '#FF59AA']}
        start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{  borderRadius:16,}}>
<Text style={styles.title}>{categoryData.title}</Text>
        </LinearGradient>:
        <Text style={styles.title}>{categoryData? categoryData.title :null}</Text>
        }

        </Pressable>
        
      )
  }
  
  const textColor='white'
  
  const styles = StyleSheet.create(
    
    {
      container: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius:16,
backgroundColor: '#1D1D27',
marginBottom:20
      },
      title: {
        paddingTop:26,
        paddingBottom:26,
 // fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        color: textColor,
      },
    });
      
      export default miniCategoryCard;