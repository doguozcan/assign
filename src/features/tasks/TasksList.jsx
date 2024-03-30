import { useSelector } from 'react-redux'
import AddTask from './AddTask'
import { Link } from 'react-router-dom'
import TaskUser from './TaskUser'
import { FaGlasses } from 'react-icons/fa'
import { FaBullseye } from 'react-icons/fa'

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks)

  const renderedTasks = tasks.map((task) => (
    <div
      key={task.id}
      className="border-2 border-orange-600 p-2 m-2 rounded-md"
    >
      <h2 className="flex items-center gap-2">
        <FaBullseye className="text-orange-600" />
        {task.title.substring(0, 25)}
      </h2>
      <TaskUser userId={task.userId} />
      <p className="flex items-center space-x-2 text-orange-600">
        <FaGlasses />
        <Link to={`tasks/${task.id}`} className="text-orange-400 font-bold">
          View task
        </Link>
      </p>
    </div>
  ))
  return (
    <div className="p-2 text-center">
      {<AddTask />}
      <h1 className="text-xl">Tasks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center">
        {renderedTasks}
      </div>
    </div>
  )
}
export default TasksList
