
import { StyleSheet, Image, ScrollView, FlatList, Pressable } from "react-native";
import { Text, View } from "../components/Themed";

import {  useSelector } from 'react-redux'
import SectionGroup from "../components/filmComp/SectionGroup";

export default function Bookmark() {
  const videos =useSelector(state=>state.VideosReducer.bookmark)
  const sections =useSelector(state=>state.CategoriesReducer)

  return (
    <View style={styles.container}>
       <ScrollView>
       <Text style={styles.title}>  Recent</Text>
       <FlatList
data={sections}
renderItem={({item})=> <SectionGroup 
title={item.title} 
isBookmark
// VideoData={data.timeCodes.filter(el=> el.sectionID ==item.id)} 
videos={videos.filter(index=>index.categoriesID.includes(item.id) )}

/>}
/>
       </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
