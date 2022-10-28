import { StyleSheet, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import BottomSheet, {BottomSheetView  } from "@gorhom/bottom-sheet";

import React, {useRef} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { AddTempCategories, SetSelectedVideoCategories, 
  CancelTempCategories,
  ApplyTempCategories} from '../../redux/slices/Categories'

import { Text, View } from '../../components/Themed';



import CategoryCard from "../../components/Categories/CategoryCard";
//import SearchIcon from '../../assets/icons/SearchIcon'


export default function SelectSectionPage({ navigation }) {
  const [CategoryName, onChangeCategoryName] = React.useState("");
  const sections =useSelector(state=>state.CategoriesReducer.categories).slice(1)


  const [SelectedSections, SetSelectedSections] = React.useState(useSelector(state=>state.CategoriesReducer.selectedVideoCategories));

  const dispatch=useDispatch()
  const collumns = 2; //размер подмассива
  let sectionsCollumns = []; //массив в который будет выведен результат.
  for (let i = 0; i <Math.ceil(sections.length/collumns); i++){
    sectionsCollumns[i] = sections.slice((i*collumns), (i*collumns) + collumns);
  }
const Navigation=useNavigation()

const sheetRef = React.createRef(null);
const [isOpen, SetIsOpen] = React.useState(false);


const snapPoints = [ "40%"];


const AddCategory=()=>{

dispatch(AddTempCategories({
  id:`${CategoryName}__section`,title:CategoryName
}))
  sheetRef.current?.close()
  //  dispatch(MergeCategories())

}

const ShowBottomSheet = ()=>{
  if (isOpen) {
    sheetRef.current?.close()
  } else {
    sheetRef.current?.snapToIndex(0)
    SetIsOpen(true)
  }

}

const SelectCategory=(category)=>{
SetSelectedSections([...SelectedSections, category])
console.log(SelectedSections)
dispatch(SetSelectedVideoCategories([...SelectedSections, category]))
}
const unSelectCategory=(category)=>{
SetSelectedSections(SelectedSections.filter(item => item.id !== category.id))
dispatch(SetSelectedVideoCategories(SelectedSections.filter(item => item.id !== category.id)))
}

const CancelSelectCategory=()=>{
  dispatch(CancelTempCategories())
  dispatch(SetSelectedVideoCategories([]))
  Navigation.goBack()
  
}

const ApplySelectCategory=()=>{
  dispatch(ApplyTempCategories())
  Navigation.goBack()
  
}

  return (
   
    <View style={styles.container}>
      
        <Text style={styles.title}>
          Categories
        </Text>
      
          {/* <SearchIcon style={styles.searchIcon} width={28} height={28}/> */}
        <TouchableOpacity style={styles.addCategory} onPress={ShowBottomSheet}>
           <Text style={styles.regularText}>
        Add  Categories
        </Text>
        </TouchableOpacity>

<ScrollView >
  
<View style={styles.categoryesContainer}>
{
      sectionsCollumns.map((collumns) =>{
return (
<View style={{flex: 1, backgroundColor: 0, marginRight:10}}>
  {
    collumns.map((el) =>{
     return <CategoryCard categoryData={el} 
     SelectedCategory={SelectCategory}
     unSelectCategory={unSelectCategory}
     isSelected={SelectedSections.find(item => item.id===el.id)? true: false} />
    })
  }
  </View>)
      })
    }

</View>


      </ScrollView>

      <View style={styles.toggleContainer}>
      <Pressable onPress={CancelSelectCategory} style={styles.cancel__btn}>
<Text style={{...styles.title,marginTop: 0,   marginBottom:0, padding:20}}>
   Cancel
        </Text>
</Pressable>
<Pressable onPress={ApplySelectCategory} style={styles.apply__btn}>
<LinearGradient colors={['#FF2C7D', '#FF59AA']}
        start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{  borderRadius:16,}}>
<Text style={{...styles.title,marginTop: 0,   marginBottom:0, padding:20}}>
      Apply
        </Text>
        </LinearGradient>

</Pressable>
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
  <TextInput
        style={styles.textInput}
        onChangeText={onChangeCategoryName}
        value={CategoryName}
      />
      <View style={{alignItems: 'center',width:"100%",  
       position: 'absolute', 
       bottom: 20,
       backgroundColor:0,
       }}>
      <Pressable onPress={AddCategory} style={styles.BottomSheet__btn}>
<LinearGradient colors={['#FF2C7D', '#FF59AA']}
        start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{  borderRadius:16,}}>
<Text style={{...styles.title,marginTop: 0,   textAlign: 'center',  marginBottom:0, padding:20}}>
      Apply
        </Text>
        </LinearGradient>
</Pressable>
      </View>
   
  </BottomSheetView>
</BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft:10,
    paddingRight:10,
    flex:1,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#01080D'
  },
  title: {
    marginTop: 60,
    fontWeight: 'bold',
          fontSize: 28,
          color: "#ffff",
          marginBottom:16
        },
        categoryesContainer:{
          backgroundColor: 0,
  marginTop:20,
flexDirection: "row",
        },
        addCategory: {
          fontSize: 22,
          borderRadius:20,
         marginLeft:10,
         marginRight:10,
             backgroundColor: '#01080D',
             borderStyle: 'dashed',
             borderWidth: 1,
             borderColor: 'white',
             borderTopColor:'white'
           },
           regularText:{
            textAlign: 'center',
            fontSize: 18,
            color: "#ffff",
            padding:14
        },
        textInput:{
       
          marginRight:10,
          marginLeft:10,
borderRadius:16,
backgroundColor: 'rgba(118, 118, 128, 0.12)',
height:52,
color: "#ffff",
paddingLeft:16,
paddingRight:16,
        },
toggleContainer:{
  position: 'absolute', left: 0, right: 0, bottom: 0,
  flexDirection: "row",
  backgroundColor: 0,
  justifyContent: 'space-between',
  marginBottom:20,
},
apply__btn:{
width:"60%",
textAlign: 'center'
},
cancel__btn:{
  backgroundColor:'#1F1F32',
  borderRadius:16
},
BottomSheet__btn:{

  width:"80%",


},
inputLabel:{
  marginTop: 10,
  marginLeft:20,
  marginBottom:10,

  fontSize: 16,
  color: "#ffff",

},
});
