import MessageBlock from "./messageBlock";


export default function Message({username, contentItem}) {


    return (
        <div>
        {
            contentItem.blocks?.map((block) => (

                <MessageBlock username={username} block={block} />
            ))
        }
        </div>
    );

}