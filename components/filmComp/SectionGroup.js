import { StyleSheet, FlatList,ScrollView, Text, View, Pressable  } from 'react-native';
import { useState} from 'react'
//import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux'

import ConfirmPopup from "../ConfirmPopup";
import CardVideo from './VideoCard/CardVideo';
import {deleteCategory} from '../../redux/slices/Categories';
import {UpdateWatchingVideo  } from "../../redux/slices/VideosSlice";


const SectionGroup=({Category, videos=[],  isTimeCode=false,  isBookmark=false, isViewed=false})=>{
  //  const  {imgURL, title, currentEpisode, timeCode, maxEpisodes}=data
 // const [data, setData]= useState(VideoData )
 const   ToggleConfirmPopup= useState(false )
 const dispatch=useDispatch()
 const reverceVideos=videos.reverse()
  const onSeeAll=()=>{
 //   setData(VideoData)
 ToggleConfirmPopup[1](true)
console.log('onSeeAll')
  };

// console.log(UpdatedVideo)
    
  const PopupConfirmDelete=(result)=>{
  
  if (result) {
    dispatch(deleteCategory(Category))
    videos.forEach((el)=>{
      dispatch(UpdateWatchingVideo({
        ...el,
        categoriesID:el.categoriesID.filter((el)=>el!==Category.id)
      }))
    })
    // Navigation.navigate('Home')
  }
  }
        return (
            <View style={styles.sectionWrapper}>
    <ConfirmPopup ClickHandler={PopupConfirmDelete} TogglePopup={ToggleConfirmPopup}/>
         <View style={styles.titleSection}>
         <Text style={styles.text}>{Category.title}</Text>
         <Pressable onPress={onSeeAll} style={styles.seeAll}>
         <Text style={styles.text}>See all</Text>
         </Pressable>
     </View>
     {/* <FlatList
data={VideoData}
renderItem={({item})=>{
  {console.log(item)}
<Text >
23243
</Text>

}}
/> */}
{/* <ScrollView  horizontal={true}>
{VideoData.map((element, i) => {
  //   console.log("====")
  // console.log(element)
    return (
      <CardVideo 
      key={i}
      data={element }
      isTimeCode={true}
    />
    )
  })}
</ScrollView> */}
     <ScrollView  horizontal={true}>
{
  reverceVideos.map((el)=>{
return  <CardVideo 
key={el.id} 
data={el}  
isTimeCode={isTimeCode}
isBookmark={isBookmark} 
isViewed={isViewed}
/> 
    })
    }

     {/* <CardVideo 
      data={{
        imgURL:'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/The_Batman_Poster.jpg/800px-The_Batman_Poster.jpg',
        title:'Batman 2022',
        currentEpisode:7,
        timeCode: [0,11,20],
        maxEpisodes:12
      }
      }
      isTimeCode={true}
    /> */}
     
     </ScrollView>
    
          </View>
          
        )
    }
    
    const styles = StyleSheet.create({
      sectionWrapper: {
        marginTop:30,

        },
        titleSection: {
          paddingLeft:10,
    paddingRight:10,
          flexDirection: "row",
        justifyContent:"space-between",
        marginBottom:10
        },
        seeAll:{
        
        },
        text: {
   
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white'
        },
      });
      
      export default SectionGroup;