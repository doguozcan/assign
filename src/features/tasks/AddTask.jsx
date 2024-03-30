import { useState } from 'react'

const AddTask = () => {
  const [title, setTitle] = useState('')

  const onTitleChanged = (e) => setTitle(e.target.value)

  const handleSubmit = () => {}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" value={title} onChange={onTitleChanged}></input>
        <button type="button">Save task</button>
      </form>
    </div>
  )
}
export default AddTask
