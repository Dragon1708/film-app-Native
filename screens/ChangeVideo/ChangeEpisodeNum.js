import { StyleSheet, Image, ScrollView, FlatList, Pressable } from 'react-native';
import {useEffect, useState} from 'react'



export default function ChangeTime({ navigation }) {
 //   consoleconst JsonAPI='https://nodal-linker-349809-default-rtdb.europe-west1.firebasedatabase.app/bookmark.json'
const [data, setData]= useState( loadData().then(function (data) {
return data
}))


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
        <Text style={styles.title}>
          Recent
        </Text>
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
