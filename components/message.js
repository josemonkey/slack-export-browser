import MessageBlock from "./messageBlock";


export default function Message({username, contentItem, allChannels}) {


    return (
        <div>
        {
            contentItem.blocks?.map((block) => (

                <MessageBlock username={username} block={block} allChannels={allChannels}/>
            ))
        }
        </div>
    );

}