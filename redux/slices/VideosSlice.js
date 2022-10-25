import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 watching:[],
 bookmark:[],
 viewed:[],
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
    AddWatching: (state, action) => {
      state.watching.push(action.payload)
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
  SetBookmark, SetViewed, AddWatching, UpdateCurrentVideo } = VideosSlice.actions

export default VideosSlice.reducer