
import { StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, Pressable } from "react-native";
import { Text, View } from "../components/Themed";
import BottomSheet, {BottomSheetView  } from "@gorhom/bottom-sheet";

import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { SetViewed, SetBookmark, SetWatching } from '../redux/slices/VideosSlice'
import { SetCategories } from '../redux/slices/Categories'

export default function UserDashboard() {
  const videos =useSelector(state=>state.VideosReducer)
  const sections =useSelector(state=>state.CategoriesReducer)
  const sheetRef = React.createRef(null);
  const [isOpen, SetIsOpen] = React.useState(false);
  const [isImportData, SetisImportData] = React.useState(false);
  const [text, OnChangetext] = React.useState('');
  const dispatch=useDispatch()
  
  const snapPoints = [ "70%"];
  
  const ExportData=()=>{
    if (isOpen) {
      sheetRef.current?.close()
    } else {
      sheetRef.current?.snapToIndex(0)
      const ExportJson={
        videos:videos,
        sections: sections
      }
      OnChangetext( JSON.stringify(ExportJson))
      SetisImportData(false)
      SetIsOpen(true)
    }
  
  }
  const ImportData=()=>{
    sheetRef.current?.snapToIndex(0)
    OnChangetext( '')
    SetisImportData(true)
  }
 
  const onConfirmed=()=>{
    if (isImportData) {
     const data= JSON.parse(text)
     dispatch(SetWatching(data.videos.watching))
     console.log(data.sections.categories)
    dispatch(SetCategories(data.sections.categories))
     
     console.log(data.videos.watching[0].AllEpisodes)
    }
    sheetRef.current?.close()
   
  }

  return (
    <View style={styles.container}>
       <ScrollView  >
       <Image  source={{uri: 'https://m.media-amazon.com/images/M/MV5BMzUyNDg0NTQ2N15BMl5BanBnXkFtZTgwMzIyOTc5MjE@._V1_.jpg' }}
        style={styles.avatar} />

<View style={styles.Togglecontainer}>
<TouchableOpacity style={styles.BlackButton} onPress={ExportData} >
  <Text style={{...styles.title}}>Export Data</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.BlackButton} onPress={ImportData} >
  <Text style={{...styles.title}}>Import Data</Text>
</TouchableOpacity>
</View>
      

       </ScrollView>
       <BottomSheet ref={sheetRef} snapPoints={snapPoints} 
onClose={()=>SetIsOpen(false)}
enablePanDownToClose={true} 
index={-1}>
         <BottomSheetView style={{backgroundColor:"#1D1D27", height: "100%",  flex:1,   }}>
  <Text style={styles.inputLabel}>
  Select section
  </Text>
  <TextInput
        style={styles.textInput}
        onChangeText={OnChangetext}
        value={text}
        multiline={true}

      />
      <View style={{alignItems: 'center',width:"100%",  
       position: 'absolute', 
       bottom: 20,
       backgroundColor:0,
       }}>
      <TouchableOpacity onPress={onConfirmed} style={styles.BlackButton}>
<Text style={{...styles.title,marginTop: 0,   textAlign: 'center',  marginBottom:0, padding:20}}>
      Apply
        </Text>

</TouchableOpacity>
      </View>
   
  </BottomSheetView>
</BottomSheet>
 </View>)
//       <ScrollView>
//        <Text style={styles.title}>  Recent</Text>
//        <FlatList
// data={sections}
// renderItem={({item})=> <SectionGroup 
// title={item.title} 
// isBookmark
// // VideoData={data.timeCodes.filter(el=> el.sectionID ==item.id)} 
// videos={videos.filter(index=>index.categoriesID.includes(item.id) )}

// />}
// />
//        </ScrollView>
   

}

const styles = StyleSheet.create({
  container: {
    // flex: 1
    height:"100%",
     alignItems: "center",
    //  justifyContent: "center",
    
     backgroundColor: '#1D1D27'
  },
  Togglecontainer:{
    marginTop:30,
backgroundColor:0,
width: 300
  },
  avatar:{
    // marginLeft:40,
    marginTop:30,
    // paddingLeft:30,
height:120,
width: "100%",
borderRadius:26,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
    color: '#FFFFFF',
    paddingTop: 10,
    paddingBottom: 10
    
  },
  textInput:{
    padding:10,
     height: "80%",
    color: '#FFFFFF',
    fontSize: 16,
  },
  BlackButton:{

    marginTop:20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius:16,
backgroundColor: '#1D1D27',
  },
  BottomSheet__btn:{

  }
});
