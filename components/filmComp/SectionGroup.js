import { StyleSheet, FlatList,ScrollView, Text, View, Pressable  } from 'react-native';
import { useState} from 'react'
//import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient'


import CardVideo from './CardVideo';




const SectionGroup=({title, VideoData, isTimeCode=false,  isBookmark=false, isViewed=false})=>{
  //  const  {imgURL, title, currentEpisode, timeCode, maxEpisodes}=data
 // const [data, setData]= useState(VideoData )
  const onSeeAll=()=>{
 //   setData(VideoData)
    console.log(VideoData[0])
console.log('onSeeAll')
  };

        return (
            <View style={styles.sectionWrapper}>
         <View style={styles.titleSection}>
         <Text style={styles.text}>{title}</Text>
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
<ScrollView  horizontal={true}>
{VideoData.map((element, i) => {
  //   console.log("====")
  // console.log(element)
    return (
      <CardVideo 
      data={element }
      isTimeCode={true}
    />
    )
  })}
</ScrollView>
     {/* <ScrollView  horizontal={true}>

     <CardVideo 
      data={{
        imgURL:'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/The_Batman_Poster.jpg/800px-The_Batman_Poster.jpg',
        title:'Batman 2022',
        currentEpisode:7,
        timeCode: [0,11,20],
        maxEpisodes:12
      }
      }
      isTimeCode={true}
    />
     <CardVideo 
      data={{
        imgURL:'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/The_Batman_Poster.jpg/800px-The_Batman_Poster.jpg',
        title:'Batman 2022',
        currentEpisode:7,
        timeCode: [0,11,20],
        maxEpisodes:12
      }
      }
      isTimeCode={true}
    />
    <CardVideo 
      data={{
        imgURL:'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/The_Batman_Poster.jpg/800px-The_Batman_Poster.jpg',
        title:'Batman 2022',
        currentEpisode:7,
        timeCode: [0,11,20],
        maxEpisodes:12
      }
      }
      isTimeCode={true}
    />
     </ScrollView> */}
    
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