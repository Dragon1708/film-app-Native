import { StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import {createRef, useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import BottomSheet, {BottomSheetView  } from "@gorhom/bottom-sheet";
import { Text, View } from '../components/Themed';
import {LinearGradient} from 'expo-linear-gradient';

import {DeleteVideo } from "../redux/slices/VideosSlice";

import ArrowLeft from "../assets/icons/png/arrow-leftPNG.png";
import EditIcon from "../assets/icons/png/edit-05PNG.png";
import ListSelectItemPopup from "../components/ListSelectItemPopup";
import ConfirmPopup from "../components/ConfirmPopup";



export default function VideoDataScreen() {
 //   consoleconst JsonAPI='https://nodal-linker-349809-default-rtdb.europe-west1.firebasedatabase.app/bookmark.json'

const Navigation=useNavigation()
const dispatch=useDispatch()
const StatusesWatching =useSelector(state=>state.VideosReducer.statuses)
// const {id, imgURL, title, timeCode}=route.params.data
const [isOpen, SetIsOpen] = useState(false);
const [SelectStatusWatching, SetSelectStatusWatching] = useState(StatusesWatching[0]);
const   TogglePopup= useState(false )
const   ToggleConfirmPopup= useState(false )
const currentVideo=useSelector(state=>state.VideosReducer.currentVideo)
const { imgURL, title, timeCode, currentEpisode}=currentVideo

const sheetRef = createRef(null);
const snapPoints = [ "40%"];

const onChange=() => {
  // loadData().then(function (data) {
  //   let NewData=data
  //   NewData.timeCodes.splice(NewData.timeCodes.findIndex(item => item.id ===id), 1)
  // saveData(NewData)
  
  ShowBottomSheet()
    // Navigation.navigate('HomeScreen')
    }

const DeleteVideoHandle=() => {
  ToggleConfirmPopup[1](true)
}

const PopupHandler=(SelectedItem)=>{
      SetSelectStatusWatching(SelectedItem)
      console.log("Selee")
      // сделать добавление в категорию
      switch (SelectStatusWatching) {
        case StatusesWatching[0]:
          // dispatch(AddVideoToWatching(NewVideo))
          break;
          case StatusesWatching[1]:
            // dispatch(AddVideoToBookmark(NewVideo))
        
            break;
            case StatusesWatching[2]:
              // dispatch(AddVideoToViewed(NewVideo))
              break;
      
        default:
          break;
      }
    }
const OpenPopup=()=>{
      TogglePopup[1](true)
 }
 const PopupConfirmDelete=(result)=>{
  const DeletedVideo={
    watching:currentVideo
  }
if (result) {
  dispatch(DeleteVideo(DeletedVideo))
  Navigation.navigate('Home')
}
}


 const ShowBottomSheet = ()=>{
      if (isOpen) {
        sheetRef.current?.close()
      } else {
        sheetRef.current?.snapToIndex(0)
        SetIsOpen(true)
      }
    
    }
const UpdateTime=() => {
  
 Navigation.navigate('UpdateVideoScreen' )

}

  return (
   
    <View style={styles.container}>
      
    <Image 
         source={{uri: imgURL!=='' ? imgURL : 'https://images.genius.com/af1e9db30786db68b4a8698a9536a4a8.999x999x1.jpg'
         }} style={styles.image} />
<LinearGradient colors={['rgba(10, 10, 17, 0)',
'rgba(10, 10, 17, 0.8)',
'rgba(10, 10, 17, 0.95)',
 'rgba(1, 8, 13, 1)']} 
style={styles.BlackBackground} >

</LinearGradient>

         <View style={styles.toggleContainer}>
         <Pressable onPress={()=>  Navigation.goBack()} style={styles.btnGray}>
         <Image source={ArrowLeft} />
           </Pressable>
           <Pressable onPress={ShowBottomSheet}  style={styles.btnGray}>
           <Image source={EditIcon} />
     </Pressable>
             </View>

             <View style={styles.titleContainer}>
             <Text style={styles.title}>
            {title}
         </Text>
             </View>
            
             <View style={styles.epsContainer}>
             <Text style={styles.title}>
            {`S${currentEpisode[0]} | ${currentEpisode[1]}`}
         </Text>
             </View>
           
             <View style={styles.timeContainer}>

             <View style={styles.hourContainer}>
             <Text style={styles.timeTitle}>
           {timeCode[0]}
         </Text>
         <Text style={styles.timeSubTitle}>
           hour
         </Text>
             </View>
 
             <View style={styles.hourContainer}>
             <Text style={styles.timeTitle}>
           :
         </Text>
         <Text style={styles.timeSubTitle}>
          
         </Text>
             </View>
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
           <View style={{
  position: 'absolute',
  backgroundColor: 0,
  bottom: 0,
  width: '100%',
}}>
           <TouchableOpacity onPress={UpdateTime} style={styles.btnUpdate}>
           <LinearGradient colors={['#FF2C7D', '#FF59AA']}
           start={{x: 0, y: 0}} end={{x: 1, y: 0}}
           style={styles.btnUpdate}  >
    <Text style={{...styles.title,  fontSize: 30}}>Update</Text>
</LinearGradient>
          {/* <Text style={{  ...styles.timeTitle,  fontSize: 30,}}>Update</Text> */}
      
           </TouchableOpacity>
           </View>

           <BottomSheet ref={sheetRef} snapPoints={snapPoints} 
onClose={()=>SetIsOpen(false)}
enablePanDownToClose={true} 
index={-1}
> 
  <BottomSheetView style={{backgroundColor:"#1D1D27", height: "100%",  flex:1,   }}>
  <Text style={styles.inputLabel}>
  Select section
  </Text>
  <TouchableOpacity style={styles.BlackButton} onPress={OpenPopup} >
  <Text style={{...styles.epsText, padding:20, fontSize:20}}>{SelectStatusWatching}</Text>
</TouchableOpacity>
  <ListSelectItemPopup ClickHandler={PopupHandler} 
TextData={StatusesWatching}
TogglePopup={TogglePopup}/>
      <View style={{alignItems: 'center',width:"100%",  
       position: 'absolute', 
       bottom: 20,
       backgroundColor:0,
       }}>
      <ConfirmPopup ClickHandler={PopupConfirmDelete} TogglePopup={ToggleConfirmPopup}/>
    
      <TouchableOpacity onPress={DeleteVideoHandle} style={styles.BottomSheet__btn}>
<LinearGradient colors={['#FF2C7D', '#FF59AA']}
        start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{  borderRadius:16,}}>
<Text style={{...styles.title,marginTop: 0,   textAlign: 'center',  marginBottom:0, padding:20}}>
      Delete
        </Text>
        </LinearGradient>
</TouchableOpacity>
      </View>
   
  </BottomSheetView>
</BottomSheet>
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
BlackBackground:{
  position: 'absolute',
  
  bottom: 0,
  height: 400,
  width:'100%',
},
BlackButton:{
  marginTop:20,
  borderWidth: 1,
  borderColor: 'rgba(255, 255, 255, 0.5)',
  borderRadius:16,
backgroundColor: '#1D1D27',

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
    bottom: 160,
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
    top: 40,
    left: 0,
    right: 0,
    alignItems: "center",
    paddingLeft:10,
    paddingRight:10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  btnUpdate:{
    borderRadius:28,
    paddingLeft:60,
    paddingRight:60,
    paddingTop:20,
    paddingBottom:20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnGray:{
    borderRadius:16,
    padding:10,
    backgroundColor: '#1D1D27'
  },

});
