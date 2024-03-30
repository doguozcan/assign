import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TasksList from './features/tasks/TasksList'
import Task from './features/tasks/Task'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TasksList />}></Route>
        <Route path="tasks/:taskId" element={<Task />} />
      </Routes>
    </Router>
  )
}
