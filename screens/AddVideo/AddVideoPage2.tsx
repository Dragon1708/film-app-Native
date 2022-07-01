import { StyleSheet, Image, ScrollView, TextInput } from 'react-native';

import {useEffect, useState} from 'react'

import axios from 'axios';
import { Text, View } from '../../components/Themed';


import { RootTabScreenProps } from '../../types';
import DB from '../../assets/DB.json'

import MiniVideoCard from "../../components/filmComp/miniVideoCard";
//import SearchIcon from '../../assets/icons/SearchIcon'


export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [text, onChangeText] = useState("Useless Text");

  return (
   
    <View style={styles.container}>
        <Text style={styles.title}>
         Pizda
        </Text>
        <View style={styles.searchContainer}>
          {/* <SearchIcon style={styles.searchIcon} width={28} height={28}/> */}
        <TextInput
        style={styles.searchInput}
        onChangeText={onChangeText}
        value={text}
      />
        </View>
       <ScrollView>
{/* <MiniVideoCard/> */}
<Text style={styles.title}>
      Press to Add Videos!
        </Text>
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
        searchInput: {
          fontSize: 22,
          borderRadius:24,
         marginLeft:30,
         marginRight:30,
             backgroundColor: '#ffff'
           },
        searchIcon:{
    width: 28,
    height:28,

        }
});
