import { useSelector } from 'react-redux'
import AddTask from './AddTask'
import { Link } from 'react-router-dom'

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks)

  const renderedTasks = tasks.map((task) => (
    <div key={task.id}>
      <h2>{task.title.substring(0, 25)}</h2>
      <Link to={`tasks/${task.id}`} className="text-orange-400">
        View Task
      </Link>
    </div>
  ))
  return (
    <div>
      {<AddTask />}
      <h1>Tasks</h1>
      {renderedTasks}
    </div>
  )
}
export default TasksList
