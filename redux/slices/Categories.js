import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories:[]
}

export const CategoriesSlice = createSlice({
  name: 'Categories',
  initialState,
  reducers: {
    SetCategories: (state, action) => {
     return  action.payload
    
  },
  AddCategories: (state, action) => {
       return{
        ...state,
        categories: action.payload
       }
    }
  },
})

export const {SetCategories, AddCategories } = CategoriesSlice.actions

export default CategoriesSlice.reducer