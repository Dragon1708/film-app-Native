import { createSlice } from '@reduxjs/toolkit'
import {saveWatching  } from "../../components/SaveLoadData";

const initialState = {
 watching:[],
 bookmark:[],
 viewed:[],
 statuses:['Watching','Bookmark', 'Viewed'],
 counters:[0,0,0],
 currentVideo:{},
}
const sections=['watching','bookmark','viewed' ]

export const VideosSlice = createSlice({
  name: 'Videos',
  initialState,
  reducers: {
    SetCurrentVideo: (state, action) => {
      state.currentVideo=action.payload
   
  },

UpdateWatchingVideo: (state, action) => {
  //  state.watching.splice(state.watching.findIndex((el)=>el.id===action.payload.id), 1)
const newWatching=state.watching.filter((el)=>el.id!==action.payload.id)
  return {
    ...state,
    watching:[...newWatching,
      action.payload]
    
  }
},
DeleteVideo: (state, action) => {
  //  state.watching.splice(state.watching.findIndex((el)=>el.id===action.payload.id), 1)
  console.log(Object.keys(state))
//   Object.keys(state).forEach((el)=>{
// if (condition) {
  
// }
//   })

switch (Object.keys(action.payload)[0]) {
        case sections[0]:
          console.log(action.payload)
          saveWatching({
            ...state,
            watching:[...state.watching, {...action.payload, id:(state.watching.length+1).toString()}]
          })
          return {
            ...state,
            watching:[...state.watching.filter((el)=>el.id!==action.payload.watching.id)]
          }
          break;
          case sections[1]:
            return {
              ...state,
              bookmark:[...state.bookmark.filter((el)=>el.id!==action.payload.bookmark.id)]
            }
        
            break;
            case sections[2]:
              return {
                ...state,
                viewed:[...state.viewed.filter((el)=>el.id!==action.payload.viewed.id)]
              }
              break;
      
        default:
          break;
}
},
    SetWatching: (state, action) => {
        state.watching=action.payload
       
    },
    AddVideoToWatching: (state, action) => {
      saveWatching({
        ...state,
        watching:[...state.watching, {...action.payload, id:(state.watching.length+1).toString()}]
      })
  return{
    ...state,
    watching:[...state.watching, {...action.payload, id:(state.watching.length+1).toString()}]
  }
  },
  AddVideoToBookmark: (state, action) => {
    return{
      ...state,
      bookmark:[...state.bookmark, {...action.payload, id:(state.bookmark.length+1).toString()}]
    }
    },
AddVideoToViewed: (state, action) => {
      return{
        ...state,
        viewed:[...state.viewed, {...action.payload, id:(state.viewed.length+1).toString()}]
      }
      },
    SetBookmark: (state, action) => {
      state.bookmark=action.payload
  },
  SetViewed: (state, action) => {
    state.viewed=action.payload
},
  },
})

export const {SetCurrentVideo, SetWatching, 
  SetBookmark, 
  SetViewed, 
  DeleteVideo,
  AddVideoToWatching,
  AddVideoToBookmark,
  AddVideoToViewed,
  UpdateWatchingVideo } = VideosSlice.actions

export default VideosSlice.reducer