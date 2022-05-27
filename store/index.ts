import { configureStore } from '@reduxjs/toolkit'
import projectsReducer  from './projectsReducer';
import rotateReducer from './rotateReducer';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    rotate: rotateReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;