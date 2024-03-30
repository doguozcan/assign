import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { taskAdded } from './taskSlice'

const AddTask = () => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const onTitleChanged = (e) => setTitle(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title) {
      dispatch(taskAdded(title))
      setTitle('')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" value={title} onChange={onTitleChanged}></input>
        <button>Save task</button>
      </form>
    </div>
  )
}
export default AddTask
