import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  section: {
    name:"Wathing",
    DBname:"watch"
  },
  categoryId: 0
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    SetCategoryId: (state, action) => {
        state.categoryId=action.payload
    },
    SetSection: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const {SetCategoryId } = filterSlice.actions

export default filterSlice.reducer