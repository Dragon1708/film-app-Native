import { StyleSheet, Image, TextInput, View, TouchableOpacity  } from 'react-native';
import {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';

import {LinearGradient} from 'expo-linear-gradient'

import plus from "../assets/icons/png/plus.png";
import Minus from "../assets/icons/png/Minus.png";


const NumberButtonInput=({ClickHandler,startNumber, VerticalBtnAlight=true, minValue=0, maxValue})=>{
//const [videoData, setVideoData]= useState( data)
startNumber?  startNumber : startNumber=minValue

const [Number, onChangeNumber] = useState(startNumber.toString());

const MinusNumber=()=>{
  if (parseInt(Number)!==minValue) {
    onChangeNumber((parseInt(Number)-1).toString())
    ClickHandler(parseInt(Number)-1)
  }

}
const PlusNumber=()=>{
  if (maxValue) {
    if (parseInt(Number) <maxValue) {

      onChangeNumber((parseInt(Number)+1).toString())
      ClickHandler(parseInt(Number)+1)
    }
    else {
      onChangeNumber(maxValue.toString())
      ClickHandler(maxValue)
    }
  } else {
    onChangeNumber((parseInt(Number)+1).toString())

    ClickHandler(parseInt(Number)+1)
  }
  console.log(Number)
}
const onChangeNum = (value)=>{

  if (maxValue) {
    if (value <maxValue) {
      onChangeNumber(value===''? minValue : value)
      ClickHandler(parseInt(value===''? minValue : value))
    } else{
      onChangeNumber(maxValue)
      ClickHandler(parseInt(maxValue))
    }

  } else{
    onChangeNumber(value===''? minValue : value)
    ClickHandler(parseInt(value===''? minValue : value))
  }

}

    return (
      <View>
  { VerticalBtnAlight? 
        <View style={ styles.Verticalcontainer}>
    
    <TouchableOpacity   onPress={PlusNumber}>
    <LinearGradient colors={['#FF2C7D', '#FF59AA']}
               start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.buttonPlus}>
    
    <Image  style={styles.icon} source={plus } />
    
               </LinearGradient>
               </TouchableOpacity>
      
          <TextInput
      style={styles.textInput}
      onChangeText={onChangeNum}
      value={Number}
      keyboardType="numeric"
    />
               <TouchableOpacity style={styles.buttonMinus}  onPress={MinusNumber}>
    <Image  style={styles.icon} source={Minus } />
          </TouchableOpacity>
          </View>  : 

           <View style={styles.Horizontalcontainer}>
      
         <TouchableOpacity style={styles.buttonMinus}  onPress={MinusNumber}>
      <Image  style={styles.icon} source={Minus } />
            </TouchableOpacity>
          
        
            <TextInput
        style={styles.textInput}
        onChangeText={onChangeNum}
        value={Number}
        keyboardType="numeric"
      />
      <TouchableOpacity   onPress={PlusNumber}>
      <LinearGradient colors={['#FF2C7D', '#FF59AA']}
                 start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.buttonPlus}>
      
      <Image  style={styles.icon} source={plus } />
      
                 </LinearGradient>
                 </TouchableOpacity>
            </View> 
      }
      </View>

    )
}

const styles = StyleSheet.create(
  
  {

    VerticalBtnAlight: {
      // marginLeft: 10,
      // flexDirection: "row",
      // marginBottom:20,
      alignItems: "center",
      // justifyContent: "center",
    },
    Horizontalcontainer: {
       marginLeft: 10,
      flexDirection: "row",
      // marginBottom:20,
      alignItems: "center",
      // justifyContent: "center",
    },
    textInput:{
      borderRadius:6,
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: 'rgba(118, 118, 128, 0.22)',
      height:52,
      width:60,
      fontSize: 20,
      textAlign: 'center',
      color: "#ffff",
      paddingLeft:16,
      paddingRight:16,
    },
    text: {
marginLeft: 10,
      fontSize: 20,
      color: 'white',

    },
    icon: {
   width:30,
   height:30,

    },
    buttonMinus:{
backgroundColor: '#1D1D27',
borderRadius:6,

    },
    buttonPlus:{

      borderRadius:6,
    }
  
  });
  
  export default NumberButtonInput;