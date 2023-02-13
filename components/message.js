import MessageBlock from './messageBlock'

// ChannelContentItems contain Messages. This component renders those Messages.
export default function Message({ contentItem, allChannels, allUsers }) {
  return (
    <div>
      {contentItem.blocks?.map((block) => (
        <MessageBlock
          block={block}
          allChannels={allChannels}
          userId={contentItem.user}
          allUsers={allUsers}
        />
      ))}
    </div>
  )
}
