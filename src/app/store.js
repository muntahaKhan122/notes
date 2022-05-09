import { configureStore } from '@reduxjs/toolkit';
import noteReducer from '../features/notes/notesSlice';
import themeReducer from '../features/notes/themeReducer';

export default configureStore({
  reducer: {
    notes: noteReducer,
    theme: themeReducer,
  },
})