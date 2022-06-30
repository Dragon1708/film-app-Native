import { StyleSheet, Image,ScrollView, Text, View, Pressable  } from 'react-native';

//import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient'


import BigCardVideo from './BigVideoCard';


import CardVideo from './CardVideo';

const BannerSection=()=>{
  //  const  {imgURL, title, currentEpisode, timeCode, maxEpisodes}=data
    
  const onSeeAll=()=>{
console.log('onSeeAll')
  };

        return (
      <ScrollView  horizontal={true}>
 
      <BigCardVideo 
       data={{
         imgURL:'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/The_Batman_Poster.jpg/800px-The_Batman_Poster.jpg',
         title:'Batman 2022',
         currentEpisode:7,
         timeCode: [0,11,20],
         maxEpisodes:12
       }
       }
       margin={30}
     />
      <BigCardVideo
       data={{
         imgURL:'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/The_Batman_Poster.jpg/800px-The_Batman_Poster.jpg',
         title:'Batman 2022',
         currentEpisode:7,
         timeCode: [0,11,20],
         maxEpisodes:12
       }
       }
       margin={30}
     />
     <BigCardVideo 
       data={{
         imgURL:'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/The_Batman_Poster.jpg/800px-The_Batman_Poster.jpg',
         title:'Batman 2022',
         currentEpisode:7,
         timeCode: [0,11,20],
         maxEpisodes:12
       }
       }

     />
      </ScrollView>

        )
    }
    
    const styles = StyleSheet.create({
      sectionWrapper: {
        marginTop:30,
        paddingLeft:20,
        paddingRight:20,
        }
      });
      
      export default BannerSection;