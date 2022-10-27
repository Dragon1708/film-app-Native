import { StyleSheet, Image, Text, View, Pressable,Dimensions  } from 'react-native';

//import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient'



const miniVideoCard=()=>{
  //  const  {imgURL, title, currentEpisode, timeCode, maxEpisodes}=data

const onClickCard=()=>{
  console.log("PRESS!")
  }
  
      return (
          <Pressable onPress={onClickCard} style={styles.container}>
          <Image 
           source={{uri: 'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/The_Batman_Poster.jpg/800px-The_Batman_Poster.jpg'
           }} style={styles.image} />
  <View style={styles.rightContainer}>
    <Text style={styles.title}>Ananas 2nas 2nas 2048</Text>
    <View style={styles.dataContainer}>
    <Text style={styles.text}>2007</Text>

    <Text style={styles.text}>1h 56min</Text>
    </View>
  </View>
        </Pressable>
        
      )
  }
  
  const textColor='white'
  
  const styles = StyleSheet.create(
    
    {
  
      container: {
        width: Dimensions.get('window').width,
        marginTop:20,
        flexDirection: "row",
      },
      title: {
 // fontWeight: 'bold',
 width: Dimensions.get('window').width-200,
        fontSize: 22,
        color: textColor,
      },
      rightContainer:{
        paddingBottom:10,
        paddingTop:10,
        alignItems: 'flex-start',
        justifyContent:'space-between',
  marginLeft: 10,
      },
      dataContainer:{
        flexDirection: "row",
        alignItems: "center",
        
      },
      text: {
        fontSize: 18,
     ///   fontWeight: 'bold',
        color: '#BCBCBC',
        textAlign: 'center'
      },
      image: {
        width:154,
     height:94,
     borderRadius:12,
      }
    });
      
      export default miniVideoCard;