import { useDispatch } from 'react-redux'
import { reactionAdded } from './tasksSlice'

const reactionEmojis = {
  thumbsUp: '👍',
  hearth: '❤️',
  fire: '🔥',
  hundred: '💯',
  collision: '💥',
}

const ReactionButtons = ({ task }) => {
  const dispatch = useDispatch()

  const reactionsButtons = Object.entries(reactionEmojis).map(
    ([name, emoji]) => {
      return (
        <button
          key={name}
          className="bg-orange-100 p-1 rounded-lg text-lg"
          onClick={() =>
            dispatch(reactionAdded({ taskId: task.id, reaction: name }))
          }
        >
          {emoji} {task.reactions[name]}
        </button>
      )
    }
  )

  return (
    <div className="flex justify-around p-2 items-center">
      {reactionsButtons}
    </div>
  )
}
export default ReactionButtons
