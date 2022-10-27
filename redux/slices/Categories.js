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
    console.log(state.selectedVideoCategories)
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
    let returnArray = [];
    initialState.categories.forEach((el) => {
      if(initialState.selectedVideoCategories.find((item)=> el.id ===item.id)){
          returnArray.push(el)
      }
  
    })
    state.tempCategories=[]
    console.log(state)
 },
  },
})

export const {SetCategories, AddTempCategories, ApplyTempCategories,SetSelectedVideoCategories } = CategoriesSlice.actions

export default CategoriesSlice.reducer