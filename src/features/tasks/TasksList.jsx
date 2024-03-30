import { useSelector } from 'react-redux'

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks)

  const renderedTasks = tasks.map((task) => (
    <div>
      <h2>{task.title}</h2>
    </div>
  ))
  return (
    <div>
      <h1>Tasks</h1>
      {renderedTasks}
    </div>
  )
}
export default TasksList
