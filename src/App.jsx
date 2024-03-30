import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TasksList from './features/tasks/TasksList'
import Task from './features/tasks/Task'
import Navbar from './app/Navbar'
import EditTask from './features/tasks/EditTask'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<TasksList />}></Route>
          <Route path="tasks/:taskId" element={<Task />} />
          <Route path="editTask/:taskId" element={<EditTask />} />
        </Route>
      </Routes>
    </Router>
  )
}
