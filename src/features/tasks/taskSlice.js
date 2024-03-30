import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'Clean the rooms' },
  { id: '2', title: 'Prepare the meal' },
  { id: '3', title: 'Greet the customers' },
]

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskAdded(state, action) {
      state.push(action.payload)
    },
  },
})

export const { taskAdded } = tasksSlice.actions

export default tasksSlice.reducer
