import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'Clean the rooms', userId: '1' },
  { id: '2', title: 'Prepare the meal', userId: '2' },
  { id: '3', title: 'Greet the customers', userId: '3' },
  { id: '4', title: 'Check inventory', userId: '1' },
  { id: '5', title: 'Order supplies', userId: '2' },
  { id: '6', title: 'Confirm reservations', userId: '3' },
  { id: '7', title: 'Plan the week’s menu', userId: '2' },
  { id: '8', title: 'Inspect kitchen for cleanliness', userId: '1' },
  { id: '9', title: 'Arrange airport pickups', userId: '3' },
  { id: '10', title: 'Update guest billing information', userId: '1' },
  { id: '11', title: 'Organize staff schedules', userId: '4' },
  { id: '12', title: 'Monitor online reviews', userId: '4' },
  { id: '13', title: 'Coordinate room maintenance', userId: '1' },
  { id: '14', title: 'Prepare welcome packages', userId: '2' },
  { id: '15', title: 'Host evening entertainment', userId: '3' },
  { id: '16', title: 'Renew business licenses', userId: '4' },
  { id: '17', title: 'Evaluate staff performance', userId: '1' },
  { id: '18', title: 'Negotiate with suppliers', userId: '2' },
  { id: '19', title: 'Implement eco-friendly practices', userId: '3' },
  { id: '20', title: 'Review fire safety procedures', userId: '4' },
]

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            userId,
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
