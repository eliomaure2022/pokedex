import { configureStore } from '@reduxjs/toolkit'
import  nameSlice  from './slices/userName.slice'

export default configureStore({
  reducer: {
    name:nameSlice
	}
})