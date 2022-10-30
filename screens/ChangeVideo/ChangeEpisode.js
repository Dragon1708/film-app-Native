import { StyleSheet, View,TextInput, ScrollView, Text, Pressable } from 'react-native';
import {useEffect, useState} from 'react'
import { Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient'

import NumberButtonInput from "../../components/NumberButtonInput";



export default function ChangeEpisode({CurrentEpisode, SetNewCurrentEpisode}) {
 //   consoleconst JsonAPI='https://nodal-linker-349809-default-rtdb.europe-west1.firebasedatabase.app/bookmark.json'

 const Navigation=useNavigation()

 const onChangeSeasons = (Number)=>{
 // CurrentEpisode[0]=Number
 SetNewCurrentEpisode([Number,CurrentEpisode[1]])
 }
   const onChangeEpisode = (Number)=>{
    SetNewCurrentEpisode([CurrentEpisode[0],Number ])

 }


  return (
   
    <View style={styles.container}>
   
        <Text style={styles.title}>
        Where did you stay?
      </Text>


   
      {/* <FlatList
data={getSeasons().Seasons}
renderItem={({item})=>   <SeasonGroup/>}
/> */}
<View  style={styles.InputDataContainer}>
<View  style={styles.InputContainer}>
<Text style={styles.text}>
       Select Season:
      </Text>
<NumberButtonInput ClickHandler={onChangeSeasons}
 VerticalBtnAlight={false}
 minValue={1}
 startNumber={CurrentEpisode[0]}
 />
</View>
<View  style={styles.InputContainer}>
<Text style={styles.text}>
       Select Episode:
      </Text>
<NumberButtonInput ClickHandler={onChangeEpisode}  
VerticalBtnAlight={false}
minValue={1}
startNumber={CurrentEpisode[1]}
/>
</View>
</View>

          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    // position: 'absolute',
    backgroundColor: '#01080D'
  },
  btnNext:{
    padding:10,
    borderRadius:10,
// width:Dimensions.get('window').width-60,
marginTop:20,
marginLeft:30,
marginRight:30,
  },
  InputDataContainer:{

  },
  InputContainer:{
     marginTop:10,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
textAlign: 'center',
          fontSize: 28,
          color: "#ffff",
        },
        text: {
     
      textAlign: 'center',
                fontSize: 22,
                color: "#ffff",
              },  
});
