import { StyleSheet, Image, ScrollView, FlatList, Pressable } from 'react-native';
import {useEffect, useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';

import axios from 'axios';
import { Text, View } from '../components/Themed';

import {saveData, loadData} from '../components/SaveLoadData'
import {LinearGradient} from 'expo-linear-gradient'

import Arrow from "../assets/icons/arrow";


export default function VideoDataScreen() {
 //   consoleconst JsonAPI='https://nodal-linker-349809-default-rtdb.europe-west1.firebasedatabase.app/bookmark.json'
const route=useRoute()
const Navigation=useNavigation()
const {id, imgURL, title, SeasonData, timeCode, EpisodeData}=route.params.data
const allData=route.params.data
// console.log(id)
const onDelete=() => {
  loadData().then(function (data) {
    let NewData=data
    NewData.timeCodes.splice(NewData.timeCodes.findIndex(item => item.id ===id), 1)
  saveData(NewData)
  // console.log( NewData.timeCodes)
    Navigation.navigate('HomeScreen')
    })
}
const UpdateTime=() => {
  Navigation.navigate('ChangeTime', {allData})
}

  return (
   
    <View style={styles.container}>
    <Image 
         source={{uri: imgURL!=='' ? imgURL : 'https://images.genius.com/af1e9db30786db68b4a8698a9536a4a8.999x999x1.jpg'
         }} style={styles.image} />
             <View style={styles.titleContainer}>
             <Text style={styles.title}>
            {title}
         </Text>
             </View>
             {SeasonData[1]!==1 ?
   <View style={styles.epsContainer}>
   <Text style={styles.epsText}>
   {'S'+SeasonData[0]+'|Ep'+EpisodeData[0]}
</Text>
   </View> : null}
          
             <LinearGradient colors={[  'rgba(10, 10, 17, 1)','rgba(10, 10, 17, 0.6)', 'rgba(10, 10, 17, 0)']} start={[0,1]}
end={[0,0.1]} style={styles.bottomBlack}>
      
          </LinearGradient>

             <View style={styles.timeContainer}>
{timeCode[0]!==0 ?
             <View style={styles.hourContainer}>
             <Text style={styles.timeTitle}>
           {timeCode[0]}
         </Text>
         <Text style={styles.timeSubTitle}>
           hour
         </Text>
             </View>: null}
             {timeCode[0]!==0 ?
             <View style={styles.hourContainer}>
             <Text style={styles.timeTitle}>
           :
         </Text>
         <Text style={styles.timeSubTitle}>
          
         </Text>
             </View> : null}
             <View style={styles.hourContainer}>
             <Text style={styles.timeTitle}>
             {timeCode[1]}
         </Text>
         <Text style={styles.timeSubTitle}>
           min
         </Text>
         
             </View>
             {timeCode[2]!==0 ?
             <View style={styles.hourContainer}>
             <Text style={styles.timeTitle}>
           :
         </Text>
         <Text style={styles.timeSubTitle}>
         </Text>
             </View> : null}
             {timeCode[2]!==0 ?
             <View style={styles.hourContainer}>
             <Text style={styles.timeTitle}>
             {timeCode[2]}
         </Text>
         <Text style={styles.timeSubTitle}>
           sec
         </Text>
             </View> : null}
           </View>
           <View style={styles.toggleContainer}>
           <Pressable onPress={UpdateTime} >
           <LinearGradient colors={[ '#FD7461', '#BA4274']} start={[0,1]}
end={[1,0]} style={styles.btnUpdate}>
          <Text style={{  ...styles.timeTitle,  fontSize: 30,}}>Update</Text>
</LinearGradient>
           </Pressable>
           <Pressable onPress={onDelete} >
           <LinearGradient colors={[ '#FD7461', '#BA4274']} start={[0,1]}
end={[1,0]} style={styles.btnDelete}>
  <Arrow width={40} height={40}/>
</LinearGradient>
           </Pressable>
           </View>
          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D1D27'
  },
  image:{
    height:"100%",
  },
  epsContainer:{

    alignItems: 'center',
 //   left: -20,
    top:"44%",
    backgroundColor: "#1D1D27",
    padding:20,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    shadowOffset: { width: 10, height: 10 },
  shadowColor: 'black',
  shadowOpacity: 1,
  elevation: 3,
  },
  titleContainer:{
    width:'80%',
    alignItems: 'center',
    left: -20,
    top:"20%",
    backgroundColor: "#1D1D27",
    padding:25,
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
    position: 'absolute',
    shadowOffset: { width: 10, height: 10 },
  shadowColor: 'black',
  shadowOpacity: 1,
  elevation: 3,
  },
  title: {
textAlign: 'center',
    fontWeight: 'bold',
          fontSize: 50,
          color: "#ffff",
    
        },
        epsText:{
          textAlign: 'center',
         
          fontSize: 40,
          color: "#ffff",
        },
////////////
bottomBlack:{
  position: 'absolute',
  bottom: 0,
  height: 400,
  width:'100%',
},
        timeContainer:{
          paddingLeft:10,
    paddingRight:10,
          position: 'absolute',
        //  justifyContent: 'center',
          flexDirection: "row",
          maxWidth: 300,
        //  top: 50,
    left: '12%',
    right: 0,
    bottom: 180,
backgroundColor: 0,
          alignItems: "center",
         // justifyContent: "center",
         justifyContent: 'space-between',
        },
        hourContainer:{
          alignItems: "center",
          backgroundColor: 0,
        },
        timeTitle:{
          color: "#ffff",
          fontWeight: 'bold',
          fontSize: 60,
          textAlign: 'center',
        },
        timeSubTitle:{
          textAlign: 'center',
          fontSize: 20,
          color:'rgba(255, 255, 255, 0.5)',
        },
  ///////////////////
  toggleContainer:{
    backgroundColor: 0,
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: "center",
    paddingLeft:20,
    paddingRight:10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  btnUpdate:{
    borderRadius:28,
    padding:25,
    left: 90,
  },
  btnDelete:{
    borderRadius:28,
    padding:25,

  },

});
