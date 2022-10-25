import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/FilterSlice";
import VideosReducer from "./slices/VideosSlice";
import CategoriesReducer from "./slices/Categories";

const store =configureStore({
    reducer: { filterReducer, VideosReducer, CategoriesReducer}
})

export default store;