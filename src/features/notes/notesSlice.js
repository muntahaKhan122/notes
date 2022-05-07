import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    value: [],
  },
  reducers: {
    addNote: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value.push(action.payload);
    },
    deleteNote: (state,action) => {
     var ind= state.value.findIndex(obj => obj.id === action.payload);
     state.value.splice(ind,1);
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addNote , deleteNote } = notesSlice.actions

export default notesSlice.reducer