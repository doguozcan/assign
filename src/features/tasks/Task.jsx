import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import TaskUser from './TaskUser'
import { CiPen } from 'react-icons/ci'

import { FaBullseye } from 'react-icons/fa'
import { IoTimeOutline } from 'react-icons/io5'
import TimeAgo from './TimeAgo'

const Task = () => {
  const { taskId } = useParams()
  const navigate = useNavigate()

  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === taskId)
  )

  if (!task) {
    return <p>No task found!</p>
  }

  const handleClick = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div
      key={task.id}
      className="border-2 border-orange-600 p-2 m-2 rounded-md"
    >
      <h2 className="flex items-center gap-2">
        <FaBullseye className="text-orange-600" />
        {task.title.substring(0, 25)}
      </h2>
      <TaskUser userId={task.userId} />
      <p className="flex items-center space-x-2">
        <IoTimeOutline className="text-orange-600" />
        <TimeAgo timestamp={task.date} />
      </p>
      <p className="flex items-center space-x-2 text-orange-600">
        <CiPen />
        <Link to={`/editTask/${task.id}`} className="text-orange-400 font-bold">
          Edit task
        </Link>
      </p>
    </div>
  )
}
export default Task
