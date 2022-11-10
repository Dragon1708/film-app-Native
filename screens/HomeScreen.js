import { StyleSheet, Image, ScrollView, FlatList, Pressable } from "react-native";
import React from 'react';

import {loadWatching, loadCategories  } from "../components/SaveLoadData";
import { Text, View } from "../components/Themed";
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';


import { SetViewed, SetBookmark, SetWatching } from '../redux/slices/VideosSlice'
import { SetCategories} from '../redux/slices/Categories'
import SectionGroup from "../components/filmComp/SectionGroup";
import BannerSection from '../components/filmComp/BannerSection';

export default function TabOneScreen() {

//  const [sections, SetSections]=React.useState(useSelector(state=>state.CategoriesReducer))
 const [sectionsFiltered, SetSectionsFiltered]=React.useState([])

const videos =useSelector(state=>state.VideosReducer.watching)
// const sections =useSelector(state=>state.CategoriesReducer.categories).slice(1)
const sections =useSelector(state=>state.CategoriesReducer.categories)
// console.log(videos.filter(index=>index.categoriesID.includes(sections[1].id) ))
  const dispatch=useDispatch()
const api='https://62fa78e23c4f110faa9a0471.mockapi.io/'

 React.useEffect(() => {
  console.log( "e===============")
  loadWatching().then(res=>{
    console.log(res.watching[0].title)
   dispatch(SetWatching(res.watching))
  //  SetSectionsFiltered(sectionsFilter(res.watching))
  })

  // axios.get(api+'watch').then(res=>{
  //    dispatch(SetWatching(res.data))
  //   console.log(res.data[0].title)
  //   })
axios.get(api+'bookmark').then(res=>{
  dispatch(SetBookmark(res.data))
  }
  )
  axios.get(api+'viewed').then(res=>{
    dispatch(SetViewed(res.data))
    }
    )
    loadCategories().then(res=>{
      // console.log(res)
      dispatch(SetCategories(res.categories))
    //  SetSectionsFiltered(sectionsFilter(res.watching))
    })
// axios.get(api+'categories').then(res=>{

//   dispatch(SetCategories(res.data))
//   }
//   )
  }, []);

  // сделать чтобы в сектион груп грузилось только макс 5видео
const sectionsFilter=sections.filter((el)=>{
 return videos.filter(index=>index.categoriesID?.includes(el.id)).length !== 0;
})

  return (
    <View style={styles.container}>
        <ScrollView>
        <Text style={styles.title}>  Recent</Text>
        <BannerSection />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    

        <FlatList
data={sectionsFilter}
renderItem={({item})=> <SectionGroup 
Category={item} 
isTimeCode
// VideoData={data.timeCodes.filter(el=> el.sectionID ==item.id)} 
// videos.filter(index=>index.categoriesID.includes(item.id) )
videos={videos.filter(index=>{
  // console.log(index.title, '==',item.id)
return  index.categoriesID?.includes(item.id)} )}

/>}
/>
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
