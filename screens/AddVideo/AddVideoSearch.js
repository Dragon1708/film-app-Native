import { StyleSheet, Image, ScrollView, TextInput, Pressable } from 'react-native';

import {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';
import { Text, View } from '../../components/Themed';



export default function AddVideoSearch({ navigation }) {
  const [text, onChangeText] = useState("Useless Text");
const Navigation=useNavigation()

const goToAddVideoScreen=()=>{
  console.log("PRRRROo")
  Navigation.navigate('InitVideoDataScreen')
}

  return (
   
    <View style={styles.container}>
        <Text style={styles.title}>
          Add Video
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
<Pressable onPress={goToAddVideoScreen} style={{marginTop:30, alignItems: 'center'}}>
<Text style={styles.title}>
      Press to AVideos!
        </Text>
</Pressable>

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
