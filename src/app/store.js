import { configureStore } from '@reduxjs/toolkit'
import noteReducer from '../features/notes/notesSlice'

export default configureStore({
  reducer: {
    notes: noteReducer,
  },
})