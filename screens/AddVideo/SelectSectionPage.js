import { StyleSheet, Image, ScrollView, TextInput, Pressable } from 'react-native';

import {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';
import { Text, View } from '../../components/Themed';


import { RootTabScreenProps } from '../../types';
import DB from '../../assets/DB.json'

import SectionCard from "../../components/Categories/SectionCard";
//import SearchIcon from '../../assets/icons/SearchIcon'


export default function SelectSectionPage({ navigation }) {
  const [text, onChangeText] = useState("Useless Text");
//const Navigation=useNavigation()

const goToAddVideoScreen=()=>{
  console.log("PRRRROo")
 // Navigation.navigate('AddVideoScreen')
}

  return (
   
    <View style={styles.container}>
       <Pressable onPress={goToAddVideoScreen} style={styles.addSectionBTN}>
{/* <Text style={styles.title}>
  Add SectionCard
</Text> */}
        </Pressable>
       <ScrollView style={styles.columnContainer}>
<SectionCard/>
<SectionCard/>
<SectionCard/>
      </ScrollView>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft:10,
    paddingRight:10,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#1D1D27'
  },
  title: {
    fontWeight: 'bold',
          fontSize: 28,
          color: "#ffff",
          marginBottom:16
        },
        searchContainer:{
       //   alignItems: 'center',
          justifyContent: 'center',
          borderRadius:24,
height:58,
        },
        addSectionBTN: {

           },
           columnContainer:{
  flexDirection: "column",
        }
});
