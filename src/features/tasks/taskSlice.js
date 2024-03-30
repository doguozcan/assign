import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'Clean the rooms' },
  { id: '2', title: 'Prepare the meal' },
  { id: '3', title: 'Greet the customers' },
]

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title,
          },
        }
      },
    },
    taskUpdated(state, action) {
      const { id, title } = action.payload
      const existingTask = state.find((post) => post.id === id)

      if (existingTask) {
        existingTask.title = title
      }
    },
  },
})

export const { taskAdded, taskUpdated } = tasksSlice.actions

export default tasksSlice.reducer
