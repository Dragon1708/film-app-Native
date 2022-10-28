import { StyleSheet, Image, Text, View, Pressable,Dimensions  } from 'react-native';
import React from 'react'
//import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient'




const CategoryCard=({categoryData, 
  SelectedCategory,
   unSelectCategory, 
   isSelected=false,
  isClickable=true})=>{
  //  const  {imgURL, title, currentEpisode, timeCode, maxEpisodes}=data
const [isClicked, SetIsClicked]= React.useState(isSelected)

const onClickCard=()=>{
  if (isClickable) {
    if (isClicked) {
      unSelectCategory(categoryData)
    } else {
      SelectedCategory(categoryData)
  
    }
    SetIsClicked(!isSelected)
  }
  }
  
      return (
        
          <Pressable onPress={onClickCard} style={styles.container}>
        { isClicked? <LinearGradient colors={['#FF2C7D', '#FF59AA']}
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
      
      export default CategoryCard;