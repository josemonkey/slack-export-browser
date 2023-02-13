import RichTextBlock from './richTextBlock'
import utilStyles from '../styles/utils.module.css'

// Messages have multiple MessageBlocks
export default function MessageBlock({ block, allChannels, userId, allUsers }) {
  if (block.type === 'rich_text') {
    return (
      <RichTextBlock
        block={block}
        allChannels={allChannels}
        userId={userId}
        allUsers={allUsers}
      />
    )
  } else {
    return (
      <div className={utilStyles.error}>Unknown Block type: {block.type}</div>
    )
  }
}
