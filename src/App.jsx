import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Tasks from './features/tasks/Tasks'
import Task from './features/tasks/Task'
import Navbar from './app/Navbar'
import EditTask from './features/tasks/EditTask'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Tasks />}></Route>
          <Route path="tasks/:taskId" element={<Task />} />
          <Route path="editTask/:taskId" element={<EditTask />} />
        </Route>
      </Routes>
    </Router>
  )
}
