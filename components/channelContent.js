import utilStyles from '../styles/utils.module.css'
import Date from './date'
import ChannelContentItem from './channelContentItem'

// Renders a specific ChannelContent object. We get multiple per channel - one for each date.
export default function ChannelContent({
  id,
  date,
  content,
  allChannels,
  allUsers,
}) {
  return (
    <div>
      <h2>
        <Date dateString={date} />
      </h2>

      {content?.map((thisOne) => (
        <ChannelContentItem
          contentItem={thisOne}
          allChannels={allChannels}
          allUsers={allUsers}
        />
      ))}
    </div>
  )
}
