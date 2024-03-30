import { configureStore } from '@reduxjs/toolkit'

import tasksReducer from '../features/tasks/taskSlice'
import usersSlice from '../features/users/usersSlice'

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    users: usersSlice,
  },
})
