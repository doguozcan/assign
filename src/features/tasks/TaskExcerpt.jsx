import { Link } from 'react-router-dom'
import TaskUser from './TaskUser'
import TimeAgo from './TimeAgo'
import { FaGlasses } from 'react-icons/fa'
import { FaBullseye } from 'react-icons/fa'
import { IoTimeOutline } from 'react-icons/io5'
import ReactionButtons from './ReactionButtons'
import React from 'react'

let TaskExcerpt = ({ task }) => {
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
        <FaGlasses />
        <Link to={`tasks/${task.id}`} className="text-orange-400 font-bold">
          View task
        </Link>
      </p>
      <ReactionButtons task={task} />
    </div>
  )
}

TaskExcerpt = React.memo(TaskExcerpt)

export default TaskExcerpt
