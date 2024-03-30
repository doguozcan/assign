import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const Task = () => {
  const { taskId } = useParams()
  const navigate = useNavigate()

  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === taskId)
  )

  if (!task) {
    return <p>No task found!</p>
  }

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <button onClick={goBack} className="text-orange-400">
        Go back
      </button>
      <h2>{task.title}</h2>
    </div>
  )
}
export default Task
