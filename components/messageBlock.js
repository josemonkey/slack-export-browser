import RichTextBlock from "./richTextBlock";


export default function MessageBlock({ username, block }) {

    console.log(block);


    if (block.type === "rich_text") {
        return (
            <RichTextBlock username={username} block={block} />
        );
    } else {


        return (




            <div>Unknown Block type: {block.type}</div>


        );
    }
}