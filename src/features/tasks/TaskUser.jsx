import { useSelector } from 'react-redux'
import { IoPerson } from 'react-icons/io5'

const TaskUser = ({ userId }) => {
  const user = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  )

  return (
    <div className="flex items-center space-x-2">
      <IoPerson className="text-orange-600" />
      <p>{user ? user.name : 'Unknown user'}</p>
    </div>
  )
}
export default TaskUser
