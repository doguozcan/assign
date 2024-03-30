import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TasksList from './features/tasks/TasksList'
import Task from './features/tasks/Task'
import Navbar from './app/Navbar'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<TasksList />}></Route>
          <Route path="tasks/:taskId" element={<Task />} />
        </Route>
      </Routes>
    </Router>
  )
}
