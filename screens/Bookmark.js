
import { StyleSheet, Image, ScrollView, FlatList, Pressable } from "react-native";
import { Text, View } from "../components/Themed";

import {  useSelector } from 'react-redux'
import SectionGroup from "../components/filmComp/SectionGroup";
import CategoryCard from "../components/Categories/CategoryCard";
import CardVideo from "../components/filmComp/VideoCard/CardVideo";

export default function Bookmark() {
  const videos =useSelector(state=>state.VideosReducer.bookmark)
  const sections =useSelector(state=>state.CategoriesReducer)

  const collumns = 2; //размер подмассива
  let sectionsCollumns = []; //массив в который будет выведен результат.
  for (let i = 0; i <Math.ceil(videos.length/collumns); i++){
    sectionsCollumns[i] = videos.slice((i*collumns), (i*collumns) + collumns);
  }
const Render=sectionsCollumns.map((collumns) =>{
  return (
  <View style={{flex: 1, backgroundColor: 0, marginRight:10}}>
    {
      collumns.map((el) =>{
  
       return <CardVideo Data={el}  isBookmark />
      })
    }
    </View>)
        })
 
  return (
    <View style={styles.container}>
       <ScrollView  >
       <ScrollView  horizontal={true} >
    <View style={{width:100}}>
    <CategoryCard categoryData={sections.categories[0]} />
    </View>
    <View style={{width:100}}>
    <CategoryCard categoryData={sections.categories[0]} />
    </View>
    <View style={{width:100}}>
    <CategoryCard categoryData={sections.categories[0]} />
    </View>
    <View style={{width:100}}>
    <CategoryCard categoryData={sections.categories[0]} />
    </View>
    <View style={{width:100}}>
    <CategoryCard categoryData={sections.categories[0]} />
    </View>
    </ScrollView>

<View>
<FlatList
data={videos}
renderItem={ ({item})=> sectionsCollumns.map((collumns) =>{
  return (
  <View style={{flex: 1, backgroundColor: 0, marginRight:10}}>
    {
      collumns.map((el) =>{
  
       return <CardVideo data={el}  isBookmark />
      })
    }
    </View>)
        })}

/>
</View>
       </ScrollView>

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
    // height:"100%",
    //  alignItems: "center",
    // justifyContent: "center",
     backgroundColor: '#1D1D27'
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
