import { useDispatch, useSelector } from 'react-redux'
import { taskUpdated } from './tasksSlice'
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
  const [userId, setUserId] = useState(task.userId)

  const dispatch = useDispatch()

  const users = useSelector((state) => state.users)

  const canSave = title && userId

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onUserChanged = (e) => setUserId(e.target.value)

  const handleEdit = (e) => {
    e.preventDefault()
    if (title) {
      dispatch(taskUpdated({ id: taskId, title, userId }))
      navigate(`/tasks/${taskId}`)
    }
  }

  return (
    <div className="flex justify-center p-2 bg-orange-600 rounded-lg">
      <form onSubmit={handleEdit} className="flex flex-col w-1/2 max-w-sm">
        <label htmlFor="title" className="text-white text-center text-lg">
          Task
        </label>
        <input
          id="title"
          value={title}
          onChange={onTitleChanged}
          className="p-2 rounded-lg outline-none"
        ></input>
        <label htmlFor="user" className="text-white text-center text-lg">
          User
        </label>
        <select
          id="user"
          value={userId}
          onChange={onUserChanged}
          className="p-2 rounded-lg outline-none"
        >
          <option value="">select a user</option>
          {usersOptions}
        </select>
        <button
          disabled={!canSave}
          className="bg-orange-400 p-2 my-2 rounded-lg disabled:bg-yellow-800 text-white"
        >
          Save task
        </button>
      </form>
    </div>
  )
}
export default EditTask
