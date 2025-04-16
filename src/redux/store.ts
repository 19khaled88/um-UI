import { configureStore } from '@reduxjs/toolkit'
// import {rootReducer} from './rootReducer'
import {reducer} from './rootReducer'
import { baseApi } from './api/baseApi'


export const store = configureStore({
  // reducer:rootReducer 
  reducer,
  middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  
})


export type RootState  = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch 

export type AppStore = typeof store