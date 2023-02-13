import { parseISO, format } from 'date-fns'

// Utility component for rendering a date
export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
