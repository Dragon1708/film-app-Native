import { StyleSheet, Text, View, Modal,Pressable  } from 'react-native';

import { useState} from 'react'
//import LinearGradient from 'react-native-linear-gradient';

import SelectListItem from "./SelectListItem";


const ListSelectItemPopup=({ClickHandler, TextData, TogglePopup})=>{

  const [selectedItem, setSelectedItem]= useState(TextData[0] )


  const onClickItem= (selectItem)=>{
    setSelectedItem(selectItem)
    ClickHandler(selectItem)
    TogglePopup[1](false)
  }
  const onCancel= ()=>{
    ClickHandler(TextData[0])
    TogglePopup[1](false)
  }

    return (
      <Modal transparent={true} visible={TogglePopup[0]}  style={styles.popupModal}>
      <View style={styles.popup}>
      <Text style={styles.title}>Watch</Text>
      {
        TextData.map((el, i)=>{
          return <SelectListItem key={`SelectListItem_${i}`}
          ClickHandler={onClickItem}
          text={el}
          isSelect={selectedItem===el? true: false}
          />
        })
      }
 <Pressable style={styles.btn}  onPress={onCancel}>
   
    <Text style={styles.title}>Cancel</Text>
   
         </Pressable>
      </View>
      </Modal>
    )
}





const styles = StyleSheet.create(
  
  {
    popupModal:{

    },
popup: {
  padding:20,
   marginTop:100,
   marginBottom:100, 
   marginLeft:50, 
   marginRight:50,
  backgroundColor: '#01080D',
  borderRadius:20,

},

  title:{
color: '#FFFFFF',
fontSize: 22,
textAlign: 'center',
fontWeight: 'bold',
marginBottom:20,
  },

  btn:{
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius:16,
backgroundColor: '#1D1D27',
marginLeft:20,
marginRight:20
  }

  });
  
  export default ListSelectItemPopup;