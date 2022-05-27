import { createSlice } from '@reduxjs/toolkit';

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: []
  },
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload
    }
  }
})

export const { setProjects } = projectsSlice.actions;

export default projectsSlice.reducer;