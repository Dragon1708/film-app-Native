import { StyleSheet, Image, Text, View, Pressable  } from 'react-native';
import {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';

//import LinearGradient from 'react-native-linear-gradient';

import ListItemSelected from "../assets/icons/png/ListItemSelected.png";
import ListItemUnSelected from "../assets/icons/png/ListItemUnSelected.png";


const SelectListItem=({ClickHandler,isSelect=false, text})=>{
//const [videoData, setVideoData]= useState( data)
const selectItem=()=>{
  ClickHandler(text)

}

    return (
     <Pressable style={styles.container}  onPress={selectItem}>
   
<Image  style={styles.icon} source={isSelect? ListItemSelected : ListItemUnSelected } />
 <Text style={styles.text}>{text}</Text>

      </Pressable>
      
    )
}

const styles = StyleSheet.create(
  
  {

    container: {
      // marginLeft: 10,
      flexDirection: "row",
      marginBottom:20,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
marginLeft: 10,
      fontSize: 20,
      color: 'white',

    },
    icon: {
   width:24,
   height:24
   
  
    },
  
  });
  
  export default SelectListItem;