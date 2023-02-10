import utilStyles from '../styles/utils.module.css'
import Message from './message'
import User from './user'



export default function ChannelContentItem({
  contentItem,
  allChannels,
  allUsers,
}) {

  if (contentItem.type === 'message') {
    if (contentItem.subtype && contentItem.subtype === 'channel_join') {
      return <div><User userData={allUsers} userId={contentItem.user}/> joined the channel</div>
      // FIXME
    } else if (
      contentItem.subtype &&
      contentItem.subtype === 'channel_purpose'
    ) {
      return (
        <div>
          <User userData={allUsers} userId={contentItem.user}/> set the channel purpose: {contentItem.purpose}
        </div>
      )
      // FIXME
    } else {
      return (
        <Message
          contentItem={contentItem}
          allChannels={allChannels}
          userId={contentItem.user}
          allUsers={allUsers}
        />
      )
    }
  } else {
    return (
      <div className={utilStyles.error}>
        Unknown ContentItem type: {contentItem.type}
      </div>
    )
  }
}
