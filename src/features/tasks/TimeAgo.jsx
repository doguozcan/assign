import { parseISO, formatDistanceToNow } from 'date-fns'

const TimeAgo = ({ timestamp }) => {
  const date = parseISO(timestamp)
  let timeAgo = formatDistanceToNow(date) + ' ago'

  return <span>{timeAgo}</span>
}
export default TimeAgo
