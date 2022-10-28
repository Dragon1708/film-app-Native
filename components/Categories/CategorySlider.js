import { StyleSheet, Image,ScrollView, Text, View, Pressable  } from 'react-native';

//import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient'


import MiniCategoryCard from './CategoryCard';


const CategorySlider=()=>{
  //  const  {imgURL, title, currentEpisode, timeCode, maxEpisodes}=data
    
  const onSeeAll=()=>{
console.log('onSeeAll')
  };

        return (
            <View style={styles.sectionWrapper}>
     <ScrollView  horizontal={true}>

     <MiniCategoryCard 
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
     <MiniCategoryCard 
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
    <MiniCategoryCard 
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
      <MiniCategoryCard />

     </ScrollView>
          </View>
          
        )
    }
    
    const styles = StyleSheet.create({
      sectionWrapper: {
        marginTop:12,

        },
        titleSection: {
          flexDirection: "row",
        justifyContent:"space-between",
        marginBottom:10
        }
      });
      
      export default CategorySlider;