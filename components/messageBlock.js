import RichTextBlock from "./richTextBlock";
import utilStyles from '../styles/utils.module.css'



export default function MessageBlock({ username, block, allChannels}) {



    if (block.type === "rich_text") {
        return (
            <RichTextBlock username={username} block={block} allChannels={allChannels}/>
        );
    } else {


        return (




            <div className={utilStyles.error}>Unknown Block type: {block.type}</div>


        );
    }
}