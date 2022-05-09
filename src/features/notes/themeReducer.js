import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    color: 'light',
  },
  reducers: {
    changeTheme: (state,action) => {
      state.color = action.payload;
    },


    
  },
})

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer