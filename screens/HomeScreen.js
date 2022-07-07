import { StyleSheet, Image, ScrollView, FlatList, Pressable } from 'react-native';
import {useEffect, useState} from 'react'
import axios from 'axios';
import { Text, View } from '../components/Themed';
import {saveData, loadData} from '../components/SaveLoadData'

import SectionGroup from "../components/filmComp/SectionGroup";
import BannerSection from '../components/filmComp/BannerSection';

import { RootTabScreenProps } from '../types';
import DB from "../assets/DB.json";


export default function HomeScreen({ navigation }) {
 //   consoleconst JsonAPI='https://nodal-linker-349809-default-rtdb.europe-west1.firebasedatabase.app/bookmark.json'
const [data, setData]= useState( loadData().then(function (data) {
return data
}))

  useEffect(() => {
    console.log( Date.now())
    loadUserData()
 //   loadUserData()
    // axios.post(JsonAPI,     {
    //   id: "032",
    //   imgURL: "https://m.media-amazon.com/images/M/MV5BODZlYjQ4NzYtZTg1MC00NGY4LTg4NjQtNGE3ZjRkMjk3YjMyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1029_.jpg",
    //   title: "Docktor 44",
    //   currentEpisode: 1,
    //   maxEpisodes: 1,
    //   updateDate: Date.now(),
    //   timeCode: [0, 21, 10],
    //   sectionID: 0,
    //   categoryIDs: [0,2]
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });


    // axios.get(JsonAPI)
    // .then(({data}) => {
    //   console.log(data[0]["timeCode"][2]);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })
  },[])

const testSave=() => {
  saveData(DB)
//console.log(DB)
}

const loadUserData= () => {
  loadData().then(function (data) {
    setData(data)
// data.sections[0]
console.log(data.timeCodes[0].id)
    console.log()
  })
}

  return (
   
    <View style={styles.container}>
       <ScrollView>
        <Text style={styles.title}>
          Recent
        </Text>
       <BannerSection />
<FlatList
data={data.sections}
renderItem={({item})=> <SectionGroup 
title={item.Name} 
VideoData={data.timeCodes.filter(el=> el.sectionID ==item.id)} 
isTimeCode={true}
/>}
/>
        <Pressable onPress={testSave} style={{marginTop:20}}>
     <Text style={styles.title}>
          Save!
        </Text>
     </Pressable>
     <Pressable onPress={loadUserData} style={{marginTop:20}}>
     <Text style={styles.title}>
         Load!
        </Text>
     </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  //  paddingLeft:10,
  //  paddingRight:10,
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
});
