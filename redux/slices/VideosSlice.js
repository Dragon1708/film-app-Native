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

 const temp2={watching: temp}
// initialState.watching.splice(1)
// console.log(temp.id, initialState.watching)
// console.log( initialState.watching.findIndex((el)=>el.id===temp.id))


console.log(Object.keys(initialState))
console.log(Object.keys(temp2)[0])

switch (Object.keys(temp2)[0]) {
        case Object.keys(initialState)[0]:
          const arr=[
            temp2.watching,
            ...initialState.watching
            ]
          break;
          case Object.keys(initialState)[1]:
            // dispatch(AddVideoToBookmark(NewVideo))
        
            break;
            case Object.keys(initialState)[2]:
              // dispatch(AddVideoToViewed(NewVideo))
              break;
      
        default:
          break;
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
  UpdateWatchingVideo } = VideosSlice.actions

export default VideosSlice.reducer