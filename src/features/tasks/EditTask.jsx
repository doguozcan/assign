import { useDispatch, useSelector } from 'react-redux'
import { taskUpdated } from './taskSlice'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const EditTask = () => {
  const { taskId } = useParams()
  const navigate = useNavigate()

  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === taskId)
  )

  const [title, setTitle] = useState(task.title)
  const dispatch = useDispatch()

  const onTitleChanged = (e) => setTitle(e.target.value)

  const handleEdit = (e) => {
    e.preventDefault()
    if (title) {
      dispatch(taskUpdated({ id: taskId, title }))
      navigate(`/tasks/${taskId}`)
    }
  }

  return (
    <div>
      <form onSubmit={handleEdit}>
        <label htmlFor="title">Title</label>
        <input id="title" value={title} onChange={onTitleChanged}></input>
        <button>Edit task</button>
      </form>
    </div>
  )
}
export default EditTask
