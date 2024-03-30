import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { IoMdArrowRoundBack } from 'react-icons/io'

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
    <div className="p-2">
      <button
        onClick={goBack}
        className="text-orange-400 flex gap-2 items-center my-2"
      >
        <IoMdArrowRoundBack />
        Go back
      </button>
      <h2>{task.title}</h2>
    </div>
  )
}
export default Task
