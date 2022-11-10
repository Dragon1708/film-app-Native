import { createSlice } from '@reduxjs/toolkit'
import {saveCategories  } from "../../components/SaveLoadData";

const initialState = {
  categories:[],
  tempCategories:[],
  selectedVideoCategories:[]
}

export const CategoriesSlice = createSlice({
  name: 'Categories',
  initialState,
  reducers: {
    SetCategories: (state, action) => {
      // console.log({
      //   ...state,
      //   categories:action.payload
      // })
      saveCategories({
        ...state,
        categories:action.payload
      })
     return  {
      ...state,
      categories:action.payload
     }
    
  },
  SetSelectedVideoCategories: (state, action) => {
    console.log(action.payload)
   return {
    ...state,
    selectedVideoCategories:action.payload
   }
 },
 deleteCategory:(state, action)=>{
  const Category = {
    ...state,
    categories:state.categories.filter((el)=>el.id!==action.payload.id)
   }
  saveCategories(Category)
  return Category
 },
  AddTempCategories: (state, action) => {

       return {
        ...state,
        tempCategories: [...state.tempCategories,
          action.payload],
        categories: [...state.categories,
          action.payload]
       }

    },
    ApplyTempCategories: (state, action) => {
  
      state.tempCategories=[]
      console.log(state)
   },

   CancelTempCategories: (state, action) => {
    let tempArray = [];
    state.categories.forEach((el) => {
      if(!state.tempCategories.find((item)=> el.id ===item.id)){
        tempArray.push(el)
      }
  
    })
    state.tempCategories=[]
    state.categories=tempArray

 },
  },
})

export const {SetCategories, 
  AddTempCategories,
  ApplyTempCategories, CancelTempCategories,
  SetSelectedVideoCategories,
  deleteCategory } = CategoriesSlice.actions

export default CategoriesSlice.reducer