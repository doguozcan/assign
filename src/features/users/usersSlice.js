import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Doe' },
  { id: '3', name: 'Josh Doe' },
  { id: '4', name: 'Jasmine Doe' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
