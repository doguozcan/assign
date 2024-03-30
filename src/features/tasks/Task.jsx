import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

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
    <div className="p-2">
      <button
        onClick={handleClick}
        className="text-orange-400 flex gap-2 items-center my-2"
      >
        <IoMdArrowRoundBack />
        Go back
      </button>
      <h2>{task.title}</h2>
      <Link to={`/editTask/${taskId}`}>Edit Task</Link>
    </div>
  )
}
export default Task
