import { StyleSheet,
   Image,
  ScrollView, 
  TextInput,
  Pressable,
   TouchableOpacity,
  Modal } from 'react-native';
import {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
//import RNFS from 'react-native-fs';

import { Text, View } from '../../components/Themed';
import ArrowPNG from "../../assets/icons/png/ArrowPNG.png";

import {LinearGradient} from 'expo-linear-gradient'
import {SetSelectedVideoCategories} from '../../redux/slices/Categories'
import CategoryCard from "../../components/Categories/CategoryCard";
import ListSelectItemPopup from "../../components/ListSelectItemPopup";
import { AddVideoToWatching, AddVideoToBookmark, AddVideoToViewed} from '../../redux/slices/VideosSlice'
//import SearchIcon from '../../assets/icons/SearchIcon'


export default function InitVideoDataScreen({ navigation }) {

  // const SelectedSections  =useSelector(state=>state.selectedVideoCategories)
  const SelectedSections =useSelector(state=>state.CategoriesReducer.selectedVideoCategories)
  const StatusesWatching =useSelector(state=>state.VideosReducer.statuses)

  const ZeroCategoryID =useSelector(state=>state.CategoriesReducer.categories)[0].id
  const Navigation=useNavigation()
  const dispatch=useDispatch()
  const [Title, onChangeTitle] = useState("");
  const [posterURL, onChangePosterURL] = useState("");
  const [NumEpisodes, onChangeNumEpisodes] = useState("");
  const   TogglePopup= useState(false )
  const [SelectStatusWatching, SetSelectStatusWatching] = useState(StatusesWatching[0]);
  
const onSelectCategories=()=>{
  Navigation.navigate('SelectCategoryPage')
}

const PopupHandler=(SelectedItem)=>{
  SetSelectStatusWatching(SelectedItem)
}
const OpenPopup=()=>{
  TogglePopup[1](true)
}

const AddVideo=()=>{
const NewVideo={
imgURL:posterURL===''? 'https://images.genius.com/af1e9db30786db68b4a8698a9536a4a8.999x999x1.jpg':posterURL ,
title:Title,
currentEpisode:[1,1],
timeCode:[0,0,0],
categoriesID:[...SelectedSections.map((el)=>el.id), ZeroCategoryID],
AllEpisodes:[[NumEpisodes? NumEpisodes: 1],
NumEpisodes? NumEpisodes: 1],
updatedTime:Date.now(),
isUserCreated:true
}
console.log(SelectStatusWatching,'===',StatusesWatching[1])
switch (SelectStatusWatching) {
  case StatusesWatching[0]:
    dispatch(AddVideoToWatching(NewVideo))
    break;
    case StatusesWatching[1]:
      dispatch(AddVideoToBookmark(NewVideo))
  
      break;
      case StatusesWatching[2]:
        dispatch(AddVideoToViewed(NewVideo))
        break;

  default:
    break;
}
dispatch(SetSelectedVideoCategories([]))
Navigation.navigate('Home')

}
const CancelAddVideo=()=>{
  dispatch(SetSelectedVideoCategories([]))
  Navigation.goBack()
}

// const onSubmit=(data)=>{
//   const {hour,min, sec }=data
//   dispatch(UpdateCurrentVideo({
//     timeCode:[
//       hour===''? 0 : parseInt(hour),
//       min===''? 0 : parseInt(min),
//       sec===''? 0 : parseInt(sec)
//     ]
//   }
//   ))
// handleIndexForm(1)
// }
  return (
   
    <View style={styles.container}>
      
        <Text style={styles.title}>
         Add video
        </Text>
        <ScrollView style={styles.ScrollView}>
        <View style={styles.AddImageWrapper}>
        <Image 
         source={{uri: posterURL
         }} style={styles.poster} />
          <View style={styles.TextInputContainer}>
          <Text style={styles.inputTitle}>
         Add Image URL
        </Text>
        <TextInput
        style={{
          marginTop: 10,
          borderRadius:16,
          backgroundColor: 'rgba(118, 118, 128, 0.12)',
          height:52,
          color: "#ffff",
          paddingLeft:16,
          paddingRight:16,
 
          height: 164,
        }}
        multiline = {true}
numberOfLines = {4}
        onChangeText={onChangePosterURL}
        value={posterURL}
      />
          </View>
        
        </View>
        <View style={styles.inputContainer}>
    
    <Text style={styles.inputTitle}>
   Name
  </Text>
  
  <TextInput
  style={styles.textInput}
  onChangeText={onChangeTitle}
  value={Title}
/>
  </View>

  <View style={styles.episodeContainer}>
    
    <Text style={styles.inputTitle}>
    Number of episodes:
  </Text>
  <TextInput
  style={styles.textInputEpisodes}
  onChangeText={onChangeNumEpisodes}
  value={NumEpisodes}
  keyboardType="numeric"
/>
  </View>
<TouchableOpacity style={styles.BlackButton} onPress={OpenPopup} >
  <Text style={{...styles.inputTitle, padding:20}}>{SelectStatusWatching}</Text>
</TouchableOpacity>

<ListSelectItemPopup ClickHandler={PopupHandler} 
TextData={StatusesWatching}
TogglePopup={TogglePopup}/>

  <TouchableOpacity onPress={onSelectCategories} style={styles.selectSectionBTN}>
  <LinearGradient colors={['#FF2C7D', '#FF59AA']}
           start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.gradientBlock}>
 <Text style={styles.inputTitle}>
  Select section
  </Text>
  <Image source={ArrowPNG} />
</LinearGradient>
 
  </TouchableOpacity>
<View style={{backgroundColor:0, marginTop:20}}>
  {
    SelectedSections.map((el) =>{
      return <CategoryCard categoryData={el} 
      isClickable={false} />
     })
  }
</View>
  
      </ScrollView>

      <View style={styles.toggleBlock}>
      
      <Pressable onPress={CancelAddVideo} style={styles.cancelBTN}>
    
     <Text style={styles.cancelBTN_text}>
    Cancel
      </Text>
     
      </Pressable>
      
      <Pressable onPress={AddVideo} style={styles.applyBTNwrapper}>
      <LinearGradient colors={['#FF2C7D', '#FF59AA']}
           start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.applyBTN}>
     <Text style={styles.applyBTN_text}>
     Apply
      </Text>
    </LinearGradient>
     
      </Pressable>
         </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  //  marginTop:80,
height:"100%",
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#1D1D27'
  },
  ScrollView:{
    paddingLeft:10,
    paddingRight:10,
  },
  AddImageWrapper:{
    flexDirection: "row",
    backgroundColor: 0,
  },
  TextInputContainer:{
    backgroundColor: 0,
    width: '50%',
   
  },
  poster:{
marginRight:20,
  //  resizeMode: 'contain',
    width: 136,
    height: 187,
    borderRadius:16,
    borderStyle: 'dotted',
    borderRadius: 2,
   
  },
  title: {
    marginTop:40,
    paddingLeft:10,
    paddingRight:10,
    fontWeight: 'bold',
          fontSize: 28,
          color: "#ffff",
          marginBottom:16
        },
        inputTitle:{
          marginLeft:10,
          fontWeight: 'bold',
          fontSize: 16,
          color: "#ffff",
     
        },
        textInput:{
          marginTop: 10,
borderRadius:16,
backgroundColor: 'rgba(118, 118, 128, 0.12)',
height:52,
color: "#ffff",
paddingLeft:16,
paddingRight:16,
        },
        textInputEpisodes:{
          marginTop: 10,
borderRadius:16,
backgroundColor: 'rgba(118, 118, 128, 0.12)',
height:52,
width:150,
fontSize: 18,
textAlign: 'center',
fontWeight: 'bold',
color: "#ffff",
paddingLeft:16,
paddingRight:16,
        },
        inputContainer:{
          backgroundColor: '#1D1D27',
          marginTop:20,
        },
        episodeContainer:{
          flexDirection: "row",
          backgroundColor: '#1D1D27',
          marginTop:20,
          justifyContent:'space-between',
          alignItems: "center",
        },
        selectSectionBTN:{
marginTop:18,
        },
        gradientBlock:{
          height: 62,
          justifyContent: 'center',
          borderRadius:16,
          flexDirection: "row",
          alignItems: 'center',
        },
////////////////////////////
        toggleBlock:{
          bottom:0,
alignItems: 'center',
backgroundColor: '#1D1D27',
flexDirection: "row",
justifyContent:'space-between',
marginBottom:26
        },
        BlackButton:{
          marginTop:20,
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.5)',
          borderRadius:16,
  backgroundColor: '#1D1D27',

        },
        cancelBTN:{
      
          width: '30%',
          height:85,
          backgroundColor: '#272732',
          alignItems: "center",
          justifyContent: 'center',

          borderBottomRightRadius:22,
          borderTopRightRadius:22,
        },
        cancelBTN_text:{
          color: '#FFFFFF',
          fontSize: 18,
        },
        applyBTNwrapper:{
          width: '50%',
          
        },
        applyBTN:{
          height:85,
          alignItems: "center",
          justifyContent: 'center',

          borderBottomLeftRadius:22,
          borderTopLeftRadius:22,
        },
        applyBTN_text:{
          marginRight:60,
          color: '#FFFFFF',
          fontSize: 18,
        },

});
