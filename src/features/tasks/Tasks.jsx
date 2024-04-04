import { useSelector } from 'react-redux'
import AddTask from './AddTask'
import TaskExcerpt from './TaskExcerpt'

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks)

  const orderedTasks = tasks
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))

  const renderedTasks = orderedTasks.map((task) => (
    <TaskExcerpt task={task} key={task.id} />
  ))
  return (
    <div className="p-2">
      {<AddTask />}
      <h1 className="text-xl">Tasks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center">
        {renderedTasks}
      </div>
    </div>
  )
}
export default TasksList
