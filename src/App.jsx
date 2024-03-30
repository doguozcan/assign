import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TasksList from './features/tasks/TasksList'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TasksList />}></Route>
      </Routes>
    </Router>
  )
}
