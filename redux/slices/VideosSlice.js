import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 watching:[],
 bookmark:[],
 viewed:[],
 statuses:['Watching','Bookmark', 'Viewed'],
 counters:[0,0,0],
 currentVideo:{},
}

export const VideosSlice = createSlice({
  name: 'Videos',
  initialState,
  reducers: {
    SetCurrentVideo: (state, action) => {
      state.currentVideo=action.payload
   
  },
  UpdateTimeVideo: (state, action) => {
    state.currentVideo.timeCode=[
      action.payload[0]===''? 0 : parseInt(action.payload[0]),
      action.payload[1]===''? 0 : parseInt(action.payload[1]),
      action.payload[2]===''? 0 : parseInt(action.payload[2])
    ]
},
UpdateCurrentVideo: (state, action) => {
  console.log({
    ...state.currentVideo,
    ... action.payload
  }, "State")
  state.currentVideo={
    ...state.currentVideo,
    ... action.payload
  }
},
    SetWatching: (state, action) => {
        state.watching=action.payload
       
    },
    AddVideoToWatching: (state, action) => {
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
  AddVideoToWatching,
  AddVideoToBookmark,
  AddVideoToViewed,
   UpdateCurrentVideo } = VideosSlice.actions

export default VideosSlice.reducer