import RichTextBlock from "./richTextBlock";
import utilStyles from '../styles/utils.module.css'



export default function MessageBlock({ username, block }) {

    console.log(block);


    if (block.type === "rich_text") {
        return (
            <RichTextBlock username={username} block={block} />
        );
    } else {


        return (




            <div className={utilStyles.error}>Unknown Block type: {block.type}</div>


        );
    }
}