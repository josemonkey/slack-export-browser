import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'
import ChannelContent from './channelContent'

/* Renders a channel. This component is used mainly to iterate through the ChannelContent objects we get for this channel. */
export default function Channel({ channel, allChannels, allUsers }) {
  return (
    <div>
      <h1 className={utilStyles.headingXl}>#{channel.title}</h1>

      {channel.days.map(({ id, date, content }) => (
        <ChannelContent
          id={id}
          date={date}
          content={content}
          allChannels={allChannels}
          allUsers={allUsers}
        />
      ))}
    </div>
  )
}
