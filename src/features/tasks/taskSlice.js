import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
  {
    id: '1',
    title: 'Clean the rooms',
    userId: '1',
    date: sub(new Date(), { minutes: 1 }).toISOString(),
  },
  {
    id: '2',
    title: 'Prepare the meal',
    userId: '2',
    date: sub(new Date(), { minutes: 2 }).toISOString(),
  },
  {
    id: '3',
    title: 'Greet the customers',
    userId: '3',
    date: sub(new Date(), { minutes: 3 }).toISOString(),
  },
  {
    id: '4',
    title: 'Check inventory',
    userId: '1',
    date: sub(new Date(), { minutes: 4 }).toISOString(),
  },
  {
    id: '5',
    title: 'Order supplies',
    userId: '2',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
  {
    id: '6',
    title: 'Confirm reservations',
    userId: '3',
    date: sub(new Date(), { minutes: 6 }).toISOString(),
  },
  {
    id: '7',
    title: 'Plan the week’s menu',
    userId: '2',
    date: sub(new Date(), { minutes: 7 }).toISOString(),
  },
  {
    id: '8',
    title: 'Inspect kitchen for cleanliness',
    userId: '1',
    date: sub(new Date(), { minutes: 8 }).toISOString(),
  },
  {
    id: '9',
    title: 'Arrange airport pickups',
    userId: '3',
    date: sub(new Date(), { minutes: 9 }).toISOString(),
  },
  {
    id: '10',
    title: 'Update guest billing information',
    userId: '1',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
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
            date: new Date().toISOString(),
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
