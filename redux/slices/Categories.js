import { createSlice } from '@reduxjs/toolkit'

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

export const {SetCategories, AddTempCategories,ApplyTempCategories, CancelTempCategories,SetSelectedVideoCategories } = CategoriesSlice.actions

export default CategoriesSlice.reducer