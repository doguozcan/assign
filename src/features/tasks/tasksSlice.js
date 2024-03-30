import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
  {
    id: '1',
    title: 'Clean the rooms',
    userId: '1',
    date: sub(new Date(), { minutes: 1 }).toISOString(),
    reactions: { thumbsUp: 0, hearth: 0, fire: 0, hundred: 0, collision: 0 },
  },
  {
    id: '2',
    title: 'Prepare the meal',
    userId: '2',
    date: sub(new Date(), { minutes: 2 }).toISOString(),
    reactions: { thumbsUp: 0, hearth: 0, fire: 0, hundred: 0, collision: 0 },
  },
  {
    id: '3',
    title: 'Greet the customers',
    userId: '3',
    date: sub(new Date(), { minutes: 3 }).toISOString(),
    reactions: { thumbsUp: 0, hearth: 0, fire: 0, hundred: 0, collision: 0 },
  },
  {
    id: '4',
    title: 'Check inventory',
    userId: '1',
    date: sub(new Date(), { minutes: 4 }).toISOString(),
    reactions: { thumbsUp: 0, hearth: 0, fire: 0, hundred: 0, collision: 0 },
  },
  {
    id: '5',
    title: 'Order supplies',
    userId: '2',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: { thumbsUp: 0, hearth: 0, fire: 0, hundred: 0, collision: 0 },
  },
  {
    id: '6',
    title: 'Confirm reservations',
    userId: '3',
    date: sub(new Date(), { minutes: 6 }).toISOString(),
    reactions: { thumbsUp: 0, hearth: 0, fire: 0, hundred: 0, collision: 0 },
  },
  {
    id: '7',
    title: 'Plan the week’s menu',
    userId: '2',
    date: sub(new Date(), { minutes: 7 }).toISOString(),
    reactions: { thumbsUp: 0, hearth: 0, fire: 0, hundred: 0, collision: 0 },
  },
  {
    id: '8',
    title: 'Inspect kitchen for cleanliness',
    userId: '1',
    date: sub(new Date(), { minutes: 8 }).toISOString(),
    reactions: { thumbsUp: 0, hearth: 0, fire: 0, hundred: 0, collision: 0 },
  },
  {
    id: '9',
    title: 'Arrange airport pickups',
    userId: '3',
    date: sub(new Date(), { minutes: 9 }).toISOString(),
    reactions: { thumbsUp: 0, hearth: 0, fire: 0, hundred: 0, collision: 0 },
  },
  {
    id: '10',
    title: 'Update guest billing information',
    userId: '1',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: { thumbsUp: 0, hearth: 0, fire: 0, hundred: 0, collision: 0 },
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
            reactions: {
              thumbsUp: 0,
              hearth: 0,
              fire: 0,
              hundred: 0,
              collision: 0,
            },
          },
        }
      },
    },
    taskUpdated(state, action) {
      const { id, userId, title } = action.payload
      const existingTask = state.find((task) => task.id === id)

      if (existingTask) {
        existingTask.title = title
        existingTask.userId = userId
      }
    },
    reactionAdded(state, action) {
      const { taskId, reaction } = action.payload
      const existingTask = state.find((task) => task.id === taskId)
      if (existingTask) {
        existingTask.reactions[reaction] += 1
      }
    },
  },
})

export const { taskAdded, taskUpdated, reactionAdded } = tasksSlice.actions

export default tasksSlice.reducer
