import utilStyles from '../styles/utils.module.css'
import Message from './message'

function getUserName(id, userData) {
  var result = userData.filter((user) => {
    return user.id === id
  })

  if (result && result.length > 0) {
    return result[0].name
  } else {
    return '[UNKNOWN USER]'
  }
}

export default function ChannelContentItem({
  contentItem,
  allChannels,
  allUsers,
}) {
  var username = getUserName(contentItem.user, allUsers)

  if (contentItem.type === 'message') {
    if (contentItem.subtype && contentItem.subtype === 'channel_join') {
      return <div>{username} joined the channel</div>
      // FIXME
    } else if (
      contentItem.subtype &&
      contentItem.subtype === 'channel_purpose'
    ) {
      return (
        <div>
          {username} set the channel purpose: {contentItem.purpose}
        </div>
      )
      // FIXME
    } else {
      return (
        <Message
          username={username}
          contentItem={contentItem}
          allChannels={allChannels}
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
